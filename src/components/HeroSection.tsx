import working from '../../images/illustration-working.svg'
import { useNavStore } from '../store'

export const HeroSection = () => {
	const { isOpen } = useNavStore();

	return (
		<section className={`flex flex-col-reverse gap-8 font-poppins md:gap-0 md:flex-row
		 	md:justify-end md:my-8`}
		>
			<div
				className="flex flex-col items-center md:items-start md:my-12 md:ml-8 lg:ml-8
				lg:max-w-2xl"
			>
				<h1 className='text-neutral-very-dark-blue text-center font-black text-4xl my-4
					md:text-5xl md:ml-8 md:text-start lg:ml-20 lg:text-7xl lg:leading-16 '
				>
					More than just shorter links
				</h1>
				<p className='text-neutral-gray text-center font-bold max-w-md text-lg px-4 md:ml-4
				 	md:text-start md:whitespace-normal md:text-md lg:pl-16 lg:text-xl lg:max-w-xl'>
					Build your brand’s recognition and get detailed insights on how your links are performing.
				</p>
				<button
					className="bg-primary-cyan text-white rounded-full px-6 py-4 font-bold mt-8 md:ml-8
					lg:ml-20 transition-colors duration-400 ease-in-out hover:bg-[#67e8f9]"
				>
					Get Started
				</button>

			</div>

			<div className={`max-w-sm mx-4 md:max-w-md lg:max-w-2xl ${isOpen ? 'hidden' : ''}
				md:mr-[-4rem] md:flex`}
			>
				<img src={working} alt="illustration-working" />
			</div>

			{/* MOBILE SCREEN NAVBAR */}
			<div className={`flex items-center mb-[-3rem] flex-col font-poppins bg-primary-dark-violet
				text-white rounded-lg mx-4 p-8 space-y-6 text-lg ${isOpen ? '' : 'hidden'} md:hidden`}
			>
				<h1>Features</h1>
				<h1>Pricing</h1>
				<h1 className='pb-2'>Resources</h1>
				<hr className='w-full border-1 pb-2 border-neutral-gray-violet'></hr>
				<h1>Login</h1>
				<button
					className="bg-primary-cyan text-white rounded-full w-full py-2
					transition-colors duration-400 ease-in-out hover:bg-[#5eead4]"
				>
					Sign Up
				</button>

			</div>
		</section>
	)
}

