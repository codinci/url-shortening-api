import { FC } from "react";

interface ButtonProps {
	borderRadius: string;
	horizontalPadding?: number;
	verticalPadding?: number;
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

export const Button: FC<ButtonProps> = ({ borderRadius, horizontalPadding, verticalPadding,
	leftMargin, leftMarginMd, leftMarginLg, bottomMargin, topMargin, width, widthMd, widthLg,
	hoverColor, btnType, text }) => {

	return (
		<button className={`bg-primary-cyan text-white font-poppins font-semibold w-${width}
			md:w-${widthMd} lg:w-${widthLg}	px-${horizontalPadding}	py-${verticalPadding}
			mb-${bottomMargin} mt-${topMargin} rounded-${borderRadius} ml-${leftMargin}
			md:ml-${leftMarginMd} lg:ml-${leftMarginLg} transition-colors duration-400 ease-in-out
			hover:bg-${hoverColor} type=${btnType}`}
		>
			{text}
		</button>
	)
}