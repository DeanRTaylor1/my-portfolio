import Image from 'next/image';
import { Fragment } from 'react';
import { Backend, Frontend, Deployment } from '../Icons';
import { motion } from 'framer-motion';

const Tools: React.FC = () => {
  return (
    // I had to use a calculated height because it would not pick up the Layouts assigned height
    <motion.div
      className='w-full h-[calc(24rem_*_3)] 2xl:h-96 bg-zinc-300 flex items-center justify-center gap-4 pt-6 pb-8 z-10'
      initial={{ opacity: 0, zIndex: 100 }}
      whileInView={{ opacity: 1, zIndex: 100 }}
      transition={{
        delay: 0.5,
        x: { duration: 0.75 },
        default: { ease: 'linear' },
      }}
    >
      <div
        id='tools'
        className='w-[calc(36rem)] 2xl:w-[calc(1000px)] 2xl:w-[calc(1400px)] 2xl:h-fit 6 h-fit shadow-2xl bg-white rounded-md px-8 py-4 text-xl font-bold grid grid-cols-1 grid-auto-rows 2xl:grid-rows-1 2xl:grid-cols-3 z-10'
      >
        <div className='flex flex-col justify-start items-center gap-4 border-b 2xl:border-r 2xl:border-b-0 h-96 mb-4 p-8'>
          <div className='h-fit w-fit bg-zinc-300 p-2 rounded-2xl'>
            <Frontend />
          </div>
          <h3 className='text-2xl text-center underline decoration-emerald-400 decoration-4 underline-offset-8'>
            Frontend
          </h3>
          <h3>Languages</h3>
          <p className='font-extralight text-sm text-center'>
            HTML, Javascript, Typescript, CSS
          </p>
          <h3>Tools/Frameworks</h3>
          <p className='font-extralight text-sm text-center'>
            React, Tailwind, PostCss, Sass, Figma, Photoshop, Lightroom
          </p>
        </div>
        <div className='p-8 flex flex-col justify-start items-center gap-4 border-b 2xl:border-r 2xl:border-b-0  h-96 mb-4'>
          <div className='h-fit w-fit bg-zinc-300 p-2 rounded-2xl'>
            <Backend />
          </div>
          <h3 className='text-2xl underline decoration-emerald-400 decoration-4 underline-offset-8'>
            Backend
          </h3>
          <h3>Languages</h3>
          <p className='font-extralight text-sm text-center'>
            Javascript, Typescript, SQL, NoSQL
          </p>
          <h3>Tools/Frameworks</h3>
          <p className=' text-center font-extralight text-sm'>
            Node, Express, NestJS, MongoDB, PostgreSQL, MySQL
          </p>
        </div>
        <div className='p-8 flex flex-col justify-start items-center gap-4 h-96 mb-4'>
          <div className='h-fit w-fit bg-zinc-300 p-2 rounded-2xl'>
            <Deployment />
          </div>
          <h3 className='text-2xl underline decoration-emerald-400 decoration-4 underline-offset-8'>
            Deployment
          </h3>
          <h3>Tools/Frameworks</h3>
          <p className='font-extralight text-sm w-full flex text-center justify-center items-center'>
            AWS (EC2, S3, IAM, RDS, DynamoDB), Firebase, Vercel, Digital Ocean,
            Github Actions, Kubernetes, Docker, Skaffold, Kubectl
          </p>
        </div>
      </div>{' '}
    </motion.div>
  );
};

export default Tools;
