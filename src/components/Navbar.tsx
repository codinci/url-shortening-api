import logo from '../../images/logo.svg'
import { useState } from 'react'

export const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<header className="flex items-center justify-between md:p-6 lg:p-8 lg:mx-20 md:mx-10">

			<div className="flex mx-4 mt-8 md:mx-0 md:mt-0 md:gap-x-8 lg:gap-x-12 lg:ml-8">
				<img src={logo} className="App-logo" alt="logo" />

				<div className="hidden md:flex md:items-center md:gap-x-2 lg:gap-x-6">
					<h1 className="font-poppins font-bold text-neutral-gray
						hover:text-primary-dark-violet hover:cursor-pointer active:text-primary-dark-violet"
					>
						Features
					</h1>
					<h1 className="font-poppins font-bold text-neutral-gray
						hover:text-primary-dark-violet hover:cursor-pointer active:text-primary-dark-violet"
					>
						Pricing
					</h1>
					<h1 className="font-poppins font-bold text-neutral-gray
						hover:text-primary-dark-violet hover:cursor-pointer active:text-primary-dark-violet"
					>
						Resources
					</h1>
				</div>
			</div>


			<div className="flex items-center justify-end ">
				<div  onClick={() => setIsNavOpen((prev) => !prev) }
					className="space-y-1 mt-8 p-6 md:hidden">
					<span className={`bg-neutral-gray block transition-all duration-300 ease-out
						h-1 w-8 rounded-sm ${isNavOpen ?
						'rotate-45 translate-y-3' : '-translate-y-0.5'
						}`}
					>
					</span>
					<span className={`bg-neutral-gray block transition-all duration-300 ease-out
						h-1 w-8 rounded-sm my-0.5 ${isNavOpen ?
						'opacity-0' : 'opacity-100'
						}`}
					>
					</span>
					<span className={`bg-neutral-gray block transition-all duration-300 ease-out
						h-1 w-8 rounded-sm ${isNavOpen ?
						'-rotate-45 -translate-y-1' : 'translate-y-0.5'
						}`}
					>
					</span>
				</div>
				<div className='hidden md:flex md:gap-4'>
					<button>
						<a className="font-poppins font-bold text-neutral-gray">Login</a>
					</button>
					<button className='rounded-2xl bg-primary-cyan px-8 py-1.5
						transition-colors duration-400 ease-in-out hover:bg-[#2acfcf]/50'>
						<a className="font-poppins text-white">Sign Up</a>
					</button>
				</div>
			</div>
		</header>
	)

}

