import { motion } from 'framer-motion';

const About: React.FC = () => {
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
      id='about'
      className='w-full h-[calc(100vh_/_2)] min-h-[calc(45rem)] flex items-center justify-center gap-2 pt-6 pr-8 pl-8 pb-12'
    >
      <div className='flex flex-col w-full lg:w-2/4 h-full items-center justify-start font-extrabold drop-shadow-2xl text-black text-4xl '>
        <h2 className='pt-8 underline decoration-emerald-400 decoration-4 underline-offset-4'>
          About
        </h2>
        <div className='h-full flex flex-col gap-8 items-center justify-center'>
          <p className=' font-bold text-xl'>
            Hi, I&apos;m Dean a web developer and educator, with experience in a
            wide range of technology but mainly focusing on website development
            and deployment.
          </p>
          <p className=' font-medium text-lg'>
            Since leaving my full time job six years ago, I&apos;ve been working
            in freelance development covering a range of services from full
            stack, API development as well as front-end and design consultation
            for customers looking for the full range of services.
          </p>
          <p className=' font-medium text-lg'>
            After starting my technology journey with Java, PHP and javascript
            my desire to learn more pushed me into learning full stack
            development with node and react allowing me to support clients to
            get their business completely online as soon as possible.
          </p>
          <p className=' font-medium text-lg'>
            If you are looking to move your business online, transition from
            wordpress/squarspace/wix to a custom built website, please
            don&apos;t hesitate to contact me (details below).
          </p>
        </div>
      </div>{' '}
    </motion.div>
  );
};

export default About;
