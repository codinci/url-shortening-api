import working from '../../images/illustration-working.svg'
import { useNavStore } from '../store'

export const HeroSection = () => {
	const { isOpen } = useNavStore();

	return (
		<section className={`flex flex-col-reverse gap-8 font-poppins md:gap-0 md:flex-row
		 	md:justify-end md:my-8`}
		>
			<div
				className="flex flex-col items-center md:items-start md:my-12 md:ml-8 lg:ml-6 xl:ml-2
				lg:max-w-2xl"
			>
				<h2 className='text-neutral-very-dark-blue text-center font-black text-4xl my-4
					md:text-5xl md:ml-8 md:text-start lg:ml-20 xl:ml-2 lg:text-7xl lg:leading-16 '
				>
					More than just shorter links
				</h2>
				<p className='text-neutral-gray text-center font-bold max-w-md text-lg px-4 md:ml-4
				 	md:text-start md:whitespace-normal md:text-md lg:ml-16 xl:ml-0 lg:text-xl lg:max-w-xl'>
					Build your brand’s recognition and get detailed insights on how your links are performing.
				</p>
				<button
					className="bg-primary-cyan text-white rounded-full px-6 py-4 font-bold mt-8
					md:ml-8 lg:ml-20 xl:ml-4 transition-colors duration-400 ease-in-out hover:bg-[#67e8f9]"
				>
					Get Started
				</button>

			</div>

			<div className={`max-w-sm mx-4 md:max-w-sm lg:max-w-2xl ${isOpen ? 'hidden' : ''}
				md:mr-[-4rem] md:flex`}
			>
				<img src={working} alt="illustration-working" />
			</div>

			{/* MOBILE SCREEN NAVBAR */}
			<div className={` font-poppins bg-primary-dark-violet
				text-white rounded-lg mx-4 p-8  text-lg ${isOpen ? '' : 'hidden'} md:hidden`}
			>
				<ul className='flex items-center flex-col space-y-6 '>
					<li>Features</li>
					<li>Pricing</li>
					<li className='pb-2'>Resources</li>
				</ul>
				<hr className='w-full border-1 my-4 border-neutral-gray-violet'></hr>
				<div className='flex flex-col gap-4 items-center'>
					<h2>Login</h2>
					<button
						className="bg-primary-cyan text-white rounded-full w-full py-2
						transition-colors duration-400 ease-in-out hover:bg-[#5eead4]"
					>
						Sign Up
					</button>
				</div>
			</div>
		</section>
	)
}

