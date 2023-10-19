import { InfoItem } from './InfoItem'

export const Info = () => {
	return (
		<section className="bg-gray-100 font-poppins pb-32">
			<div className="flex justify-center items-center text-center flex-col mb-8">
				<h1 className="mt-36 font-black text-2xl md:text-4xl">
					Advanced Statistics
				</h1>
				<p className="w-full font-bold text-neutral-gray-violet my-2 px-4 text-md md:text-lg md:w-1/2">
					Track how your links are performing across the web with our
					advanced statistics dashboard.
				</p>
			</div>
			<div className='flex justify-center items-center flex-col mx-6 md:flex-row md:mx-4'>
				<InfoItem
					imageSrc='icon-brand-recognition.svg'
					altText='brand-recognition-icon'
					headingText='Brand Recognition'
					paragraphText='Boost your brand recognition with each click. Generic links don’t
					mean a thing. Branded links help instil confidence in your content.'
					topMargin={12}
				/>

				<div className='bg-primary-cyan w-2 bg-scroll h-[70px] md:w-[30px] md:mt-[70px] md:h-2'></div>

				<InfoItem
					imageSrc='icon-detailed-records.svg'
					altText='details-icon'
					headingText='Detailed Records'
					paragraphText='Gain insights into who is clicking your links. Knowing when and
					where people engage with your content helps inform better decisions.'
					topMargin={24}
				/>


				<div className='bg-primary-cyan w-2 bg-scroll h-[70px] md:w-[30px] md:mt-[70px] md:h-2'></div>

				<InfoItem
					imageSrc='icon-fully-customizable.svg'
					altText='customization-icon'
					headingText='Fully Customizable'
					paragraphText='Improve brand awareness and content discoverability through
					customizable links, supercharging audience engagement.'
					topMargin={36}
				/>

			</div>

		</section>
	)
}

