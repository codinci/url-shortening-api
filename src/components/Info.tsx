import { Profiler, useCallback } from 'react'
import recognitionIcon from '../../images/icon-brand-recognition.svg'
import detailsIcon from '../../images/icon-detailed-records.svg'
import customizationIcon from '../../images/icon-fully-customizable.svg'
import { LinkItems } from './LinkItems'

export const Info = () => {
	const onRenderCallback = useCallback(
    (
      id: string,
      phase: 'mount' | 'update',
      actualDuration: number,
      baseDuration: number,
      startTime: number,
      commitTime: number
    ) => {
      // This function is called when the component renders
      console.log('Rendered component:', id);
      console.log('Phase:', phase);
      console.log('Actual Duration:', actualDuration);
      console.log('Base Duration:', baseDuration);
      console.log('Start Time:', startTime);
      console.log('Commit Time:', commitTime);
    },
    []
  );

	return (
		<section className="bg-gray-100 font-poppins pb-32">
			<LinkItems/>

			<div className="flex justify-center items-center text-center flex-col mb-12">
				<h1 className="mt-36 font-black text-2xl md:text-4xl">
					Advanced Statistics
				</h1>
				<p className="w-full font-bold text-neutral-gray-violet my-2 px-4 text-md md:text-lg md:w-1/2">
					Track how your links are performing across the web with our
					advanced statistics dashboard.
				</p>
			</div>
			<div className='flex justify-center items-center flex-col mx-6 md:flex-row md:mx-4'>
				<Profiler id='InfoItems' onRender={onRenderCallback} />
				<div className='flex flex-col items-center md:mt-12 bg-white rounded-lg w-full h-fit md:w-1/3 md:items-start lg:w-1/4'>
					<div>
						<div className='mt-[-2rem] rounded-full bg-primary-dark-violet p-4 w-16 flex items-center md:ml-6'>
							<img src={recognitionIcon} alt='brand-recognition-icon' />
						</div>
					</div>
					<h2 className='mx-4 mt-8 text-lg text-neutral-very-dark-violet font-extrabold'>
						Brand Recognition
					</h2>
					<p className='text-center px-2 text-neutral-gray-violet mx-4 my-2 pb-4 md:px-0 md:text-start'>
						Boost your brand recognition with each click. Generic links don’t
						mean a thing. Branded links help instil confidence in your content.
					</p>
				</div>

				<div className='bg-primary-cyan w-2 bg-scroll h-[70px] md:w-[30px] md:mt-[70px] md:h-2'></div>

				<Profiler id='InfoItems' onRender={onRenderCallback} />
				<div className='flex flex-col items-center md:mt-24 bg-white rounded-lg w-full h-fit md:w-1/3 md:items-start lg:w-1/4'>
					<div>
						<div className='mt-[-2rem] rounded-full bg-primary-dark-violet p-4 w-16 flex items-center md:ml-6'>
							<img src={detailsIcon} alt='details-icon' />
						</div>
					</div>
					<h2 className='mx-4 mt-8 text-lg text-neutral-very-dark-violet font-extrabold'>
						Detailed Records
					</h2>
					<p className='text-center px-2 text-neutral-gray-violet mx-4 my-2 pb-4 md:px-0 md:text-start'>
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.
					</p>
				</div>

				<div className='bg-primary-cyan w-2 bg-scroll h-[70px] md:w-[30px] md:mt-[70px] md:h-2'></div>

				<Profiler id='InfoItems' onRender={onRenderCallback} />
				<div className='flex flex-col items-center md:mt-36 bg-white rounded-lg w-full h-fit md:w-1/3 md:items-start lg:w-1/4'>
					<div>
						<div className='mt-[-2rem] rounded-full bg-primary-dark-violet p-4 w-16 flex items-center md:ml-6'>
							<img src={customizationIcon} alt='customization-icon' />
						</div>
					</div>
					<h2 className='mx-4 mt-8 text-lg text-neutral-very-dark-violet font-extrabold'>
						Fully Customizable
					</h2>
					<p className='text-center px-2 text-neutral-gray-violet mx-4 my-2 pb-4 md:px-0 md:text-start'>
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</div>

			</div>

		</section>
	)
}

