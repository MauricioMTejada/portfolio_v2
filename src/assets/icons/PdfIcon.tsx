import React from "react";
import { ICON_WITH_HEIGHT } from "./params";

const PdfIcon: React.FC = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="icon icon-tabler icon-tabler-file-type-pdf"
			width={ICON_WITH_HEIGHT}
			height={ICON_WITH_HEIGHT}
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M14 3v4a1 1 0 0 0 1 1h4" />
			<path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
			<path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
			<path d="M17 18h2" />
			<path d="M20 15h-3v6" />
			<path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
		</svg>
	);
};

export default PdfIcon;
