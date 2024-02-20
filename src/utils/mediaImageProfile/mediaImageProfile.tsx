import { ImageProfile } from "../imageProfile/imageProfile";
import ExpandIcon from "../expandIcon/expandIcon";

import { totalWidthHeightImage } from "../imageProfile/imageProfile";

export const MediaImageProfile = () => {
	// Buscar éste valor en la planilla "src\utils\expandIcon\expandIcon.module.css"
	// es el valor de la constante:
	// --button-width-height
	const BUTTON_WITH_HEIGHT = "36px";

	// utilizamos éste valor para trasladar el bottón que se expande
	// y dejarlo centrado en las coordenadas de imageProfile
	const traslateButton = parseInt(BUTTON_WITH_HEIGHT) / 2;

	// Definimos los angulos de referencia de los botones
	const angle1 = -15;
	const angle2 = angle1 + 45;
	const angle3 = angle2 + 45;

	const calcularDesplazamiento = (angle: number) => {
		const radius = parseInt(totalWidthHeightImage) / 2;

		// Convertimos el ángulo a radianes
		const angleRadians = (angle * Math.PI) / 180;

		// Calculamos las cantidades de desplazamiento horizontal y vertical
		const dx = radius * Math.cos(angleRadians) - traslateButton;
		const dy = radius * Math.sin(angleRadians) - traslateButton;

		// console.log(traslateButton);
		// console.log(`dx: ${dx}, dy: ${dy}`);

		return { dx, dy };
	};

	// Definimos la función renderExpandIcon
	const renderExpandIcon = (angle: number) => {
		const { dx, dy } = calcularDesplazamiento(angle);

		// Retornamos la cadena de transformación
		return `translate(${dx}px, ${dy}px)`;
	};

	const renderExpandIconWithOffset = (angle: number, offset: number) => {
		const { dx, dy } = calcularDesplazamiento(angle);

		// Aplicamos el desplazamiento adicional de 20 píxeles a la izquierda
		const dxWithOffset = dx - 20;

		// Retornamos la cadena de transformación actualizada
		return `translate(${dxWithOffset}px, ${dy}px)`;
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
			}}>
			<ImageProfile />
			<div
				style={{
					display: "block",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
				}}>
				<div
					style={{
						position: "absolute",
						transform: renderExpandIcon(angle1),
					}}>
					<ExpandIcon name="LinkedIn" />
				</div>
			</div>

			<div
				style={{
					display: "block",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
				}}>
				<div
					style={{
						position: "absolute",
						transform: renderExpandIcon(angle2),
					}}>
					<ExpandIcon name="Github" />
				</div>
			</div>
			<div
				style={{
					display: "block",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
				}}>
				<div
					style={{
						position: "absolute",
						transform: renderExpandIcon(angle3),
					}}>
					<ExpandIcon name="Pdf" />
				</div>
			</div>
		</div>
	);
};
