import React from 'react'
import left from '../assets/hero/left.svg'
import right from '../assets/hero/right.svg'
import Frame1 from '../assets/hero/Frame1.png'
import Frame2 from '../assets/hero/Frame2.png'
import Frame3 from '../assets/hero/Frame3.png'
import Frame4 from '../assets/hero/Frame4.png'
import Frame5 from '../assets/hero/Frame5.png'
import Frame6 from '../assets/hero/Frame6.png'

const Hero = () => {
  return (
    <div className='relative'>
    {/* hero text */}
    <div className='mt-[82px] px-[80px] flex flex-col items-center justify-center'>
        <div className='text-center text-[#171717] text-neutral-900 text-[84px] font-semibold leading-[89px] font-inter'>Create, inspect, and apply synthetic surveillance broadly.</div>

        <div className='text-center text-zinc-600 text-xl font-normal mt-[24px] leading-[35px]'>Start with a stunning homepage. Stay motivated without hurting your pocket.</div>

        <button className='bg-primary text-[#fff] font-semibold mt-[32px] px-7 py-3 rounded-[39px]'>Start for free</button>
        <div className="text-neutral-400 text-sm font-normal mt-[24px]">
          Want to talk or get a live demo? &nbsp;       
          <span className="text-neutral-600 text-sm font-semibold">Get in touch</span>
          <span className="text-neutral-600 text-sm font-semibold"> →</span>
        </div>
    </div>

    {/* gradient lines and logo */}
    <div className="flex items-center relative justify-center -mt-[280px]">
        <img src={left} className='-mr-8'/>
        <div className="w-14 h-14 mt-[240px] rounded-xl bg-primary items-center justify-center">
          <img className="p-2" src="/boxlogo.svg" alt="Box Logo" />
        </div>
        <img src={right} className='-ml-8' />
      
    </div>

    {/* brand icons */}
    <div className="w-96 h-96 relative -mt-[750px] ml-20">
      <img className="w-20 h-20 left-[152px] top-[325px] absolute" src={Frame1} />
      <div className="w-20 left-[942px] top-[561px] absolute justify-center items-center inline-flex">
        <img className="w-20 h-20 relative" src={Frame2} />
      </div>
      <img className="w-20 h-20 left-[296px] top-[485px] absolute" src={Frame3} />
      <img className="w-20 h-20 left-[108px] top-[615px] absolute" src={Frame4} />
      <img className="w-20 h-20 left-[1007px] top-[424px] absolute" src={Frame5} />
      <img className="w-20 h-20 left-[1180px] top-[284px] absolute" src={Frame6} />
    </div>


    


    </div>
  )
}

export default Hero