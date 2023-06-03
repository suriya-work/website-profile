import Typewriter from 'typewriter-effect'
import Button from './Button'
const Hero = () => {
  return (
    <div className="bg-[url('/images/hero.jpg')] h-screen-auto bg-cover bg-center bg-fixed flex-items-center">
      <div className="container mx-auto px-8 p-[12rem]">
        <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
          <div>
            <h1 className="text-5xl" > I'm Front-End Developer</h1>
            <h4 className="text-2xl mt-3">
              <Typewriter
                options={{
                  strings: [
                    "Front-End | Developer",
                    "UI/UX Designer"
                  ],
                  changeDelay: 3,
                  changeDeleteSpeed: 2,
                  autoStart: true,
                  loop: true,

                }}
              />
            </h4>
          </div>
          <div className='bg-[#ff4D41] h-[2px] w-[60px]'></div>
          <div>
            <p>In a professional context it often happens that private clients
              corder publication to be made
            </p>
            <Button link='#' text='Learn More' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
