import { Footericon } from '@modules/utils/types';
import Link from 'next/link';
import { ReactElement } from 'react';
import { Github, Instagram, Linkedin } from '../Icons';

const Footer: React.FC = () => {
  const icons: Footericon[] = [
    {
      name: 'github',
      href: 'https://www.github.com/deanrtaylor1',
      icon: <Github size={20} />,
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/dean-taylor-42a87a57/',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/deanrtaylor',
      icon: <Instagram size={20} />,
    },
  ];
  return (
    <div
      id='contact'
      className='flex w-full justify-center items-center h-16 font-bold sticky top-0 p-4 bg-zinc-200 z-50'
    >
      <div className='w-full lg:w-3/4 flex justify-between'>
        <span className='underline decoration-emerald-400 decoration-4 underline-offset-4'>
          Dean Taylor
        </span>
        <ul className='flex gap-2'>
          {' '}
          {icons.map((icon) => {
            return (
              <Link key={icon.name} href={icon.href} target={'_blank'}>
                <li className='hover:opacity-75'>{icon.icon}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
