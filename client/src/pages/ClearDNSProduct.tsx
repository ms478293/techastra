import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Check, Shield, Brain, Globe, Zap, BarChart3, Users, AlertTriangle, Lock, Activity, Eye, Settings, LogOut, RefreshCw, Download, Filter, Search } from 'lucide-react';
import { Link } from 'wouter';

interface ThreatLog {
  id: string;
  timestamp: string;
  domain: string;
  type: 'Phishing' | 'Malware' | 'Cryptomining' | 'C2 Communication' | 'Suspicious';
  risk: 'Low' | 'Medium' | 'High' | 'Critical';
  action: 'Blocked' | 'Allowed' | 'Quarantined';
  sourceIP: string;
  userAgent?: string;
}

interface DNSQuery {
  id: string;
  timestamp: string;
  domain: string;
  queryType: string;
  responseTime: number;
  status: 'Resolved' | 'Blocked' | 'Redirected';
  clientIP: string;
}

interface SecurityPolicy {
  id: number;
  name: string;
  enabled: boolean;
  categories: string[];
  action: 'Block' | 'Log' | 'Redirect';
  whitelist: string[];
  blacklist: string[];
}

const ClearDNSProduct = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [threatLogs, setThreatLogs] = useState<ThreatLog[]>([]);
  const [dnsQueries, setDnsQueries] = useState<DNSQuery[]>([]);
  const [policies, setPolicies] = useState<SecurityPolicy[]>([]);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState<SecurityPolicy | null>(null);
  const [stats, setStats] = useState({
    totalQueries: 0,
    threatsBlocked: 0,
    uptime: '99.99%',
    avgResponseTime: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [testDomain, setTestDomain] = useState('');
  const [testResult, setTestResult] = useState<any>(null);
  const [testing, setTesting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('cleardns_token');
    if (token) {
      setIsAuthenticated(true);
      initializeData();
    }
  }, []);

  // Valid access codes (in production, this would be validated against a secure backend)
  const validAccessCodes = [
    'CLEARDNS-ENTERPRISE-2024',
    'TECASTRA-TRIAL-ACCESS',
    'DNS-SECURITY-DEMO-001',
    'CYBERSEC-EVAL-2024',
    '73938R72897E-73Y73YR7EY'
  ];

  // Base URL for API requests (adjusts for development vs production)
  const apiBase = import.meta.env.DEV ? '' : '';

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${apiBase}/api/cleardns/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessCode: accessCode.trim().toUpperCase() }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('cleardns_token', data.token);
        setIsAuthenticated(true);
        await initializeData();
      } else {
        setError(data.message || 'Invalid access code. Please contact TecAstra support for valid credentials.');
      }
    } catch (error) {
      setError('Connection error. Please try again.');
    }
    
    setLoading(false);
  };

  const initializeData = async () => {
    setLoading(true);
    try {
      const results = await Promise.allSettled([
        fetch(`${apiBase}/api/cleardns/threats`).then(res => res.json()),
        fetch(`${apiBase}/api/cleardns/queries`).then(res => res.json()),
        fetch(`${apiBase}/api/cleardns/policies`).then(res => res.json()),
        fetch(`${apiBase}/api/cleardns/stats`).then(res => res.json())
      ]);

      if (results[0].status === 'fulfilled') {
        setThreatLogs(results[0].value.threats || []);
      }
      if (results[1].status === 'fulfilled') {
        setDnsQueries(results[1].value.queries || []);
      }
      if (results[2].status === 'fulfilled') {
        setPolicies(results[2].value.policies || []);
      }
      if (results[3].status === 'fulfilled') {
        setStats(results[3].value.stats || {});
      } else {
        // Fallback stats if the stats endpoint fails
        setStats({
          totalQueries: 0,
          threatsBlocked: 0,
          uptime: 'N/A',
          avgResponseTime: 0
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load dashboard data. Please refresh the page.');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAccessCode('');
    setThreatLogs([]);
    setDnsQueries([]);
    setPolicies([]);
  };

  const togglePolicy = async (policyId: number) => {
    const policy = policies.find(p => p.id === policyId);
    if (!policy) return;

    try {
      const response = await fetch(`${apiBase}/api/cleardns/policies/${policyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...policy, enabled: !policy.enabled }),
      });

      if (response.ok) {
        const updatedPolicyResponse = await response.json();
        setPolicies(prev => prev.map(p =>
          p.id === policyId
            ? updatedPolicyResponse.policy
            : p
        ));
      }
    } catch (error) {
      console.error('Error updating policy:', error);
    }
  };

  const handleSavePolicy = async (policyData) => {
    try {
      const url = policyData.id 
        ? `${apiBase}/api/cleardns/policies/${policyData.id}` 
        : `${apiBase}/api/cleardns/policies`;
      
      const method = policyData.id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(policyData),
      });

      if (response.ok) {
        const savedPolicyResponse = await response.json();
        const savedPolicy = savedPolicyResponse.policy;

        if (policyData.id) {
          setPolicies(prev => prev.map(p => p.id === savedPolicy.id ? savedPolicy : p));
        } else {
          setPolicies(prev => [...prev, savedPolicy]);
        }
        setIsPolicyModalOpen(false);
        setEditingPolicy(null);
        // No need to call initializeData() as we've updated the state locally
      }
    } catch (error) {
      console.error('Error saving policy:', error);
    }
  };

  const handleEditPolicy = (policy) => {
    setEditingPolicy(policy);
    setIsPolicyModalOpen(true);
  };

  const handleDeletePolicy = async (policyId: number) => {
    if (window.confirm('Are you sure you want to delete this policy?')) {
      try {
        const response = await fetch(`${apiBase}/api/cleardns/policies/${policyId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setPolicies(prev => prev.filter(p => p.id !== policyId));
        }
      } catch (error) {
        console.error('Error deleting policy:', error);
      }
    }
  };

  const testDNSQuery = async () => {
    if (!testDomain.trim()) return;
    
    setTesting(true);
    try {
      const response = await fetch(`${apiBase}/api/cleardns/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain: testDomain, queryType: 'A' }),
      });
      
      const result = await response.json();
      setTestResult(result);
      
      // Refresh data to show new query in logs
      await initializeData();
    } catch (error) {
      console.error('Error testing DNS query:', error);
      setTestResult({ error: 'Failed to test DNS query' });
    }
    setTesting(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--tecastra-darkblue))] to-[hsl(var(--tecastra-teal))] flex items-center justify-center">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[hsl(var(--tecastra-gold))] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-[hsl(var(--tecastra-darkblue))]" />
            </div>
            <h1 className="font-heading font-bold text-2xl text-[hsl(var(--tecastra-darkblue))] mb-2">
              ClearDNS Security Platform
            </h1>
            <p className="text-gray-600">
              Enter your access code to continue
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Access Code
              </label>
              <input
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--tecastra-teal))] focus:border-transparent"
                placeholder="Enter your access code"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
            
            <motion.button
              onClick={handleLogin}
              disabled={loading || !accessCode}
              className="w-full px-6 py-3 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-lg font-medium hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[hsl(var(--tecastra-darkblue))]"></div>
                  Authenticating...
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5" />
                  Access Platform
                </>
              )}
            </motion.button>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Demo Access Codes:</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>• CLEARDNS-ENTERPRISE-2024</div>
              <div>• TECASTRA-TRIAL-ACCESS</div>
              <div>• DNS-SECURITY-DEMO-001</div>
              <div>• 73938R72897E-73Y73YR7EY</div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[hsl(var(--tecastra-gold))] rounded flex items-center justify-center">
                <Shield className="h-5 w-5 text-[hsl(var(--tecastra-darkblue))]" />
              </div>
              <h1 className="font-heading font-bold text-xl text-[hsl(var(--tecastra-darkblue))]">
                ClearDNS Security Platform
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'threats', label: 'Threat Logs', icon: AlertTriangle },
              { id: 'queries', label: 'DNS Queries', icon: Globe },
              { id: 'policies', label: 'Security Policies', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-[hsl(var(--tecastra-teal))] text-[hsl(var(--tecastra-teal))]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* DNS Query Tester */}
            <div className="bg-white rounded-lg shadow mb-8">
              <div className="p-6 border-b">
                <h3 className="font-semibold text-lg">Test DNS Query</h3>
                <p className="text-sm text-gray-600 mt-1">Test how ClearDNS handles domain queries and threat detection</p>
              </div>
              <div className="p-6">
                <div className="flex gap-4 items-end">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Domain to Test
                    </label>
                    <input
                      type="text"
                      value={testDomain}
                      onChange={(e) => setTestDomain(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--tecastra-teal))] focus:border-transparent"
                      placeholder="e.g., google.com or malicious-phishing-bank.com"
                      onKeyPress={(e) => e.key === 'Enter' && testDNSQuery()}
                    />
                  </div>
                  <button
                    onClick={testDNSQuery}
                    disabled={testing || !testDomain.trim()}
                    className="px-6 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-lg hover:bg-[hsl(var(--tecastra-teal))]/90 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {testing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Testing...
                      </>
                    ) : (
                      <>
                        <Globe className="h-4 w-4" />
                        Test Query
                      </>
                    )}
                  </button>
                </div>
                
                {testResult && (
                  <div className="mt-4 p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Query Result:</h4>
                    {testResult.error ? (
                      <div className="text-red-600">{testResult.error}</div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Domain:</span>
                          <span className="font-medium">{testResult.domain}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Status:</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            testResult.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                            testResult.status === 'Blocked' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {testResult.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Response Time:</span>
                          <span className="font-medium">{testResult.responseTime}ms</span>
                        </div>
                        {testResult.blocked && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Threat Type:</span>
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">
                              {testResult.threatType}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Timestamp:</span>
                          <span className="text-sm text-gray-500">
                            {new Date(testResult.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Queries</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalQueries.toLocaleString()}</p>
                  </div>
                  <Globe className="h-8 w-8 text-[hsl(var(--tecastra-teal))]" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Threats Blocked</p>
                    <p className="text-2xl font-bold text-red-600">{stats.threatsBlocked}</p>
                  </div>
                  <Shield className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Uptime</p>
                    <p className="text-2xl font-bold text-green-600">{stats.uptime}</p>
                  </div>
                  <Activity className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Response</p>
                    <p className="text-2xl font-bold text-blue-600">{stats.avgResponseTime}ms</p>
                  </div>
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <h3 className="font-semibold text-lg">Recent Threats</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {threatLogs.slice(0, 5).map((threat) => (
                      <div key={threat.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <div>
                          <p className="font-medium text-red-800">{threat.domain}</p>
                          <p className="text-sm text-gray-600">{threat.type}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          threat.risk === 'Critical' ? 'bg-red-600 text-white' :
                          threat.risk === 'High' ? 'bg-red-500 text-white' :
                          'bg-yellow-500 text-white'
                        }`}>
                          {threat.risk}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <h3 className="font-semibold text-lg">Active Policies</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {policies.map((policy) => (
                      <div key={policy.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{policy.name}</p>
                          <p className="text-sm text-gray-600">{policy.categories.join(', ')}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          policy.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {policy.enabled ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Threat Logs Tab */}
        {activeTab === 'threats' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="font-semibold text-lg">Threat Detection Logs</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source IP</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {threatLogs.map((threat) => (
                      <tr key={threat.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(threat.timestamp).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {threat.domain}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {threat.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            threat.risk === 'Critical' ? 'bg-red-600 text-white' :
                            threat.risk === 'High' ? 'bg-red-500 text-white' :
                            threat.risk === 'Medium' ? 'bg-yellow-500 text-white' :
                            'bg-green-500 text-white'
                          }`}>
                            {threat.risk}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            threat.action === 'Blocked' ? 'bg-red-100 text-red-800' :
                            threat.action === 'Allowed' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {threat.action}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {threat.sourceIP}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* DNS Queries Tab */}
        {activeTab === 'queries' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="font-semibold text-lg">DNS Query Logs</h3>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search domains..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--tecastra-teal))] focus:border-transparent"
                    />
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client IP</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dnsQueries.map((query) => (
                      <tr key={query.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(query.timestamp).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {query.domain}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {query.queryType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {query.responseTime}ms
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            query.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                            query.status === 'Blocked' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {query.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {query.clientIP}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Policies Tab */}
        {activeTab === 'policies' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="font-semibold text-lg">Security Policies</h3>
                <button 
                  onClick={() => setIsPolicyModalOpen(true)}
                  className="px-4 py-2 bg-[hsl(var(--tecastra-gold))] text-[hsl(var(--tecastra-darkblue))] rounded-lg hover:bg-[hsl(var(--tecastra-gold))]/90 transition duration-150"
                >
                  Create Policy
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {policies.map((policy) => (
                    <div key={policy.id} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold text-lg">{policy.name}</h4>
                          <button
                            onClick={() => togglePolicy(policy.id)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                              policy.enabled
                                ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                          >
                            {policy.enabled ? 'Enabled' : 'Disabled'}
                          </button>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => handleEditPolicy(policy)} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                            Edit
                          </button>
                          <button onClick={() => handleDeletePolicy(policy.id)} className="px-3 py-1 border border-red-300 text-red-600 rounded hover:bg-red-50">
                            Delete
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Categories</h5>
                          <div className="flex flex-wrap gap-1">
                            {policy.categories.map((category, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                {category}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Action</h5>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            policy.action === 'Block' ? 'bg-red-100 text-red-800' :
                            policy.action === 'Log' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {policy.action}
                          </span>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Rules</h5>
                          <div className="text-sm text-gray-600">
                            <div>Whitelist: {policy.whitelist.length} domains</div>
                            <div>Blacklist: {policy.blacklist.length} domains</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {isPolicyModalOpen && (
          <PolicyModal 
            policy={editingPolicy}
            onClose={() => {
              setIsPolicyModalOpen(false);
              setEditingPolicy(null);
            }}
            onSave={handleSavePolicy}
          />
        )}
      </div>
    </div>
  );
};

const PolicyModal = ({ policy, onClose, onSave }) => {
  const [formData, setFormData] = useState(policy || {
    name: '',
    enabled: true,
    categories: [],
    action: 'Block',
    whitelist: [],
    blacklist: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleListChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value.split('\n') }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">{policy ? 'Edit' : 'Create'} Policy</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Policy Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Action</label>
              <select
                name="action"
                value={formData.action}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Block</option>
                <option>Log</option>
                <option>Redirect</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Categories (comma-separated)</label>
              <input
                type="text"
                name="categories"
                value={formData.categories.join(',')}
                onChange={(e) => setFormData(prev => ({ ...prev, categories: e.target.value.split(',') }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Whitelist (one domain per line)</label>
              <textarea
                name="whitelist"
                rows="5"
                value={formData.whitelist.join('\n')}
                onChange={(e) => handleListChange('whitelist', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Blacklist (one domain per line)</label>
              <textarea
                name="blacklist"
                rows="5"
                value={formData.blacklist.join('\n')}
                onChange={(e) => handleListChange('blacklist', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[hsl(var(--tecastra-teal))] text-white rounded-lg hover:bg-[hsl(var(--tecastra-teal))]/90">
              Save Policy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClearDNSProduct;