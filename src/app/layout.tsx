import React from 'react';
import Cabecera from '../components/Cabecera';
import Footer from '../components/Footer';
import '../styles/globals.css'; 

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Cabecera />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );  
};

export default Layout;