import { ListItems, Logo } from './index';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Hamburger } from '../Icons';
import { NavItem } from '@modules/utils/types';

const Navbar: React.FC = () => {
  const [navclass, setNavClass] = useState<any>({
    navList: 'mobileNav scale-0',
    hamburger: 'hamburger',
  });

  const navItems: NavItem[] = [
    { name: 'About', href: '#about', identifier: 'about' },
    { name: 'Tools', href: '#tools', identifier: 'tools' },
    { name: 'Projects', href: '#projects', identifier: 'projects' },
    { name: 'contact', href: '#contact', identifier: 'contact' },
  ];

  const hamburgerHandler = () => {
    navclass.navList === 'mobileNav scale-0'
      ? setNavClass({
          navList: 'mobileNav scale-100',
          hamburger: 'hamburger rotate-90',
        })
      : setNavClass({
          navList: 'mobileNav scale-0',
          hamburger: 'hamburger',
        });
  };

  return (
    <Fragment>
      <nav className='w-full flex justify-center items-center h-16 font-extrabold sticky top-0 p-4 bg-zinc-200 z-50'>
        <div className='w-full 2xl:w-3/4 flex justify-between items-center h-16 font-extrabold sticky top-0 p-4 bg-zinc-200 z-50'>
          <Logo />
          <ul className='hidden md:flex font-bold gap-4 hover:cursor-pointer'>
            <ListItems
              navItems={navItems}
              hamburgerHandler={hamburgerHandler}
            />
          </ul>
          <div className={navclass.hamburger} onClick={hamburgerHandler}>
            <Hamburger />
          </div>
          <div className={navclass.navList}>
            <h3 className=''>Menu</h3>
            <ul className='flex flex-col gap-4 font-bold hover:cursor-pointer'>
              <ListItems
                navItems={navItems}
                hamburgerHandler={hamburgerHandler}
              />
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
