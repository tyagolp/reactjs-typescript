import React from 'react';
import { ToastProvider } from './toast'

// import { Container } from './styles';

const AppProvider: React.FC = ({children}) => (
    <ToastProvider>
        {children}
    </ToastProvider>
)

export default AppProvider;
