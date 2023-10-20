import { FC } from "react";

interface ButtonProps {
	borderRadius: string;
	horizontalPadding?: number;
	verticalPadding?: number;
	padding?: number;
	leftMargin?: number;
	leftMarginMd?: number;
	leftMarginLg?: number;
	bottomMargin?: number;
	topMargin?: number;
	width?: string;
	widthMd?: string;
	widthLg?: string;
	hoverColor?: string;
	btnType?: string;
	text: string;
}

export const Button: FC<ButtonProps> = (
	{
		borderRadius, width, widthMd, widthLg, padding, topMargin, leftMargin, leftMarginMd,
		leftMarginLg, bottomMargin, horizontalPadding, verticalPadding, hoverColor, text
	}) => {

	return (
		<button
			className={`bg-primary-cyan text-white font-poppins font-semibold  rounded-${borderRadius}
			w-${width} md:w-${widthMd} lg:w-${widthLg} p-${padding}	px-${horizontalPadding} mt-${topMargin}
			ml-${leftMargin} md:ml-${leftMarginMd} lg:ml-${leftMarginLg} py-${verticalPadding} mb-${bottomMargin}
			transition-colors duration-400 ease-in-out hover:bg-[${hoverColor}]`}
		>
			{text}
		</button>
	)
}