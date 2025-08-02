import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Shield, Brain, Globe, Zap, BarChart3, Users, AlertTriangle, Play, Pause, RefreshCw, Eye, Lock, Activity } from 'lucide-react';
import { Link } from 'wouter';

const Demo = () => {
  const [activeDemo, setActiveDemo] = useState('dns-filtering');
  const [isSimulating, setIsSimulating] = useState(false);
  const [threatCount, setThreatCount] = useState(0);
  const [blockedDomains, setBlockedDomains] = useState(0);
  const [queryCount, setQueryCount] = useState(0);

  const demoSections = [
    {
      id: 'dns-filtering',
      title: 'DNS Threat Filtering',
      icon: Shield,
      description: 'Experience real-time DNS threat detection and blocking'
    },
    {
      id: 'ai-analysis',
      title: 'AI Threat Analysis',
      icon: Brain,
      description: 'See how AI analyzes and scores domain threats'
    },
    {
      id: 'dashboard',
      title: 'Security Dashboard',
      icon: BarChart3,
      description: 'Explore comprehensive security analytics'
    },
    {
      id: 'policy-management',
      title: 'Policy Management',
      icon: Users,
      description: 'Configure and manage DNS security policies'
    }
  ];

  const simulatedThreats = [
    { domain: 'malicious-phishing-site.com', type: 'Phishing', risk: 'High', blocked: true },
    { domain: 'crypto-miner-pool.net', type: 'Cryptomining', risk: 'Medium', blocked: true },
    { domain: 'suspicious-download.org', type: 'Malware', risk: 'High', blocked: true },
    { domain: 'fake-banking-login.co', type: 'Phishing', risk: 'Critical', blocked: true },
    { domain: 'botnet-command.xyz', type: 'C2 Communication', risk: 'Critical', blocked: true }
  ];

  const startSimulation = () => {
    setIsSimulating(true);
    const interval = setInterval(() => {
      setThreatCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      setBlockedDomains(prev => prev + Math.floor(Math.random() * 2) + 1);
      setQueryCount(prev => prev + Math.floor(Math.random() * 50) + 10);
    }, 1000);

    setTimeout(() => {
      setIsSimulating(false);
      clearInterval(interval);
    }, 10000);
  };

  const resetDemo = () => {
    setThreatCount(0);
    setBlockedDomains(0);
    setQueryCount(0);
    setIsSimulating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--tecastra-darkblue))] to-[hsl(var(--tecastra-teal))]">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              ClearDNS Interactive Demo
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Experience the power of AI-driven DNS security. Test our threat detection, 
              explore the dashboard, and see how ClearDNS protects your organization in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={startSimulation}
                disabled={isSimulating}
                className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150 flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSimulating ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {isSimulating ? 'Simulation Running...' : 'Start Live Simulation'}
              </motion.button>
              <motion.button
                onClick={resetDemo}
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className="h-5 w-5" />
                Reset Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Navigation */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {demoSections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveDemo(section.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activeDemo === section.id
                    ? 'bg-white text-[hsl(var(--tecastra-darkblue))] shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <section.icon className="h-8 w-8 mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{section.title}</h3>
                <p className="text-sm opacity-80">{section.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Real-time Stats Header */}
            <div className="bg-[hsl(var(--tecastra-darkblue))] text-white p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--tecastra-gold))]">{queryCount.toLocaleString()}</div>
                  <div className="text-sm opacity-80">DNS Queries Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">{threatCount}</div>
                  <div className="text-sm opacity-80">Threats Detected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--tecastra-teal))]">{blockedDomains}</div>
                  <div className="text-sm opacity-80">Domains Blocked</div>
                </div>
              </div>
            </div>

            {/* DNS Filtering Demo */}
            {activeDemo === 'dns-filtering' && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  Real-Time DNS Threat Filtering
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Recent Threat Detections</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {simulatedThreats.map((threat, index) => (
                        <motion.div
                          key={index}
                          className="p-4 border rounded-lg bg-red-50 border-red-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-red-800">{threat.domain}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              threat.risk === 'Critical' ? 'bg-red-600 text-white' :
                              threat.risk === 'High' ? 'bg-red-500 text-white' :
                              'bg-yellow-500 text-white'
                            }`}>
                              {threat.risk}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{threat.type}</span>
                            <span className="flex items-center text-green-600">
                              <Shield className="h-4 w-4 mr-1" />
                              Blocked
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Protection Categories</h3>
                    <div className="space-y-4">
                      {[
                        { category: 'Phishing & Fraud', blocked: 45, color: 'red' },
                        { category: 'Malware & Trojans', blocked: 32, color: 'orange' },
                        { category: 'Cryptomining', blocked: 18, color: 'yellow' },
                        { category: 'C2 Communication', blocked: 12, color: 'purple' },
                        { category: 'Suspicious Domains', blocked: 28, color: 'blue' }
                      ].map((cat, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <span className="font-medium">{cat.category}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${cat.color}-100 text-${cat.color}-800`}>
                            {cat.blocked} blocked
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* AI Analysis Demo */}
            {activeDemo === 'ai-analysis' && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  AI-Powered Threat Analysis
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Domain Risk Scoring</h3>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">suspicious-banking-site.com</span>
                          <span className="text-2xl font-bold text-red-600">95/100</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <div>• Domain age: 2 days (suspicious)</div>
                          <div>• SSL certificate: Self-signed</div>
                          <div>• Hosting: Bulletproof hosting provider</div>
                          <div>• Content similarity: 98% match to legitimate bank</div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">crypto-mining-pool.net</span>
                          <span className="text-2xl font-bold text-yellow-600">72/100</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <div>• Known mining pool operator</div>
                          <div>• High CPU usage patterns</div>
                          <div>• Multiple subdomain variants</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">ML Model Performance</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Detection Accuracy</span>
                          <span className="text-2xl font-bold text-green-600">99.8%</span>
                        </div>
                        <div className="text-sm text-gray-600">Based on 10M+ analyzed domains</div>
                      </div>
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">False Positive Rate</span>
                          <span className="text-2xl font-bold text-blue-600">0.02%</span>
                        </div>
                        <div className="text-sm text-gray-600">Industry-leading precision</div>
                      </div>
                      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Response Time</span>
                          <span className="text-2xl font-bold text-purple-600">&lt;2ms</span>
                        </div>
                        <div className="text-sm text-gray-600">Real-time threat scoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Dashboard Demo */}
            {activeDemo === 'dashboard' && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  Security Analytics Dashboard
                </h2>
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold">2.4M</div>
                        <div className="text-sm opacity-80">Queries Today</div>
                      </div>
                      <Activity className="h-8 w-8 opacity-80" />
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold">1,247</div>
                        <div className="text-sm opacity-80">Threats Blocked</div>
                      </div>
                      <Shield className="h-8 w-8 opacity-80" />
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold">99.95%</div>
                        <div className="text-sm opacity-80">Uptime</div>
                      </div>
                      <Zap className="h-8 w-8 opacity-80" />
                    </div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Top Threat Categories (24h)</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Phishing', count: 456, percentage: 65 },
                        { name: 'Malware', count: 234, percentage: 35 },
                        { name: 'Cryptomining', count: 189, percentage: 28 },
                        { name: 'Botnet C2', count: 123, percentage: 18 },
                        { name: 'Suspicious', count: 89, percentage: 12 }
                      ].map((threat, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <span className="font-medium">{threat.name}</span>
                          <div className="flex items-center gap-3">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-red-500 h-2 rounded-full" 
                                style={{ width: `${threat.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium w-12 text-right">{threat.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Geographic Threat Distribution</h3>
                    <div className="space-y-3">
                      {[
                        { country: 'Russia', threats: 234, flag: '🇷🇺' },
                        { country: 'China', threats: 189, flag: '🇨🇳' },
                        { country: 'North Korea', threats: 156, flag: '🇰🇵' },
                        { country: 'Iran', threats: 98, flag: '🇮🇷' },
                        { country: 'Unknown', threats: 67, flag: '❓' }
                      ].map((location, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{location.flag}</span>
                            <span className="font-medium">{location.country}</span>
                          </div>
                          <span className="text-sm font-medium">{location.threats} threats</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Policy Management Demo */}
            {activeDemo === 'policy-management' && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-6">
                  DNS Security Policy Management
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Active Security Policies</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Corporate Security Policy', status: 'Active', rules: 45, users: 1250 },
                        { name: 'Guest Network Policy', status: 'Active', rules: 12, users: 89 },
                        { name: 'Executive Protection', status: 'Active', rules: 67, users: 15 },
                        { name: 'Development Team Policy', status: 'Active', rules: 23, users: 156 }
                      ].map((policy, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{policy.name}</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                              {policy.status}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>{policy.rules} rules</span>
                            <span>{policy.users} users</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Policy Configuration</h3>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-3">Threat Categories</h4>
                        <div className="space-y-2">
                          {[
                            { category: 'Malware & Trojans', enabled: true },
                            { category: 'Phishing & Fraud', enabled: true },
                            { category: 'Cryptomining', enabled: true },
                            { category: 'Adult Content', enabled: false },
                            { category: 'Social Media', enabled: false }
                          ].map((cat, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm">{cat.category}</span>
                              <div className={`w-10 h-5 rounded-full ${cat.enabled ? 'bg-green-500' : 'bg-gray-300'} relative`}>
                                <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${cat.enabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-3">Response Actions</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <input type="radio" name="action" defaultChecked className="text-blue-600" />
                            <span>Block and Log</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" name="action" className="text-blue-600" />
                            <span>Log Only</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" name="action" className="text-blue-600" />
                            <span>Redirect to Warning Page</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to Deploy ClearDNS in Your Environment?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              This interactive demo shows just a fraction of ClearDNS capabilities. 
              Contact our team to discuss your specific requirements and get a personalized demonstration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-full font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150">
                Schedule Personal Demo
              </Link>
              <Link href="/products/cleardns" className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[hsl(var(--tecastra-darkblue))] transition duration-150">
                Learn More About ClearDNS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Demo;