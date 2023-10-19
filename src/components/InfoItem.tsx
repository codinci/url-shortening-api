interface InfoItemProps {
	imageSrc: string;
	altText: string;
	headingText: string;
	paragraphText: string;
	topMargin: number;
}

export const InfoItem: React.FC<InfoItemProps> = ({
	imageSrc, altText, headingText, paragraphText, topMargin
	}) => {
	return (
		<>
			<div className={`flex flex-col items-center bg-white rounded-lg
				w-full h-fit  md:w-1/3 md:items-start md:mt-${topMargin} lg:w-1/4`}>
				<div>
					<div className='mt-[-2rem] rounded-full bg-primary-dark-violet p-4 w-16 flex
						items-center md:ml-6'>
						<img src={`../../images/${imageSrc}`} alt={altText}/>
					</div>
				</div>
				<h2 className='mx-4 mt-8 text-lg text-neutral-very-dark-violet font-extrabold'>
					{headingText}
				</h2>
				<p className='text-center px-2 text-neutral-gray-violet mx-4 my-2 pb-4
					md:px-0 md:text-start'
				>
					{paragraphText}
				</p>
			</div>
		</>
	)
}