import React from "react";
import styles from "./NewReleasesListTrack.module.css"
import { CgPlayButtonO } from "react-icons/cg";

function NewReleasesListTrack({ handleModal, title, author, imageUrl }) {
  return (
    <div className={styles.audioCard}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
        <button type="button" className={styles.button_play} onClick={handleModal}>
          <CgPlayButtonO size="3rem" className={styles.play} />
        </button>
    </div>
  );
}

export default NewReleasesListTrack;