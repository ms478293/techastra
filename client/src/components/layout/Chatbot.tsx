import { useState } from 'react';
import { 
  MessageSquare, 
  X, 
  Send 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello! I\'m TecAstra\'s AI assistant. How can I help you with cybersecurity solutions today?',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      sender: 'user',
      text: newMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentMessage = newMessage;
    setNewMessage('');
    
    try {
      // Call Z.ai backend endpoint
      const response = await fetch('/api/chat/zai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentMessage }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from chatbot');
      }
      
      const data = await response.json();
      
      const botMessage: Message = {
        sender: 'bot',
        text: data.response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
      
      const errorMessage: Message = {
        sender: 'bot',
        text: 'I apologize, but I\'m experiencing technical difficulties. Please try again later or contact our support team directly.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleChatbot}
        className="h-16 w-16 rounded-full shadow-lg flex items-center justify-center bg-[hsl(var(--tecastra-teal))] hover:bg-[hsl(var(--tecastra-darkblue))] transition duration-150"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
      
      {/* Chatbot Interface */}
      <div className={cn(
        "absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-2xl overflow-hidden transition-opacity duration-200",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className="bg-[hsl(var(--tecastra-teal))] text-white p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-heading font-semibold">TecAstra Assistant</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChatbot} 
              className="text-white hover:text-[hsl(var(--tecastra-gold))] h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="h-80 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={cn(
                "flex mb-4", 
                message.sender === 'user' ? "justify-end" : ""
              )}
            >
              {message.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--tecastra-teal))] flex items-center justify-center text-white flex-shrink-0">
                  <MessageSquare className="h-4 w-4" />
                </div>
              )}
              <div 
                className={cn(
                  "rounded-lg p-3 max-w-[80%]",
                  message.sender === 'bot' 
                    ? "ml-2 bg-[hsl(var(--tecastra-gray))]" 
                    : "bg-[hsl(var(--tecastra-teal))] text-white"
                )}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="relative">
            <Input
              type="text"
              placeholder="Type your message..."
              className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus-visible:ring-[hsl(var(--tecastra-teal))]"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button 
              type="submit"
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-2 text-[hsl(var(--tecastra-teal))] hover:text-[hsl(var(--tecastra-gold))]"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
