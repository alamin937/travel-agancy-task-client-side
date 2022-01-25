import React, { createContext } from 'react';
import UseHooks from '../UseHooks/UseHooks';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const value = UseHooks()
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
