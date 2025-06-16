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

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeStats(prev => ({
        totalTraffic: prev.totalTraffic + Math.floor(Math.random() * 100),
        blockedThreats: prev.blockedThreats + Math.floor(Math.random() * 3),
        activeConnections: prev.activeConnections + Math.floor(Math.random() * 20) - 10,
        policyViolations: prev.policyViolations + Math.floor(Math.random() * 2)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
                <CardTitle>Application Traffic Control</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Monitor and control application usage across your network
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applicationTraffic.map((app, index) => (
                    <motion.div
                      key={app.app}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <Globe className="h-5 w-5 text-blue-500" />
                        <div>
                          <h3 className="font-medium">{app.app}</h3>
                          <p className="text-sm text-muted-foreground">
                            {app.users} active users
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium">{app.traffic}</span>
                        <Badge className={getStatusColor(app.status)}>
                          {app.status.toUpperCase()}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Policies View */}
          <TabsContent value="policies" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-[hsl(var(--tecastra-darkblue))]">Security Policies</h2>
                <p className="text-muted-foreground">Manage firewall rules and access controls</p>
              </div>
              <Button className="bg-[hsl(var(--tecastra-teal))] hover:bg-[hsl(var(--tecastra-teal))]/90">
                <Settings className="h-4 w-4 mr-2" />
                Create Policy
              </Button>
            </div>

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
                        <span className="text-sm text-muted-foreground">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Memory Usage</span>
                        <span className="text-sm text-muted-foreground">67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
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
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Blocked suspicious IP: 192.168.1.100</span>
                      <span className="text-xs text-muted-foreground">2m ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Policy update applied successfully</span>
                      <span className="text-xs text-muted-foreground">5m ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">High bandwidth usage detected</span>
                      <span className="text-xs text-muted-foreground">8m ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">New application identified: Teams</span>
                      <span className="text-xs text-muted-foreground">12m ago</span>
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