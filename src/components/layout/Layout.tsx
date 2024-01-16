import { ReactNode } from 'react';
import Header from '../header/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
