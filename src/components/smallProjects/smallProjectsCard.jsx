import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Technologies } from "../../utils/technologies/technologies";

const SmallProjectsCard = ({ data }) => {
  return (
    <div style={{ margin: "0px 0px", height: "100%" }}>
    <Card sx={{ display: "flex", textAlign: "left", width: "100%", height: "100%" }}>
      <CardActionArea sx={{ display: "flex", width: "100%", height: "100%" }}>
        {/* <div style={{ width: "100px", height: "100px", backgroundColor: "red" }}></div> */}
        <CardMedia
							component="img"
							alt="imageProject"
							image={data.imageProject}
							// sx={{ width: 300, padding: 2 }}
                            style={{ width: "300px", padding: "16px",}}
						/>
        <CardContent style={{ width: "100%", padding: "16px", paddingBottom: "50px" }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Onest, sans-serif" }}>
            {data.name}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "Onest, sans-serif" }}>
            {data.description}
          </Typography>

          <Typography style={{ marginTop: 10, fontFamily: "Onest, sans-serif" }}>Tecnologías Usadas:</Typography>

          <Technologies technologies={data.technologies} />
        </CardContent>
      </CardActionArea>
    </Card></div>
  );
};

export default SmallProjectsCard;
