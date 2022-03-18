import React from 'react'
import SeatDisplay from '../display'

import classes from "./contain.module.css"

export const Conatin = ({booked}) => {
  return (
    <div className={booked.length > 0 ? classes.conatin : classes.conatin_}>
        {booked.map(seat => <SeatDisplay key={seat.id} seat={seat}/>)}
    </div>
  )
}
