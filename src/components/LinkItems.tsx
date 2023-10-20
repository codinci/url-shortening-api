export const LinkItems = () => {
  interface LinksType {
    url: string;
    shortenedUrl: string;
  }

  const linksObj: LinksType[] = [
    {
      'url': 'https://frontendmentor.io',
      'shortenedUrl': 'https://gsbet.link'
    },
    {
      'url': 'https://github.com',
      'shortenedUrl': 'https://vuBykl.link'
    }
  ]

  return (
	<div className="flex flex-col">
		<div className="mt-28 space-y-4 mx-8 md:mx-28 lg:mx-32">
			{
				linksObj.map((linkObj, index) => (
					<div key={index}
						className="bg-white py-4 rounded-md flex flex-col space-y-2 md:flex-row md:items-center md:justify-between "
					>
						<p className="mx-4 md:flex">{linkObj.url}</p>
						<hr className='w-full border-1 border-neutral-gray-violet md:hidden'></hr>
						<div className="flex flex-col gap-2 md:flex-row md:items-center">
							<p className="mx-4 text-primary-cyan">{linkObj.shortenedUrl}</p>
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

    </div>
  );
}
