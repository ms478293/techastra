import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Shield, BarChart3, Settings, Eye, AlertTriangle, CheckCircle, Activity, Globe, Users, Zap, Target, Network } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const TecAstraLab = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [realTimeStats, setRealTimeStats] = useState({
    totalTraffic: 245678,
    blockedThreats: 1247,
    activeConnections: 892,
    policyViolations: 23
  });

  // Interactive firewall controls
  const [firewallEnabled, setFirewallEnabled] = useState(true);
  const [threatDetectionEnabled, setThreatDetectionEnabled] = useState(true);
  const [appControlEnabled, setAppControlEnabled] = useState(true);
  const [intruspectionEnabled, setIntruspectionEnabled] = useState(true);
  
  // Policy management
  const [newRule, setNewRule] = useState({
    name: '',
    source: '',
    destination: '',
    port: '',
    action: 'allow',
    protocol: 'tcp'
  });
  
  // Live traffic simulation
  const [trafficLog, setTrafficLog] = useState([
    { time: new Date().toLocaleTimeString(), source: '192.168.1.100', destination: '8.8.8.8', port: '443', action: 'ALLOWED', protocol: 'HTTPS' },
    { time: new Date().toLocaleTimeString(), source: '192.168.1.101', destination: '1.1.1.1', port: '53', action: 'ALLOWED', protocol: 'DNS' },
    { time: new Date().toLocaleTimeString(), source: '192.168.1.102', destination: 'malicious-site.com', port: '80', action: 'BLOCKED', protocol: 'HTTP' },
    { time: new Date().toLocaleTimeString(), source: '192.168.1.103', destination: '10.0.0.50', port: '22', action: 'ALLOWED', protocol: 'SSH' }
  ]);
  
  // Application controls
  const [applicationControls, setApplicationControls] = useState({
    'Microsoft Teams': { enabled: true, bandwidth: '2.4 GB', users: 156 },
    'Dropbox': { enabled: true, bandwidth: '1.8 GB', users: 89 },
    'Zoom': { enabled: true, bandwidth: '3.2 GB', users: 234 },
    'YouTube': { enabled: false, bandwidth: '4.1 GB', users: 67 },
    'Facebook': { enabled: false, bandwidth: '892 MB', users: 23 },
    'Slack': { enabled: true, bandwidth: '1.2 GB', users: 178 }
  });

  // Network blocking simulation
  const [blockedIPs, setBlockedIPs] = useState([
    '192.168.100.50',
    '10.0.0.99',
    '172.16.0.200'
  ]);
  
  const [newBlockIP, setNewBlockIP] = useState('');

  // Real-time traffic generation
  const generateTrafficEntry = () => {
    const sources = ['192.168.1.100', '192.168.1.101', '192.168.1.102', '192.168.1.103', '192.168.1.104'];
    const destinations = ['8.8.8.8', '1.1.1.1', 'google.com', 'microsoft.com', 'malicious-site.com', 'suspicious-domain.net'];
    const ports = ['80', '443', '53', '22', '3389', '21'];
    const protocols = ['HTTP', 'HTTPS', 'DNS', 'SSH', 'RDP', 'FTP'];
    const actions = firewallEnabled ? ['ALLOWED', 'BLOCKED'] : ['ALLOWED'];
    
    const source = sources[Math.floor(Math.random() * sources.length)];
    const destination = destinations[Math.floor(Math.random() * destinations.length)];
    const port = ports[Math.floor(Math.random() * ports.length)];
    const protocol = protocols[Math.floor(Math.random() * protocols.length)];
    
    let action = 'ALLOWED';
    if (firewallEnabled && (destination.includes('malicious') || destination.includes('suspicious'))) {
      action = 'BLOCKED';
    }
    if (!firewallEnabled) {
      action = 'ALLOWED';
    }
    
    return {
      time: new Date().toLocaleTimeString(),
      source,
      destination,
      port,
      action,
      protocol
    };
  };

  // Interactive functions
  const toggleApplication = (appName: keyof typeof applicationControls) => {
    setApplicationControls(prev => ({
      ...prev,
      [appName]: {
        ...prev[appName],
        enabled: !prev[appName].enabled
      }
    }));
    
    // Add application control action to traffic log
    const action = applicationControls[appName].enabled ? 'BLOCKED' : 'ALLOWED';
    const controlEntry = {
      time: new Date().toLocaleTimeString(),
      source: 'Application Control',
      destination: appName,
      port: 'app',
      action: action,
      protocol: 'APP_CONTROL'
    };
    setTrafficLog(prev => [controlEntry, ...prev.slice(0, 19)]);
  };

  const blockIP = () => {
    if (newBlockIP && !blockedIPs.includes(newBlockIP)) {
      setBlockedIPs(prev => [...prev, newBlockIP]);
      setNewBlockIP('');
      
      // Add blocking action to traffic log
      const blockEntry = {
        time: new Date().toLocaleTimeString(),
        source: newBlockIP,
        destination: 'any',
        port: 'all',
        action: 'BLOCKED',
        protocol: 'ALL'
      };
      setTrafficLog(prev => [blockEntry, ...prev.slice(0, 19)]);
    }
  };

  const unblockIP = (ip: string) => {
    setBlockedIPs(prev => prev.filter(blockedIP => blockedIP !== ip));
    
    // Add unblocking action to traffic log
    const unblockEntry = {
      time: new Date().toLocaleTimeString(),
      source: ip,
      destination: 'any',
      port: 'all',
      action: 'UNBLOCKED',
      protocol: 'ALL'
    };
    setTrafficLog(prev => [unblockEntry, ...prev.slice(0, 19)]);
  };

  const addFirewallRule = () => {
    if (newRule.name && newRule.source && newRule.destination) {
      // Add rule application to traffic log
      const ruleEntry = {
        time: new Date().toLocaleTimeString(),
        source: newRule.source,
        destination: newRule.destination,
        port: newRule.port || 'any',
        action: newRule.action.toUpperCase(),
        protocol: newRule.protocol.toUpperCase()
      };
      setTrafficLog(prev => [ruleEntry, ...prev.slice(0, 19)]);
      
      // Reset form
      setNewRule({
        name: '',
        source: '',
        destination: '',
        port: '',
        action: 'allow',
        protocol: 'tcp'
      });
    }
  };

  const simulateAttack = () => {
    console.log('Simulating attack...');
    const attackTypes = [
      { source: '185.220.100.240', destination: '192.168.1.100', port: '22', protocol: 'SSH', type: 'Brute Force' },
      { source: '91.229.23.45', destination: '192.168.1.101', port: '3389', protocol: 'RDP', type: 'Remote Access' },
      { source: '142.93.130.78', destination: '192.168.1.102', port: '80', protocol: 'HTTP', type: 'SQL Injection' },
      { source: '198.51.100.10', destination: '192.168.1.103', port: '443', protocol: 'HTTPS', type: 'XSS Attack' }
    ];
    
    const attack = attackTypes[Math.floor(Math.random() * attackTypes.length)];
    const attackEntry = {
      time: new Date().toLocaleTimeString(),
      source: attack.source,
      destination: attack.destination,
      port: attack.port,
      action: threatDetectionEnabled ? 'BLOCKED' : 'ALLOWED',
      protocol: `${attack.protocol} (${attack.type})`
    };
    
    setTrafficLog(prev => [attackEntry, ...prev.slice(0, 19)]);
    
    if (threatDetectionEnabled) {
      setRealTimeStats(prev => ({
        ...prev,
        blockedThreats: prev.blockedThreats + 1
      }));
    }
    
    console.log('Attack simulated:', attackEntry);
  };

  const clearTrafficLog = () => {
    console.log('Clearing traffic log...');
    setTrafficLog([]);
  };

  // Simulate real-time data updates and traffic generation
  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats
      setRealTimeStats(prev => ({
        totalTraffic: prev.totalTraffic + Math.floor(Math.random() * 100),
        blockedThreats: firewallEnabled ? prev.blockedThreats + Math.floor(Math.random() * 2) : prev.blockedThreats,
        activeConnections: prev.activeConnections + Math.floor(Math.random() * 20) - 10,
        policyViolations: prev.policyViolations + Math.floor(Math.random() * 1)
      }));
      
      // Generate new traffic entry
      const newEntry = generateTrafficEntry();
      setTrafficLog(prev => [newEntry, ...prev.slice(0, 19)]);
    }, 3000);

    return () => clearInterval(interval);
  }, [firewallEnabled, threatDetectionEnabled]);

  const threatData = [
    { type: 'Malware', count: 423, severity: 'critical', trend: '+12%' },
    { type: 'Phishing', count: 287, severity: 'high', trend: '+8%' },
    { type: 'Suspicious IPs', count: 156, severity: 'medium', trend: '-5%' },
    { type: 'DDoS Attempts', count: 89, severity: 'high', trend: '+15%' },
    { type: 'Port Scans', count: 234, severity: 'low', trend: '+3%' },
    { type: 'Botnet Traffic', count: 67, severity: 'critical', trend: '+22%' }
  ];

  const applicationTraffic = [
    { app: 'Microsoft Teams', traffic: '2.4 GB', status: 'allowed', users: 156 },
    { app: 'Dropbox', traffic: '1.8 GB', status: 'monitored', users: 89 },
    { app: 'Zoom', traffic: '3.2 GB', status: 'allowed', users: 234 },
    { app: 'YouTube', traffic: '4.1 GB', status: 'limited', users: 67 },
    { app: 'Facebook', traffic: '892 MB', status: 'blocked', users: 23 },
    { app: 'Slack', traffic: '1.2 GB', status: 'allowed', users: 178 }
  ];

  const securityPolicies = [
    { 
      name: 'Web Browsing Policy', 
      status: 'active', 
      rules: 12, 
      description: 'Controls access to web content and social media platforms',
      lastModified: '2 hours ago'
    },
    { 
      name: 'Remote Access Policy', 
      status: 'active', 
      rules: 8, 
      description: 'Manages VPN and remote desktop connections',
      lastModified: '1 day ago'
    },
    { 
      name: 'Database Security Policy', 
      status: 'active', 
      rules: 15, 
      description: 'Protects database servers and sensitive data access',
      lastModified: '3 hours ago'
    },
    { 
      name: 'IoT Device Policy', 
      status: 'warning', 
      rules: 6, 
      description: 'Controls Internet of Things device communications',
      lastModified: '5 minutes ago'
    }
  ];

  const networkTopology = [
    { zone: 'DMZ', devices: 12, traffic: '45.2 GB', status: 'secure' },
    { zone: 'Internal Network', devices: 234, traffic: '128.7 GB', status: 'secure' },
    { zone: 'Guest Network', devices: 45, traffic: '12.3 GB', status: 'monitored' },
    { zone: 'Management VLAN', devices: 8, traffic: '2.1 GB', status: 'secure' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50';
      case 'high': return 'text-orange-600 bg-orange-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'allowed': return 'text-green-600 bg-green-50';
      case 'blocked': return 'text-red-600 bg-red-50';
      case 'monitored': return 'text-blue-600 bg-blue-50';
      case 'limited': return 'text-yellow-600 bg-yellow-50';
      case 'warning': return 'text-orange-600 bg-orange-50';
      case 'active': return 'text-green-600 bg-green-50';
      case 'secure': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-[hsl(var(--tecastra-teal))] mr-3" />
              <div>
                <h1 className="text-xl font-bold text-[hsl(var(--tecastra-darkblue))]">TecAstra Lab</h1>
                <p className="text-sm text-gray-600">FortIQ Next-Gen Firewall Prototype</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                System Healthy
              </Badge>
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                Live Demo Mode
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeView} onValueChange={setActiveView} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard" className="flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="threats" className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Threats
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Applications
            </TabsTrigger>
            <TabsTrigger value="policies" className="flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Policies
            </TabsTrigger>
            <TabsTrigger value="network" className="flex items-center">
              <Network className="h-4 w-4 mr-2" />
              Network
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Dashboard View */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Interactive Controls */}
            <Card>
              <CardHeader>
                <CardTitle>Live Firewall Controls</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Toggle features on/off to see real-time impact on security metrics
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={firewallEnabled} 
                      onCheckedChange={setFirewallEnabled}
                      id="firewall"
                    />
                    <Label htmlFor="firewall">Firewall Engine</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={threatDetectionEnabled} 
                      onCheckedChange={setThreatDetectionEnabled}
                      id="threat-detection"
                    />
                    <Label htmlFor="threat-detection">Threat Detection</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={appControlEnabled} 
                      onCheckedChange={setAppControlEnabled}
                      id="app-control"
                    />
                    <Label htmlFor="app-control">App Control</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={intruspectionEnabled} 
                      onCheckedChange={setIntruspectionEnabled}
                      id="intrusion"
                    />
                    <Label htmlFor="intrusion">IPS/IDS</Label>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button 
                    onClick={simulateAttack}
                    variant="destructive"
                    size="sm"
                  >
                    Simulate Attack
                  </Button>
                  <Button 
                    onClick={clearTrafficLog}
                    variant="outline"
                    size="sm"
                  >
                    Clear Traffic Log
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Traffic</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[hsl(var(--tecastra-teal))]">
                      {realTimeStats.totalTraffic.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last hour
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Blocked Threats</CardTitle>
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600">
                      {realTimeStats.blockedThreats.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +8% from last hour
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[hsl(var(--tecastra-darkblue))]">
                      {realTimeStats.activeConnections}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Real-time count
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Policy Violations</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">
                      {realTimeStats.policyViolations}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Last 24 hours
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Inbound Traffic</span>
                      <span className="text-sm text-muted-foreground">156.7 GB</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Outbound Traffic</span>
                      <span className="text-sm text-muted-foreground">89.3 GB</span>
                    </div>
                    <Progress value={45} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Internal Traffic</span>
                      <span className="text-sm text-muted-foreground">234.1 GB</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Firewall Rules</span>
                      </div>
                      <Badge className="bg-green-50 text-green-600">Active</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Threat Detection</span>
                      </div>
                      <Badge className="bg-green-50 text-green-600">Running</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm">Policy Updates</span>
                      </div>
                      <Badge className="bg-yellow-50 text-yellow-600">Pending</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">System Health</span>
                      </div>
                      <Badge className="bg-green-50 text-green-600">Optimal</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Threats View */}
          <TabsContent value="threats" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Real-Time Threat Detection</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Advanced ML-powered threat analysis and blocking
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {threatData.map((threat, index) => (
                    <motion.div
                      key={threat.type}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <Target className="h-5 w-5 text-red-500" />
                        <div>
                          <h3 className="font-medium">{threat.type}</h3>
                          <p className="text-sm text-muted-foreground">
                            {threat.count} incidents detected
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getSeverityColor(threat.severity)}>
                          {threat.severity.toUpperCase()}
                        </Badge>
                        <span className="text-sm font-medium text-green-600">
                          {threat.trend}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications View */}
          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Application Control</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Click the switches to allow/block applications and see immediate effects in traffic logs
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(applicationControls).map(([appName, appData], index) => (
                    <motion.div
                      key={appName}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <Globe className="h-5 w-5 text-blue-500" />
                        <div>
                          <h3 className="font-medium">{appName}</h3>
                          <p className="text-sm text-muted-foreground">
                            {appData.users} active users • {appData.bandwidth}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={appData.enabled ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}>
                          {appData.enabled ? 'ALLOWED' : 'BLOCKED'}
                        </Badge>
                        <Switch
                          checked={appData.enabled}
                          onCheckedChange={() => toggleApplication(appName as keyof typeof applicationControls)}
                          id={`app-${appName}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Traffic Log */}
            <Card>
              <CardHeader>
                <CardTitle>Live Application Traffic</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Real-time traffic showing the impact of your application controls
                </p>
              </CardHeader>
              <CardContent>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {trafficLog.filter(entry => entry.protocol === 'APP_CONTROL').map((entry, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded text-sm">
                      <span className="text-muted-foreground">{entry.time}</span>
                      <span className="font-mono">{entry.destination}</span>
                      <Badge className={entry.action === 'ALLOWED' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}>
                        {entry.action}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Policies View */}
          <TabsContent value="policies" className="space-y-6">
            {/* Create New Firewall Rule */}
            <Card>
              <CardHeader>
                <CardTitle>Create Custom Firewall Rule</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Define traffic rules and see them applied instantly to network traffic
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="rule-name">Rule Name</Label>
                    <Input
                      id="rule-name"
                      placeholder="Block Social Media"
                      value={newRule.name}
                      onChange={(e) => setNewRule(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="source-ip">Source IP/Range</Label>
                    <Input
                      id="source-ip"
                      placeholder="192.168.1.0/24"
                      value={newRule.source}
                      onChange={(e) => setNewRule(prev => ({ ...prev, source: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dest-ip">Destination IP/Domain</Label>
                    <Input
                      id="dest-ip"
                      placeholder="facebook.com"
                      value={newRule.destination}
                      onChange={(e) => setNewRule(prev => ({ ...prev, destination: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="port">Port</Label>
                    <Input
                      id="port"
                      placeholder="80,443"
                      value={newRule.port}
                      onChange={(e) => setNewRule(prev => ({ ...prev, port: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="protocol">Protocol</Label>
                    <select
                      id="protocol"
                      className="w-full p-2 border rounded"
                      value={newRule.protocol}
                      onChange={(e) => setNewRule(prev => ({ ...prev, protocol: e.target.value }))}
                    >
                      <option value="tcp">TCP</option>
                      <option value="udp">UDP</option>
                      <option value="any">ANY</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="action">Action</Label>
                    <select
                      id="action"
                      className="w-full p-2 border rounded"
                      value={newRule.action}
                      onChange={(e) => setNewRule(prev => ({ ...prev, action: e.target.value }))}
                    >
                      <option value="allow">ALLOW</option>
                      <option value="block">BLOCK</option>
                      <option value="monitor">MONITOR</option>
                    </select>
                  </div>
                </div>
                <Button 
                  onClick={addFirewallRule}
                  className="mt-4 bg-[hsl(var(--tecastra-teal))] hover:bg-[hsl(var(--tecastra-teal))]/90"
                  disabled={!newRule.name || !newRule.source || !newRule.destination}
                >
                  Apply Rule
                </Button>
              </CardContent>
            </Card>

            {/* IP Blocking Interface */}
            <Card>
              <CardHeader>
                <CardTitle>IP Address Blocking</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Block or unblock specific IP addresses with immediate effect
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <Input
                    placeholder="Enter IP address (e.g., 192.168.1.100)"
                    value={newBlockIP}
                    onChange={(e) => setNewBlockIP(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={blockIP}
                    variant="destructive"
                    disabled={!newBlockIP}
                  >
                    Block IP
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Currently Blocked IPs</h4>
                  {blockedIPs.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No IPs currently blocked</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {blockedIPs.map((ip, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded">
                          <span className="font-mono text-sm">{ip}</span>
                          <Button
                            onClick={() => unblockIP(ip)}
                            size="sm"
                            variant="outline"
                          >
                            Unblock
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Policy Status */}
            <div className="grid gap-4">
              {securityPolicies.map((policy, index) => (
                <motion.div
                  key={policy.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Settings className="h-5 w-5 text-[hsl(var(--tecastra-teal))]" />
                          <div>
                            <h3 className="font-medium">{policy.name}</h3>
                            <p className="text-sm text-muted-foreground">{policy.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Last modified: {policy.lastModified}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium">{policy.rules} rules</span>
                          <Badge className={getStatusColor(policy.status)}>
                            {policy.status.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Network View */}
          <TabsContent value="network" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Network Topology & Zones</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Monitor network segments and traffic flow
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {networkTopology.map((zone, index) => (
                    <motion.div
                      key={zone.zone}
                      className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-[hsl(var(--tecastra-darkblue))]">{zone.zone}</h3>
                        <Badge className={getStatusColor(zone.status)}>
                          {zone.status.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Devices:</span>
                          <span className="text-sm font-medium">{zone.devices}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Traffic:</span>
                          <span className="text-sm font-medium">{zone.traffic}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics View */}
          <TabsContent value="analytics" className="space-y-6">
            {/* Live Traffic Monitor */}
            <Card>
              <CardHeader>
                <CardTitle>Live Network Traffic Monitor</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Real-time traffic analysis showing immediate effects of your firewall configuration changes
                </p>
              </CardHeader>
              <CardContent>
                <div className="max-h-96 overflow-y-auto">
                  <div className="space-y-2">
                    {trafficLog.map((entry, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded border ${
                          entry.action === 'BLOCKED' ? 'bg-red-50 border-red-200' : 
                          entry.action === 'ALLOWED' ? 'bg-green-50 border-green-200' :
                          'bg-blue-50 border-blue-200'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-muted-foreground font-mono">{entry.time}</span>
                          <span className="font-mono">{entry.source}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="font-mono">{entry.destination}</span>
                          <span className="text-muted-foreground">:{entry.port}</span>
                          <span className="px-2 py-1 bg-white rounded text-xs">{entry.protocol}</span>
                        </div>
                        <Badge className={
                          entry.action === 'BLOCKED' ? 'bg-red-100 text-red-700' :
                          entry.action === 'ALLOWED' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }>
                          {entry.action}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">CPU Usage</span>
                        <span className="text-sm text-muted-foreground">
                          {firewallEnabled ? '45%' : '23%'}
                        </span>
                      </div>
                      <Progress value={firewallEnabled ? 45 : 23} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Memory Usage</span>
                        <span className="text-sm text-muted-foreground">
                          {threatDetectionEnabled ? '78%' : '52%'}
                        </span>
                      </div>
                      <Progress value={threatDetectionEnabled ? 78 : 52} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Network Throughput</span>
                        <span className="text-sm text-muted-foreground">89%</span>
                      </div>
                      <Progress value={89} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configuration Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Firewall Engine</span>
                      <Badge className={firewallEnabled ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}>
                        {firewallEnabled ? 'ACTIVE' : 'DISABLED'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Threat Detection</span>
                      <Badge className={threatDetectionEnabled ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}>
                        {threatDetectionEnabled ? 'ACTIVE' : 'DISABLED'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Application Control</span>
                      <Badge className={appControlEnabled ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}>
                        {appControlEnabled ? 'ACTIVE' : 'DISABLED'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Blocked IPs</span>
                      <Badge variant="outline">{blockedIPs.length} IPs</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              TecAstra FortIQ Demo Environment • Version 2.1.0 • Last Updated: {new Date().toLocaleDateString()}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Export Logs
              </Button>
              <Button variant="outline" size="sm">
                Schedule Demo
              </Button>
              <Button className="bg-[hsl(var(--tecastra-teal))] hover:bg-[hsl(var(--tecastra-teal))]/90" size="sm">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TecAstraLab;