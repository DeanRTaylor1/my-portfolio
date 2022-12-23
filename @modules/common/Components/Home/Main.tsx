import Image from 'next/image';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

const Main: React.FC = () => {
  return (
    // I had to use a calculated height because it would not pick up the Layouts assigned height
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        x: { duration: 0.75 },
        default: { ease: 'linear' },
      }}
      id='home'
      className='w-full h-[calc(100vh_/_2)] min-h-[calc(40rem)] bg-zinc-300 flex items-center justify-center gap-4 p-8 '
    >
      <div className='w-full h-full bg-zinc-300 flex items-center justify-center gap-4 md:gap-24 p-8 md:w-2/4'>
        <div className='flex flex-col w-full items-start justify-center font-extrabold drop-shadow-2xl text-black text-2xl gap-4 underline decoration-emerald-400 decoration-4 underline-offset-4'>
          <h2 className='hover:cursor-pointer hover:opacity-75 text-6xl lg:text-6xl '>
            Dean Taylor
          </h2>
          <h2 className='text-xl hover:cursor-pointer hover:opacity-75 lg:text-3xl'>
            BSc IT Security
          </h2>
          <h2 className='text-xl hover:cursor-pointer hover:opacity-75 lg:text-3xl'>
            Full Stack Development
          </h2>
          <h2 className='text-lg hover:cursor-pointer hover:opacity-75 lg:text-3xl'>
            Saigon, Vietnam
          </h2>
        </div>{' '}
        <Image
          className='h-3/4 lg:h-full w-auto border-4 border-emerald-400  rounded-md'
          alt='https://my-portfolio-deanrtaylor.s3.ap-southeast-1.amazonaws.com/me.png'
          src={'/me.png'}
          width='1200'
          height='2000'
        />
      </div>
    </motion.div>
  );
};

export default Main;
