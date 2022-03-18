import React from 'react'

import classes from "./navbar.module.css"

const Navbar = ({displayCoach, bool}) => {
  return (
    <nav className={classes.nav}>
        <div className={classes.nav_logo}>
            <h1 className={classes.nav_logo__logo}>Book-Seats</h1>
        </div>
        <div className={classes.nav_rgt}>
            <h2 className={classes.nav_rgt__item} onClick={()=>displayCoach(!bool)}>Available Seats</h2>
        </div>
    </nav>
  )
}

export default Navbar