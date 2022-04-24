import React from "react";
import styles from "./NewReleasesListTrack.module.css"
import { CgPlayButtonO, CgPlayPauseO } from "react-icons/cg";

function NewReleasesListTrack({ handleModal, title, author, imageUrl, streamsCount, trackIndex, audiosArray, isModalMax, strCut }) {
  return (
    <div className={styles.audioCard}>
      <img src={imageUrl} alt={title} />
      <h3>{strCut(title)}</h3>
      <div className={styles.streamsCount}>{streamsCount}</div>
      <h4>{author}</h4>
        <button type="button" className={styles.button_play} onClick={() => handleModal(trackIndex, audiosArray)}>
          <CgPlayButtonO size="3rem" className={styles.play} />
        </button>
    </div>
  );
}

export default NewReleasesListTrack;