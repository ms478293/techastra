import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints for TecAstra website
  
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, phone, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required fields' });
      }
      
      // In a real app, this would store the contact info or send an email
      // For now, we'll just return a success response
      return res.status(200).json({ 
        message: 'Thank you for contacting TecAstra. Our team will get back to you shortly.'
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
  });
  
  // Demo request endpoint
  app.post('/api/demo-request', async (req, res) => {
    try {
      const { name, email, company, phone, productInterest } = req.body;
      
      // Validate required fields
      if (!name || !email || !company || !productInterest) {
        return res.status(400).json({ 
          message: 'Name, email, company, and product interest are required fields' 
        });
      }
      
      // In a real app, this would store the demo request or send an email
      // For now, we'll just return a success response
      return res.status(200).json({ 
        message: 'Thank you for requesting a demo. A TecAstra representative will contact you within 24 hours to schedule your personalized demo.'
      });
    } catch (error) {
      console.error('Error submitting demo request:', error);
      return res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
  });
  
  // Newsletter subscription endpoint
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      // Validate email
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      // In a real app, this would add the email to a newsletter subscription service
      // For now, we'll just return a success response
      return res.status(200).json({ 
        message: 'Thank you for subscribing to TecAstra updates.'
      });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      return res.status(500).json({ message: 'An error occurred while processing your subscription.' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
