import React from "react";
import { MediaImageProfile } from "../../utils/mediaImageProfile/mediaImageProfile";
import styles from "./presentation.module.css";

const Presentation: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Hola, soy <span className={styles.orangeText}>Mauricio</span>
          </h1>
          <p className={styles.paragraph}>
            Un reciente graduado Fullstack de la academia Henry, donde he
            aprendido HTML, CSS y JavaScript. Tengo experiencia en el trabajo
            de equipo y me adapto fácilmente a diferentes dinámicas de grupo.
            Me considero una persona seria y comprometido con mi trabajo.
          </p>
        </div>
        <MediaImageProfile />
      </div>
    </div>
  );
};

export default Presentation;

// import React from "react";
// import { MediaImageProfile } from "../../utils/mediaImageProfile/mediaImageProfile";
// import { Typography } from "@mui/material";

// import style from "./presentation.module.css";


// export const BUTTON_ICON_WITH_HEIGHT = "32px";

// const containerStyles: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center"
// };

// const contentContainerStyles: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "center",
//   alignItems: "start",
//   width: "75%",
//   marginTop: "8rem",
//   marginBottom: "0rem"
// };

// const textContainerStyles: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "start",
//   justifyContent: "start"
// };

// const titleStyles: React.CSSProperties = {
//   fontFamily: "Onest, sans-serif",
//   fontSize: "2.255rem",
//   fontWeight: "bold",
//   marginBottom: "1.5rem"
// };

// const orangeText: React.CSSProperties = {
//   color: "#FACC15"
// }

// const paragraphStyles: React.CSSProperties = {
//   fontFamily: "Onest, sans-serif",
//   fontSize: "1.255rem",
//   paddingRight: "4rem"
// };

// const Presentation: React.FC = () => {
//   return (
//     <div style={containerStyles}>
//       <div style={contentContainerStyles}>
//         <div style={textContainerStyles}>
//           <Typography variant="h1" sx={titleStyles}>
//             Hola, soy <span style={orangeText}>Mauricio</span>
//           </Typography>

//           <Typography paragraph align="left" sx={paragraphStyles}>
//             Un reciente graduado Fullstack de la academia Henry, donde he
//             aprendido HTML, CSS y JavaScript. Tengo experiencia en el trabajo
//             de equipo y me adapto fácilmente a diferentes dinámicas de grupo.
//             Me considero una persona seria y comprometido con mi trabajo.
//           </Typography>
//         </div>

//         <MediaImageProfile />
//       </div>
//     </div>
//   );
// };

// export default Presentation;
