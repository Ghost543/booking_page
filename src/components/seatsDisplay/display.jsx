import React from 'react'

import classes from './seat.module.css'

const SeatDisplay = ({seat}) => {
  return (
    <div className={classes.seat}>
        <h3>Id: #!@{seat.id}</h3>
        <h4>Seat <span>No.{seat.Seat}</span></h4>
    </div>
  )
}

export default SeatDisplay