import { ReactElement } from 'react';

type iconProps = {
  size: number;
};

type Footericon = {
  name: string;
  href: string;
  icon: ReactElement;
};

type NavItem = {
  name: string;
  href: string;
  identifier: string;
};

export type { iconProps, Footericon, NavItem };
