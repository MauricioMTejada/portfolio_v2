import { Typography, } from "@mui/material";
import styles from '../projects/projectsCard.module.css'
import { IInfo } from "./request";

// Constantes
    const CARD_WIDTH = 400;
    const CARD_HEIGHT = CARD_WIDTH * 1.4;

// Estilos
    const styleDivPrincipal: React.CSSProperties = {
        margin: "0 auto",
        marginBottom: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: `${CARD_WIDTH}px`,
        height: `${CARD_HEIGHT}px`,
        overflow: "hidden",
    };

    const styleImageContainer: React.CSSProperties  = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // padding: "0.5rem",
    }
    const styleImageProject: React.CSSProperties  = {
        // width: '350px',
        // padding: '1rem',
    }

    const styleDataContainer: React.CSSProperties  = {
        padding: "2rem",
    }

    const styleTextTitle: React.CSSProperties  = {
        fontFamily: "Onest, sans-serif",
        textAlign: 'left',
        // marginBottom: '2rem',
    }

    const styleTitleContaine: React.CSSProperties  = {
        height: '10rem',
    }

    const styleTextDescription: React.CSSProperties  = {
        fontFamily: "Onest, sans-serif",
        textAlign: 'left',
    }

    const styleTextTechnologies: React.CSSProperties  = {
        fontFamily: "Onest, sans-serif",
        textAlign: 'left',
        marginTop: '20px',
        marginBottom: '20px',
    }

interface Props {
    article: IInfo;
    isActive: boolean;
}

export const ArticlesCard: React.FC<Props> = ({ article, isActive }) => {
    const opacity = isActive ? 1 : 0.4

	return (
		// <div className={styles.cardStyle} style={{ ...styleDivPrincipal }} >
		<div className={styles.cardStyle} style={{ ...styleDivPrincipal, opacity }} >
			<div style={styleImageContainer}>
				<img
					src={article.cover_image}
					alt="imageProject"
					style={styleImageProject}
				/>
			</div>

			<div style={styleDataContainer}>
				<div style={styleTitleContaine}>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						style={styleTextTitle}>
						{article.title}
					</Typography>
				</div>

				<Typography
					variant="body1"
					color="text.secondary"
					style={styleTextDescription}>
					{article.description}
				</Typography>
			</div>
		</div>
	);
};
