import React from "react";
import { MediaImageProfile } from "../../utils/mediaImageProfile/mediaImageProfile";
import { Typography } from "@mui/material";

export const BUTTON_ICON_WITH_HEIGHT = "32px";

const Presentation: React.FC = () => {
	return (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "start",
				width: "75%",
				marginTop: "100px",
				marginBottom: "50px",
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
					justifyContent: "start",
				}}>
				<Typography variant="h1" sx={{ fontFamily: "Onest, sans-serif", fontSize: "2.255rem", fontWeight: "bold", marginBottom: "1.5rem",  }}>
					Hola, soy Mauricio
				</Typography>

				<Typography
					paragraph
					align="left"
					sx={{ fontFamily: "Onest, sans-serif", fontSize: "1.255rem", paddingRight: "4rem" }}>
					Un reciente graduado Fullstack de la academia Henry, donde he
					aprendido HTML, CSS y JavaScript. Tengo experiencia en el
					trabajo de equipo y me adapto fácilmente a diferentes dinámicas de
					grupo. Me considero una persona seria y comprometido con mi trabajo.
				</Typography>
			</div>

			<MediaImageProfile />
		</div></div>
	);
};

export default Presentation;
