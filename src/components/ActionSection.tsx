import { Button } from "./Button"

export const ActionSection = () => {
	return (
		<section className="w-full bg-scroll bg-primary-dark-violet
			bg-mobile-boost-image flex justify-center items-center flex-col md:bg-desktop-boost-image ">
			<h1 className='text-center text-white font-poppins text-xl font-black mt-12 p-4 md:text-3xl'>
				Boost your links today
			</h1>
			<Button
				borderRadius="full"
				width="fit"
				horizontalPadding={6}
				verticalPadding={2}
				bottomMargin={14}
				hoverColor="[#5eead4]"
				text="Get Started"
			/>
		</section>
	)
}