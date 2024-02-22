import { ImageProfile } from "../imageProfile/imageProfile";
import ExpandIcon from "../expandIcon/expandIcon";

import { translateIcon } from "./trasnlateIcon";

const styleDivContainer: React.CSSProperties = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
};
const styleDivBlock: React.CSSProperties = {
	display: "block",
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
};

export const MediaImageProfile = () => {
	// Definimos los angulos de referencia de los botones
	const angle1 = -15;
	const angle2 = angle1 + 45;
	const angle3 = angle2 + 45;

	return (
		<div style={styleDivContainer}>
			<ImageProfile />

			<div style={styleDivBlock}>
				<div style={{
						position: "absolute",
						transform: translateIcon(angle1),
					}}>
					<ExpandIcon name="LinkedIn" />
				</div>
			</div>

			<div style={styleDivBlock}>
				<div style={{
						position: "absolute",
						transform: translateIcon(angle2),
					}}>
					<ExpandIcon name="Github" />
				</div>
			</div>

			<div style={styleDivBlock}>
				<div style={{
						position: "absolute",
						transform: translateIcon(angle3),
					}}>
					<ExpandIcon name="Currículum" />
				</div>
			</div>
		</div>
	);
};
