import React from 'react';

const ClearDNS = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white', 
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ 
        fontSize: '48px', 
        color: '#0d2d4a', 
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        ClearDNS Product Page
      </h1>
      <p style={{ 
        fontSize: '24px', 
        color: '#666', 
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        This is a test version of the ClearDNS product page. If you can see this, the routing and component loading is working correctly.
      </p>
      <div style={{ 
        backgroundColor: '#00859b', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '10px',
        marginTop: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: '0 0 10px 0' }}>✅ Component Loaded Successfully!</h2>
        <p style={{ margin: 0 }}>The ClearDNS component is working properly.</p>
      </div>
    </div>
  );
};

export default ClearDNS;