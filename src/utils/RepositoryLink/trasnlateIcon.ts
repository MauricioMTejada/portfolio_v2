import { totalWidthHeightImage } from "../imageProfile/imageProfile";

// Buscar éste valor en la planilla "src\utils\expandIcon\expandIcon.module.css"
// es el valor de la constante:
// --button-width-height
const BUTTON_WITH_HEIGHT = "36px";

// utilizamos éste valor para trasladar el bottón que se expande
// y dejarlo centrado en las coordenadas de imageProfile
const traslateButton = parseInt(BUTTON_WITH_HEIGHT) / 2;

// Definimos la función renderExpandIcon
export const translateIcon = (angle: number) => {
    const { dx, dy } = calcularDesplazamiento(angle);

    // Retornamos la cadena de transformación
    // return `translate(${dx}px, ${dy}px)`;
    return `translate(${0}px, ${0}px)`;
};

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