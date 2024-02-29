import React from "react";
import style from "./RepositoryLink.module.css";
import ExpandIconForCard from "../expandIconForCard/ExpandIconForCard";
import ExpandIconForCardGrey from "../expandIconForCard/ExpandIconForCardGrey"; // Importa el nuevo componente

interface Props {
  repository: string;
  url: string;
}

export const RepositoryLink: React.FC<Props> = ({ repository, url }) => {
  const shouldApplyStyle03 = url === "https://www.timbring.com";

  return (
    <div className={style.style01}>
      <a href={url} target="_blank">
        <div className={style.style02}>
          <div className={style.style04}>
            <ExpandIconForCard name="Deployment" />
          </div>
        </div>{" "}
      </a>
      {shouldApplyStyle03 && (
        <div className={style.style03}>
          <a href={repository} target="_blank">
            <div className={style.style02}>
              <div className={style.style04}>
                <ExpandIconForCardGrey name="Repository" />
              </div>{" "}
            </div>
          </a>{" "}
        </div>
      )}
      {!shouldApplyStyle03 && (
        <a href={repository} target="_blank">
          <div className={style.style02}>
            <div className={style.style04}>
              <ExpandIconForCard name="Repository" />
            </div>{" "}
          </div>
        </a>
      )}
    </div>
  );
};
