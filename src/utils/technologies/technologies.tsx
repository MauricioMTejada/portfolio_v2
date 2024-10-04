import React from "react";
import { Typography } from "@mui/material";
import { ITechnologies } from "./dataTechnologies";
import styles from "./technologies.module.css";

interface TechnologiesProps {
  technologies: ITechnologies[];
}

export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className={styles.container}>
      <div className={styles.techList}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            <img src={tech.image} alt={tech.name} className={styles.techImage} />
            <Typography variant="body1" className={styles.techName}>
              {tech.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

// import React from "react";
// import { Typography } from "@mui/material";
// import { ITechnologies } from "./dataTechnologies";

// interface TechnologiesProps {
// 	technologies: ITechnologies[];
// }

// const stileDiv1: React.CSSProperties = {
// 	display: "flex",
// 	flexDirection: "column",
// 	justifyContent: "center",
// 	alignItems: "center",
// 	width: "100%",
// 	// flexGrow: 1,
// };

// const stileDiv2: React.CSSProperties = {
// 	display: "flex",
// 	flexDirection: "row",
// 	flexWrap: "wrap",
// };

// const stileDiv3: React.CSSProperties = {
// 	display: "flex",
// 	alignItems: "center",
// 	margin: "5px",
// 	// border: "2px solid #6d6d6d",
// 	border: "2px solid #FACC15",
// 	borderRadius: "16px",
// };

// const stileDiv4: React.CSSProperties = {
// 	width: "30px",
// 	height: "30px",
// 	marginRight: "5px",
// 	borderTopRightRadius: "0%",
// 	borderBottomRightRadius: "0%",
// 	borderTopLeftRadius: "50%",
// 	borderBottomLeftRadius: "50%",
// 	padding: "2px",
// };

// const stileDiv5: React.CSSProperties = {
// 	marginRight: "5px",
// };

// export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
// 	// console.log(technologies);

// 	// Dividir los datos en dos arrays
// 	const halfLength = Math.ceil(technologies.length / 2);
// 	const firstHalf = technologies.slice(0, halfLength);
// 	const secondHalf = technologies.slice(halfLength);

// 	return (
// 		<div style={stileDiv1}>
// 			<div style={stileDiv2}>
// 				{firstHalf.map((tech, index) => (
// 					<div key={index} style={stileDiv3}>
// 						<img src={tech.image} alt={tech.name} style={stileDiv4} />
// 						<Typography variant="body1" style={stileDiv5}>
// 							{tech.name}
// 						</Typography>
// 					</div>
// 				))}
// 			</div>
// 			<div style={stileDiv2}>
// 				{secondHalf.map((tech, index) => (
// 					<div key={index} style={stileDiv3}>
// 						<img src={tech.image} alt={tech.name} style={stileDiv4} />
// 						<Typography variant="body1" style={stileDiv5}>
// 							{tech.name}
// 						</Typography>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };
