import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import InvoiceUploader from './invoiceuploader';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            {isLoggedIn ? (
                <Dashboard />
            ) : (
                <Login onLogin={handleLogin} />
            )}

            {/* Only render the InvoiceUploader when the user is logged in */}
            {isLoggedIn && (
                <div>
                    <InvoiceUploader />
                </div>
            )}
        </div>
    );
};

export default App;