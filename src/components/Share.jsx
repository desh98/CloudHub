import React from 'react'

const Share = () => {
  return (
    <div className='flex gap-[77px] px-[77px] py-[88px]'>
        {/* share */}
        <div className='w-[547px]'>

            {/* button */}
            <button className='bg-primary text-[#fff] font-semibold font-inter py-[4px] px-[14px] rounded-[39px]'>Share</button>

            {/* title */}
            <h1 className='text-zinc-800 text-5xl mt-6 font-semibold font-inter'>Share anything you're <span>working on.</span></h1>

            {/* description */}
            <p className='text-gray mt-[24px]'>Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slowing us down. It's also one of the only channels where.</p>

            {/* tick boxes */}
            <div className='flex py-[40px] gap-[28px]'>
                <div>
                    <h4>Coded</h4>
                </div>
                
                <div>
                    <h4>100% Secure</h4>
                </div>
            </div>
            

        </div>

        {/* code */}
        <div className='ml-[62px]'>
        <div className="px-16 py-16 bg-neutral-50 rounded-3xl">
            <div className="grow shrink basis-0 self-stretch p-px bg-secondary rounded-3xl shadow flex-col justify-center items-start inline-flex">
                <div className="self-stretch h-10 pl-5 pr-52 pt-2 pb-2.5 bg-gray rounded-tl-3xl rounded-tr-3xl justify-start items-center gap-36 inline-flex">
                <div className="w-11 h-3 relative flex gap-1 justify-start items-start">
                    <div className="w-3 h-3 bg-white40 rounded-full" />
                    <div className="w-3 h-3 bg-white40 rounded-full" />
                    <div className="w-3 h-3 bg-white40 rounded-full" />
                </div>
                <div className="w-28 h-6 py-0.5 justify-center items-center inline-flex">
                    <div className="w-28 h-4 text-white text-base font-normal font-inter leading-normal">api.check.ts</div>
                </div>
                </div>
                <div className="self-stretch h-72 pr-6 justify-start items-center inline-flex">
                <div className="w-96 self-stretch pl-7 pr-3.5 py-8 justify-end items-center inline-flex">
                    <div className="w-96 h-56 relative flex-col justify-start items-start flex">
                    <div className="w-7 h-5 text-white text-base font-normal font-inter leading-tight">new</div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Share