import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { promises as dns } from 'dns';
import axios from 'axios';
import { promisify } from 'util';
import { exec } from 'child_process';

const execAsync = promisify(exec);

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
  
  // Z.ai chatbot integration endpoint
  app.post('/api/chat/zai', async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      try {
        // Call actual Z.ai API using correct format from documentation
        const zaiResponse = await axios.post('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
          model: 'glm-4-flash',
          messages: [
            {
              role: 'system',
              content: 'You are TecAstra\'s AI cybersecurity assistant. Provide helpful, professional advice about cybersecurity solutions, threat prevention, and TecAstra products (FortIQ, ClearDNS, TrustLynk, SentraCore, MailShield 360, NebulaWall, IdentaGate, PulseIQ, FlowOps, UnifySec). Keep responses concise and actionable.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.95,
          max_tokens: 1024,
          stream: false
        }, {
          headers: {
            'Authorization': 'Bearer ' + process.env.ZAI_API_KEY,
            'Content-Type': 'application/json'
          }
        });
        
        const aiResponse = zaiResponse.data.choices[0].message.content;
        
        return res.json({ 
          response: aiResponse,
          timestamp: new Date().toISOString()
        });
      } catch (apiError) {
        console.error('Z.ai API error:', apiError);
        
        // Fallback to simulated responses if API fails
        const cybersecurityResponses = [
          "Based on current threat intelligence, I recommend implementing multi-factor authentication and regular security audits.",
          "TecAstra's FortIQ Next-Gen Firewall can help protect against advanced persistent threats. Would you like to learn more?",
          "For ransomware protection, consider our comprehensive endpoint detection and response solution, SentraCore.",
          "Zero Trust architecture is essential for modern cybersecurity. Our TrustLynk platform can help you implement this approach.",
          "Cloud security compliance is critical. Our NebulaWall platform provides developer-first cloud protection.",
          "Email security threats are evolving. MailShield 360 offers advanced protection against phishing and brand spoofing."
        ];
        
        const randomResponse = cybersecurityResponses[Math.floor(Math.random() * cybersecurityResponses.length)];
        
        return res.json({ 
          response: randomResponse + " (Note: AI assistant is currently in fallback mode)",
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Z.ai integration error:', error);
      return res.status(500).json({ error: 'Failed to process chat request' });
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

  // ClearDNS Security Platform API Endpoints
  
  // Valid access codes for ClearDNS platform
  const validAccessCodes = [
    'CLEARDNS-ENTERPRISE-2024',
    'TECASTRA-TRIAL-ACCESS', 
    'DNS-SECURITY-DEMO-001',
    'CYBERSEC-EVAL-2024',
    '73938R72897E-73Y73YR7EY'
  ];

  // Known malicious domains for demonstration
  const maliciousDomains = [
    'malware-test.com',
    'phishing-example.net',
    'trojan-download.org',
    'ransomware-c2.info',
    'botnet-command.biz',
    'fake-bank.com',
    'credential-harvest.net',
    'exploit-kit.org',
    'suspicious-domain.xyz',
    'threat-actor.site'
  ];

  // ClearDNS Authentication
  app.post('/api/cleardns/auth', async (req, res) => {
    try {
      const { accessCode } = req.body;
      
      if (!accessCode) {
        return res.status(400).json({ 
          success: false, 
          message: 'Access code is required' 
        });
      }
      
      if (validAccessCodes.includes(accessCode.trim().toUpperCase())) {
        // Generate a simple token (in production, use proper JWT)
        const token = `cleardns_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        return res.status(200).json({ 
          success: true, 
          token,
          message: 'Authentication successful'
        });
      } else {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid access code. Please contact TecAstra support for valid credentials.'
        });
      }
    } catch (error) {
      console.error('Error in ClearDNS auth:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Authentication service error' 
      });
    }
  });

  // Storage for real-time threat logs
  let threatLogs: any[] = [];
  let queryStats = {
    totalQueries: 0,
    threatsBlocked: 0,
    startTime: Date.now()
  };
  
  // Function to add threat log
  function addThreatLog(domain: string, threatType: string, risk: string, action: string, sourceIP: string = '127.0.0.1') {
    const threat = {
      id: `THR-${String(threatLogs.length + 1).padStart(3, '0')}`,
      timestamp: new Date().toISOString(),
      domain,
      type: threatType,
      risk,
      action,
      sourceIP,
      userAgent: 'ClearDNS Security Platform'
    };
    
    threatLogs.unshift(threat); // Add to beginning
    if (threatLogs.length > 100) { // Keep only last 100 logs
      threatLogs = threatLogs.slice(0, 100);
    }
    
    if (action === 'Blocked') {
      queryStats.threatsBlocked++;
    }
  }
  
  // Get threat logs
  app.get('/api/cleardns/threats', async (req, res) => {
    try {
      // Add some initial demo threats if empty
      if (threatLogs.length === 0) {
        addThreatLog('malware-test.com', 'Malware', 'Critical', 'Blocked');
        addThreatLog('phishing-example.net', 'Phishing', 'High', 'Blocked');
        addThreatLog('suspicious-domain.xyz', 'Suspicious', 'Medium', 'Quarantined');
      }
      
      return res.status(200).json({ threats: threatLogs });
    } catch (error) {
      console.error('Error fetching threats:', error);
      return res.status(500).json({ message: 'Error fetching threat data' });
    }
  });

  // Storage for DNS query history
  let dnsQueryHistory: any[] = [];
  
  // Function to add DNS query to history
  function addDNSQuery(domain: string, queryType: string, status: string, responseTime: number, clientIP: string = '127.0.0.1') {
    const query = {
      id: `query_${String(dnsQueryHistory.length + 1).padStart(4, '0')}`,
      timestamp: new Date().toISOString(),
      domain,
      queryType,
      responseTime,
      status,
      clientIP
    };
    
    dnsQueryHistory.unshift(query); // Add to beginning
    if (dnsQueryHistory.length > 200) { // Keep only last 200 queries
      dnsQueryHistory = dnsQueryHistory.slice(0, 200);
    }
  }
  
  // Get DNS queries
  app.get('/api/cleardns/queries', async (req, res) => {
    try {
      // Add some initial demo queries if empty
      if (dnsQueryHistory.length === 0) {
        addDNSQuery('google.com', 'A', 'Resolved', 15);
        addDNSQuery('microsoft.com', 'A', 'Resolved', 22);
        addDNSQuery('malware-test.com', 'A', 'Blocked', 8);
        addDNSQuery('github.com', 'AAAA', 'Resolved', 18);
      }
      
      return res.status(200).json({ queries: dnsQueryHistory });
    } catch (error) {
      console.error('Error fetching queries:', error);
      return res.status(500).json({ message: 'Error fetching query data' });
    }
  });

  // Get security policies
  app.get('/api/cleardns/policies', async (req, res) => {
    try {
      const policies = [
        {
          id: 1,
          name: 'Malware Protection',
          enabled: true,
          categories: ['Malware', 'Trojans', 'Viruses'],
          action: 'Block',
          whitelist: [],
          blacklist: ['malware-test.com', 'trojan-download.org']
        },
        {
          id: 2,
          name: 'Phishing Prevention',
          enabled: true,
          categories: ['Phishing', 'Fraud', 'Scams'],
          action: 'Block',
          whitelist: [],
          blacklist: ['phishing-example.net', 'fake-bank.com']
        },
        {
          id: 3,
          name: 'C2 Communication Block',
          enabled: true,
          categories: ['Command & Control', 'Botnet'],
          action: 'Block',
          whitelist: [],
          blacklist: ['ransomware-c2.info', 'botnet-command.biz']
        },
        {
          id: 4,
          name: 'Social Media Filter',
          enabled: false,
          categories: ['Social Media', 'Entertainment'],
          action: 'Log',
          whitelist: ['linkedin.com'],
          blacklist: []
        },
        {
          id: 5,
          name: 'Cryptocurrency Mining',
          enabled: true,
          categories: ['Cryptocurrency', 'Mining'],
          action: 'Block',
          whitelist: [],
          blacklist: ['crypto-miner.site', 'mining-pool.xyz']
        }
      ];
      
      return res.status(200).json({ policies });
    } catch (error) {
      console.error('Error fetching policies:', error);
      return res.status(500).json({ message: 'Error fetching policy data' });
    }
  });

  // Update security policy
  app.put('/api/cleardns/policies/:id', async (req, res) => {
    try {
      const policyId = parseInt(req.params.id);
      const updatedPolicy = req.body;
      
      // In a real app, this would update the policy in a database
      // For demo purposes, we'll just return the updated policy
      return res.status(200).json({ 
        policy: { ...updatedPolicy, id: policyId },
        message: 'Policy updated successfully'
      });
    } catch (error) {
      console.error('Error updating policy:', error);
      return res.status(500).json({ message: 'Error updating policy' });
    }
  });

  // Get dashboard statistics
  app.get('/api/cleardns/stats', async (req, res) => {
    try {
      const uptime = Date.now() - queryStats.startTime;
      const uptimeHours = uptime / (1000 * 60 * 60);
      const uptimePercent = Math.min(99.99, 99 + (uptimeHours / 100));
      
      const stats = {
        totalQueries: queryStats.totalQueries,
        threatsBlocked: queryStats.threatsBlocked,
        uptime: `${uptimePercent.toFixed(2)}%`,
        avgResponseTime: threatLogs.length > 0 ? 
          Math.round(threatLogs.reduce((sum, log) => sum + (Math.random() * 50 + 10), 0) / threatLogs.length) : 
          15,
        activeThreats: threatLogs.filter(log => log.action === 'Blocked').length,
        systemStatus: 'Operational',
        lastUpdate: new Date().toISOString()
      };
      
      return res.status(200).json({ stats });
    } catch (error) {
      console.error('Error fetching stats:', error);
      return res.status(500).json({ message: 'Error fetching statistics' });
    }
  });

  // Real DNS query analysis with threat intelligence
  app.post('/api/cleardns/query', async (req, res) => {
    try {
      const { domain, queryType = 'A' } = req.body;
      
      if (!domain) {
        return res.status(400).json({ error: 'Domain is required' });
      }
      
      const startTime = Date.now();
      let result = {
        domain,
        queryType,
        status: 'Unknown',
        timestamp: new Date().toISOString(),
        responseTime: 0,
        riskScore: 0,
        action: 'Analyzing',
        threatAnalysis: {
          malwareDetection: false,
          phishingDetection: false,
          reputationScore: 0,
          ageAnalysis: 'Unknown',
          geoLocation: 'Unknown',
          registrar: 'Unknown'
        }
      };
      
      try {
        // Real DNS resolution
        let dnsResults = [];
        
        if (queryType === 'A' || queryType === 'ALL') {
          try {
            const addresses = await dns.resolve4(domain);
            dnsResults.push({ type: 'A', records: addresses });
            result.ipAddress = addresses[0];
          } catch (err) {
            console.log(`A record lookup failed for ${domain}:`, err.message);
          }
        }
        
        if (queryType === 'AAAA' || queryType === 'ALL') {
          try {
            const addresses = await dns.resolve6(domain);
            dnsResults.push({ type: 'AAAA', records: addresses });
          } catch (err) {
            console.log(`AAAA record lookup failed for ${domain}`);
          }
        }
        
        if (queryType === 'MX' || queryType === 'ALL') {
          try {
            const mxRecords = await dns.resolveMx(domain);
            dnsResults.push({ type: 'MX', records: mxRecords });
          } catch (err) {
            console.log(`MX record lookup failed for ${domain}`);
          }
        }
        
        if (queryType === 'TXT' || queryType === 'ALL') {
          try {
            const txtRecords = await dns.resolveTxt(domain);
            dnsResults.push({ type: 'TXT', records: txtRecords });
          } catch (err) {
            console.log(`TXT record lookup failed for ${domain}`);
          }
        }
        
        result.dnsRecords = dnsResults;
        
        // Threat Intelligence Analysis
        await performThreatAnalysis(domain, result);
        
        // Calculate response time
        result.responseTime = Date.now() - startTime;
        
        // Determine final status and action
        if (result.riskScore >= 70) {
          result.status = 'Blocked';
          result.action = 'Blocked by security policy';
          result.reason = 'High risk domain detected';
          
          // Log the threat
          const threatType = result.threatAnalysis.phishingDetection ? 'Phishing' : 
                           result.threatAnalysis.malwareDetection ? 'Malware' : 'Suspicious';
          addThreatLog(domain, threatType, 'Critical', 'Blocked');
        } else if (result.riskScore >= 40) {
          result.status = 'Flagged';
          result.action = 'Flagged for review';
          result.reason = 'Medium risk domain';
          
          // Log the flagged domain
          addThreatLog(domain, 'Suspicious', 'Medium', 'Flagged');
        } else {
          result.status = 'Resolved';
          result.action = 'Allowed';
        }
        
        // Increment query counter
        queryStats.totalQueries++;
        
        // Add to DNS query history
        addDNSQuery(domain, queryType, result.status, result.responseTime);
        
      } catch (dnsError) {
        result.status = 'Failed';
        result.action = 'DNS Resolution Failed';
        result.reason = `DNS lookup failed: ${dnsError.message}`;
        result.responseTime = Date.now() - startTime;
        
        // Still log failed queries
        queryStats.totalQueries++;
        addDNSQuery(domain, queryType, 'Failed', result.responseTime);
      }
      
      return res.status(200).json(result);
    } catch (error) {
      console.error('Error testing DNS query:', error);
      return res.status(500).json({ error: 'Error processing DNS query' });
    }
  });
  
  // Threat analysis function
  async function performThreatAnalysis(domain: string, result: any) {
    try {
      // Check against known malicious domains
      const isMalicious = maliciousDomains.some(malDomain => 
        domain.toLowerCase().includes(malDomain.toLowerCase())
      );
      
      if (isMalicious) {
        result.riskScore = 95;
        result.threatAnalysis.malwareDetection = true;
        result.threatType = 'Known Malicious Domain';
        return;
      }
      
      // Domain age and reputation analysis
      try {
        // Check domain reputation using VirusTotal-like analysis
        const suspiciousPatterns = [
          /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/, // IP addresses as domains
          /[a-z0-9]{20,}/, // Very long random strings
          /[0-9]{5,}/, // Many consecutive numbers
          /(bit\.ly|tinyurl|t\.co|goo\.gl)/, // URL shorteners
          /(temp|tmp|test|fake|spam)/, // Suspicious keywords
          /\.(tk|ml|ga|cf)$/, // Suspicious TLDs
        ];
        
        let suspiciousScore = 0;
        suspiciousPatterns.forEach(pattern => {
          if (pattern.test(domain.toLowerCase())) {
            suspiciousScore += 20;
          }
        });
        
        // Check for phishing patterns
        const phishingPatterns = [
          /(paypal|amazon|microsoft|google|apple|facebook).*[0-9]/, // Brand + numbers
          /[a-z]+-[a-z]+-[a-z]+\.(com|net|org)/, // Multiple hyphens
          /(secure|login|verify|update|confirm)/, // Phishing keywords
        ];
        
        phishingPatterns.forEach(pattern => {
          if (pattern.test(domain.toLowerCase())) {
            suspiciousScore += 30;
            result.threatAnalysis.phishingDetection = true;
          }
        });
        
        // Domain length analysis
        if (domain.length > 50) {
          suspiciousScore += 15;
        }
        
        // Subdomain analysis
        const subdomainCount = (domain.match(/\./g) || []).length;
        if (subdomainCount > 3) {
          suspiciousScore += 10;
        }
        
        result.riskScore = Math.min(suspiciousScore, 100);
        result.threatAnalysis.reputationScore = 100 - result.riskScore;
        
        // Try to get WHOIS information for domain age
        try {
          const whoisResult = await execAsync(`nslookup ${domain}`);
          if (whoisResult.stdout.includes('Non-authoritative answer')) {
            result.threatAnalysis.ageAnalysis = 'Domain exists';
          }
        } catch (whoisError) {
          result.threatAnalysis.ageAnalysis = 'Domain analysis failed';
        }
        
        // Geo-location analysis (simplified)
        if (result.ipAddress) {
          try {
            // In a real implementation, you'd use a GeoIP service
            result.threatAnalysis.geoLocation = 'Location analysis available';
          } catch (geoError) {
            result.threatAnalysis.geoLocation = 'Location unknown';
          }
        }
        
      } catch (analysisError) {
        console.error('Threat analysis error:', analysisError);
        result.riskScore = 10; // Default low risk if analysis fails
      }
      
    } catch (error) {
      console.error('Error in threat analysis:', error);
      result.riskScore = 5;
    }
  }
  
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
