import logo from '../../images/logo.svg'

export const Navbar = () => {
	return (
		<header className="flex items-center justify-between p-8 mx-20">
			<div className="flex items-center gap-x-6">
				<img src={logo} className="mr-6 App-logo" alt="logo" />
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

			<div className="flex items-center justify-end gap-x-10">
				<button>
					<a className="font-poppins font-bold text-neutral-gray">Login</a>
				</button>
				<button className='rounded-2xl bg-primary-cyan px-8 py-1.5
				  	transition-colors duration-400 ease-in-out hover:bg-[#2acfcf]/50'>
					<a className="font-poppins text-white">Sign Up</a>
				</button>
			</div>
		</header>
	)

}

