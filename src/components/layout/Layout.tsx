import { ReactNode } from 'react';

import Header from '../header/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <Header />
      <main className="bg-zinc-50 h-full">
        <div className="contentsWidth bg-white  inlineBorder">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
