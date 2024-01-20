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
        <div className="max-w-[1000px] min-w-[900px] h-full bg-white mx-auto border-x border-gray-200 border-solid">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
