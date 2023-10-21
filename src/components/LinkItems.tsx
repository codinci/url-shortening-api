import { useState } from "react";
import { useNavStore } from "../store";

export const LinkItems = () => {
	const { displayLink, linkObjects } = useNavStore();
	const [isClicked, setIsClicked] = useState(Array(linkObjects.length).fill(false));

	const handleLinkCopy = (copiedLink:string, index:number) => {
		navigator.clipboard.writeText(copiedLink);

		//reset all the copy buttons to false
		const newBtnArr = Array(linkObjects.length).fill(false)
		//set the clicked button to true
		newBtnArr[index] = true
		setIsClicked(newBtnArr)
	};

	return (
		<div className={`${displayLink ? 'flex flex-col' : 'hidden'}`}>
			{linkObjects.length > 0 ? (
				<div className="mt-32 md:mt-28 space-y-4 mx-8 md:mx-28 lg:mx-32">
				{linkObjects
					.sort((a, b) => b.timeStamp - a.timeStamp)
					.map((link, index) => (
						<div
							key={index}
							className="bg-white py-4 rounded-md flex flex-col space-y-2 md:flex-row md:items-center md:justify-between"
						>
							<h2
								className="mx-4 py-2 text-ellipsis overflow-hidden whitespace-nowrap
								md:flex "
							>
								{link.url}
							</h2>

							<hr className="w-full border-1 border-neutral-gray-violet md:hidden"></hr>

							<div className="flex flex-col gap-2 md:flex-row md:items-center">
								<h2
									className="mx-4 py-2 text-primary-cyan text-ellipsis overflow-hidden
									whitespace-nowrap"
								>
									{link.shortUrl}
								</h2>

								<button
									className={`${isClicked[index] ? 'bg-primary-dark-violet' : 'bg-primary-cyan'}
									mx-2 py-4 font-semibold text-white rounded-lg md:px-8 md:py-2`}
									onClick={() => handleLinkCopy(link.shortUrl, index)}
								>
									{isClicked[index] ? "Copied!" : "Copy"}
								</button>
							</div>
						</div>
					))
				}
				</div>
			) : (

					<p className="text-center text-secondary-red text-lg mt-24">
						You haven't entered any links yet.
					</p>
			)}
		</div>
	);
};
