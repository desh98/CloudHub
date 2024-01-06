import React from 'react'

const Navbar = () => {
  return (
    <div className="flex w-full">
        {/* navbar */}
        <nav className='flex w-full items-center mt-[18px] px-[80px] justify-between'>

            {/* logo */}
            <img src='/logo.png' className='w-[105px] h-[25px]' alt='logo'/>

            {/* menu */}
            <ul className="flex gap-8 text-zinc-800 text-sm">
                <li>Product</li>
                <li>Home</li>
                <li>Shop</li>
                <li>Pages</li>
                <li>Integrations</li>
                <li>Developers</li>
            </ul>

            {/* login and signup */}
            <div className='flex items-center text-sm gap-[20px]'>
              <button className='text-zinc-800'>Login</button>
              <button className='bg-primary text-[#fff] font-semibold py-2.5 px-5 rounded-[39px]'>Start for free</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar