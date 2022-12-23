import { NavItem } from '@modules/utils/types';
import Link from 'next/link';
import { Fragment } from 'react';

type ListItemProps = {
  navItems: NavItem[];
  hamburgerHandler: () => void;
};

const ListItems: React.FC<ListItemProps> = ({ navItems, hamburgerHandler }) => {
  return (
    <Fragment>
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <li
            onClick={hamburgerHandler}
            className='hover:underline hover:underline-offset-4 decoration-emerald-400 decoration-4'
          >
            {item.name}
          </li>
        </Link>
      ))}
    </Fragment>
  );
};

export default ListItems;
