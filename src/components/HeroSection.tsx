import working from '../../images/illustration-working.svg'

export const HeroSection = () => {
	return (
		<section className='flex justify-end my-8'>
			<div className='my-12 ml-28'>
				<h1 className='whitespace-normal font-poppins text-neutral-very-dark-blue
				 font-black text-7xl leading-16'>
				More than just shorter links
				</h1>
				<p className='max-w-lg whitespace-normal font-poppins text-neutral-gray text-xl font-bold'>
				Build your brand’s recognition and get detailed insights on how your links are performing.
				</p>
				<button className='bg-primary-cyan text-white font-poppins font-semibold px-8 py-2
				 transition-colors duration-400 ease-in-out rounded-full mt-8 hover:bg-[#2acfcf]/50'>
				Get Started
				</button>
			</div>
			<div className='mr-[-2rem]'>
				<img src={working} alt="illustration-working" className='max-w-xl'/>
			</div>
		</section>
	)
}

