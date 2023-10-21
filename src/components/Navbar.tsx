import logo from '../../images/logo.svg'
import { useNavStore } from '../store'

export const Navbar = () => {
	const { isOpen, toggleIsOpen } = useNavStore();

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



			<div className="flex items-center justify-end">

				{/* MOBILE SCREEN NAVBAR */}
				<div
					onClick={toggleIsOpen}
					className="space-y-1 mt-8 p-6 md:hidden"
				>
					<span className={`bg-neutral-gray block transition-all duration-300 ease-out
						h-1 w-8 rounded-sm ${isOpen ?
						'rotate-45 translate-y-3' : '-translate-y-0.5'
						}`}
					>
					</span>
					<span className={`bg-neutral-gray block transition-all duration-300 ease-out
						h-1 w-8 rounded-sm my-0.5 ${isOpen ?
						'opacity-0' : 'opacity-100'
						}`}
					>
					</span>
					<span className={`bg-neutral-gray block transition-all duration-300 ease-out
						h-1 w-8 rounded-sm ${isOpen ?
						'-rotate-45 -translate-y-1' : 'translate-y-0.5'
						}`}
					>
					</span>
				</div>

				{/* LARGER SCREEN NAVBAR */}
				<div className='hidden font-poppins font-bold md:flex md:gap-4'>

					<h1
						className="text-neutral-gray mt-3 px-4 hover:cursor-pointer"
					>
						Login
					</h1>
					<button
						className="bg-primary-cyan text-white rounded-2xl px-8 py-2 mt-1.5
						transition-colors duration-400 ease-in-out hover:bg-[#67e8f9]"
					>
						Sign Up
					</button>

				</div>

			</div>
		</header>
	)

}

