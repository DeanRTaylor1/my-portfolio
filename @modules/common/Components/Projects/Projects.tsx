import Image from 'next/image';
import Link from 'next/link';
import { Github } from '../Icons';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <div
      id='projects'
      className='flex flex-col  w-full min-h-[calc(720px)] bg-zinc-300 items-center justify-center gap-8 2xl:gap-24 pt-20 pb-8 pr-8 pl-8 z-0'
    >
      <div className='flex flex-col gap-8'>
        <div className='w-full flex justify-center '>
          <h2 className='font-extrabold text-3xl underline decoration-emerald-400 decoration-4 underline-offset-4 z-0'>
            Full-Stack Projects
          </h2>
        </div>
        <div className='flex flex-col xl:flex-row gap-8'>
        <Link href='http://www.myfinapi.dev' target={'_blank'}>
          <div
            id='projects'
            className='w-[calc(36rem)] h-[calc(34rem)] bg-white shadow-2xl rounded-md px-8 py-4 text-xl font-bold relative group'
          >
            <Image
              className='w-[calc(34rem)] h-[calc(32rem)] z-0'
              alt='MyFin website image'
              src={
                '/myfinsite.png'
              }
              width='600'
              height='1000'
            />
            <div className='flex flex-col rounded-md  w-full h-full justify-center items-center absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 text-white  bg-zinc-400 bg-opacity-75 transition-all ease-in-out duration-300'>
              <h3 className='font-extrabold text-4xl drop-shadow-2xl'>
                MyFin - Finance Tracking
                </h3>
              <p className='font-light text-sm text-center p-16 drop-shadow-2xl '>
                React and NodeJS finance tracking app, both the api and front end are hosted in Docker containers 
                on a kubernetes cluster in Digital Ocean. The idea was to seperate the logic and add more functionality
                through different containers. This app implements OAuth Login Strategies as well as a local auth strategy. 
                PostgreSQL and MongoDB are used for different elements to get the benefits of both DB types, the SQL was written manually 
                and does not implement any ORM, this inlcudes data pagination and complex union and join queries all source code 
                is public on github (check it out below!).
              </p>
            </div>
          </div>
        </Link>

        <Link href='http://www.nhimsallyfilm.com' target={'_blank'}>
          <div
            id='projects'
            className='w-[calc(36rem)] h-[calc(34rem)] bg-white shadow-2xl rounded-md px-8 py-4 text-xl font-bold relative group'
          >
            <Image
              className='w-[calc(34rem)] h-[calc(32rem)] z-0'
              alt='nhimsallyfilm website image'
              src={
                '/nhimsallysite.png'
              }
              width='600'
              height='1000'
            />
            <div className='flex flex-col rounded-md  w-full h-full justify-center items-center absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 text-white  bg-zinc-400 bg-opacity-75 transition-all ease-in-out duration-300'>
              <h3 className='font-extrabold text-4xl drop-shadow-2xl'>
                NhimSally.Film
              </h3>
              <p className='font-light text-sm text-center p-16 drop-shadow-2xl '>
                Photography portfolio and information page, received 300% more
                engagements and coincided with a 30% increase in customer
                contacts than an instagram only portfolio.
              </p>
            </div>
          </div>
        </Link>
        </div>
      </div>
      <div className='2xl:min-h-[calc(600px)] justify-start items-start flex flex-col gap-8'>
        <div className='w-full flex justify-center '>
          <h2 className='font-extrabold text-3xl pl-4 underline decoration-emerald-400 decoration-4 underline-offset-4'>
            Backend
          </h2>
        </div>
        <Link href='http://www.github.com/deanrtaylor1' target={'_blank'}>
          <div
            id='projects'
            className='w-[calc(36rem)] h-fit bg-white shadow-2xl rounded-md px-8 py-4 text-xl font-bold relative flex justify-center items-center group gap-6'
          >
            <Github size={60} />
            <h3 className='font-extrabold text-xl drop-shadow-2xl'>
              Checkout My github
            </h3>
            <div className='flex flex-col w-full h-full justify-center items-center rounded-md  absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 text-white  bg-zinc-400 bg-opacity-75 transition-all ease-in-out duration-300'>
              <p className='font-light text-sm text-center p-16 drop-shadow-2xl'>
                A lot of backend code is not available for sharing as it
                contains business logic, I post some templates/code samples on
                my github. Check it out here!
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
