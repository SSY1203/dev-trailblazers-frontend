import { ReactNode } from 'react';
import Header from '../header/Header';

interface LayoutProps {
  setPosts?: any;
  children: ReactNode;
}

const Layout = ({ setPosts, children }: LayoutProps) => {
  return (
    <div className="h-full">
      <Header setPosts={setPosts} />
      <main className="bg-zinc-50 h-full">
        <div className="contentsWidth bg-white  inlineBorder">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
