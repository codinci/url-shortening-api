import { useNavStore } from "../store";

export const LinkItems = () => {
	const { displayLink, linkObjects } = useNavStore();
	
	return (
		<div className={`${displayLink ? 'flex flex-col' : 'hidden'}`}>
			{linkObjects.length > 0
				?
				<div className="mt-32 md:mt-28 space-y-4 mx-8 md:mx-28 lg:mx-32">
					{
						linkObjects.sort((a, b) => b.timeStamp - a.timeStamp).map((link, index) => (
							<div key={index}
								className="bg-white py-4 rounded-md flex flex-col space-y-2
								md:flex-row md:items-center md:justify-between "
							>
								<p className="mx-4 py-2 md:flex">{link.url}</p>
								<hr className='w-full border-1 border-neutral-gray-violet md:hidden'></hr>
								<div className="flex flex-col gap-2 md:flex-row md:items-center">
									<p className="mx-4 py-2 text-primary-cyan">{link.shortUrl}</p>
									<button
										className="bg-primary-cyan mx-2 py-4 font-semibold
										text-white rounded-lg md:px-8 md:py-2"
									>
										Copy
									</button>
								</div>
							</div>
						))
					}
				</div>
				:
				<p className="text-center text-secondary-red text-lg mt-24">
					You haven't entered any links yet.
				</p>
			}
		</div>
	);
}
