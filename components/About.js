import Heading from './Heading';
import Image from 'next/image';
import Main from './Main';
import Dot from './Dot';
import History from './History';
import Text from './Text';

const About = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
      <Heading title='About Me' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
        <div>
          <Image className='w-[400px]' src="/images/aboue.jpg" width={400} height={400} alt='hero' />
        </div>
        <div>
          <div className='flex items-center justify-between w-[250px]'>
            <Main />
            <Dot />
            <History />
          </div>
          <Text />
        </div>
      </div>
    </section>
  )
}

export default About
