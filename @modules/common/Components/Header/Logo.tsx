import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href={'/'}>
      {' '}
      <Image
        className='h-12 w-auto border rounded-md'
        alt='Profile Image'
        src={'/logo-green.png'}
        width='250'
        height='250'
      />
    </Link>
  );
};

export default Logo;
