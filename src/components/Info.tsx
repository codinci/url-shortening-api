import recognitionImg from '../../images/icon-brand-recognition.svg'
import detailsImg from '../../images/icon-detailed-records.svg'
import customiseImg from '../../images/icon-fully-customizable.svg'

export const Info = () => {
	return (
		<section className="bg-gray-100 pb-32">
			<div className="flex justify-center flex-col mb-8">
				<h1 className="mt-36 font-poppins font-black text-center text-4xl">
					Advanced Statistics
				</h1>
				<p className="w-1/2 font-poppins font-bold text-neutral-gray-violet
				 text-center px-2 my-2 mx-auto text-lg">
					Track how your links are performing across the web with our
					advanced statistics dashboard.
				</p>
			</div>
			<div className='flex justify-center'>
				<div className='bg-white rounded-lg w-1/4 h-fit mt-12'>
					<div>
						<div className='ml-6 mt-[-2rem] rounded-full bg-primary-dark-violet p-4 w-16 flex justify-center items-center'>
							<img src={recognitionImg} alt='recognition-image'/>
						</div>
					</div>
					<h2 className='mx-4 mt-8 text-lg text-neutral-very-dark-violet
						font-poppins font-extrabold'>
						Brand Recognition
					</h2>
					<p className='font-poppins text-neutral-gray-violet mx-4 my-2 pb-4'>
						Boost your brand recognition with each click. Generic links don’t
						mean a thing. Branded links help instil confidence in your content.
					</p>
				</div>
				<div className='bg-primary-cyan w-[60px] bg-scroll h-2 mt-[200px]'></div>
				<div className='bg-white ounded-md w-1/4 rounded-lg mt-24 h-fit'>
					<div>
						<div className='ml-6 mt-[-2rem] rounded-full bg-primary-dark-violet p-4 w-16 flex justify-center items-center'>
							<img src={detailsImg} alt='recognition-image'/>
						</div>
					</div>
					<h2 className='mx-4 mt-8 text-lg text-neutral-very-dark-violet
						font-poppins font-extrabold'>
						Detailed Records
					</h2>
					<p className='font-poppins text-neutral-gray-violet mx-4 my-2 pb-4'>
						Gain insights into who is clicking your links. Knowing when and where
						people engage with your content helps inform better decisions.
					</p>
				</div>
				<div className='bg-primary-cyan w-[60px] bg-scroll h-2 mt-[200px]'></div>
				<div className='bg-white ounded-md w-1/4 rounded-lg mt-36'>
					<div>
						<div className='ml-6 mt-[-2rem] rounded-full bg-primary-dark-violet p-4 w-16 flex justify-center items-center'>
							<img src={customiseImg} alt='recognition-image'/>
						</div>
					</div>
					<h2 className='mx-4 mt-8 text-lg text-neutral-very-dark-violet
						font-poppins font-extrabold'>
						Fully Customizable
					</h2>
					<p className='font-poppins text-neutral-gray-violet mx-4 my-2 pb-4'>
						Improve brand awareness and content discoverability through customizable
						links, supercharging audience engagement.
					</p>
				</div>
			</div>



		</section>
	)
}

