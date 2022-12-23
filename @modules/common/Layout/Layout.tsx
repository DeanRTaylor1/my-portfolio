import React, { Fragment, PropsWithChildren } from 'react';
import { Navbar } from '../Components/Header';

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className='w-full min-h-screen min-w-[calc(38rem)] h-fit bg-zinc-200'>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
