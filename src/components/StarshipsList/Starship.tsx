import React from 'react'
import {InitialStateResultType} from "../../types/types";
import styles from './starship.module.css'

export const Starship: React.FC<InitialStateResultType> = ({
                                                             name,
                                                             manufacturer,
                                                             passengers,
                                                             starship_class,
                                                             model,
                                                             hyperdrive_rating
                                                           }) => {
  return (
    <div className={styles.card}>
      <h3>
        {name}
      </h3>
      <h6>
        {model}
      </h6>
      <div>STARSHIP CLASS:</div>
      <div className={styles.text}>{starship_class}</div>
      <div>HYPERDRIVE RATING:</div>
      <div className={styles.text}>{hyperdrive_rating}</div>
      <div>PASSENGERS:</div>
      <div className={styles.text}>{passengers}</div>
      <div>MANUFACTURER:</div>
      <div className={styles.text}>{manufacturer}</div>
    </div>
  )
}


