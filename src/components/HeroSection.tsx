import working from '../../images/illustration-working.svg'

export const HeroSection = () => {
	return (
		<section className='flex flex-col-reverse gap-8 font-poppins md:gap-0 md:flex-row md:justify-end md:my-8'>
			<div className="flex flex-col items-center md:items-start md:my-12 md:ml-8 lg:ml-32">
				<h1 className='text-neutral-very-dark-blue text-center font-black text-4xl my-4
				 md:text-5xl md:ml-8 md:text-start lg:ml-4 lg:text-7xl lg:leading-16'
				>
					More than just shorter links
				</h1>
				<p className='text-neutral-gray text-center font-bold max-w-md text-lg px-4 md:ml-4
				 	md:text-start md:whitespace-normal md:text-md lg:px-2 lg:ml-3 lg:text-xl lg:max-w-xl'>
					Build your brand’s recognition and get detailed insights on how your links are performing.
				</p>
				<button className='bg-primary-cyan text-white font-semibold py-2 px-6 mt-6
					transition-colors duration-400 ease-in-out rounded-full hover:bg-[#2acfcf]/50 md:ml-8 lg:ml-4'
				>
					Get Started
				</button>
			</div>

			<div className='mr-[-6rem] ml-4 md:ml-0 md:mr-[-4rem]'>
				<img src={working} alt="illustration-working" className='max-w-sm md:max-w-md lg:max-w-xl'/>
			</div>
		</section>
	)
}

