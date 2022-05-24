import React from 'react';
import {Link} from 'react-router-dom';
import useStyles from '../styles/bar';

function TopBar() {
  const classes = useStyles();
  return (
    <div className={classes.barContainer}>
      <nav>
        <Link to="/" className={classes.link}>Home</Link>
        <Link to="/about" className={classes.link}>About</Link>
        <Link to="/projects" className={classes.link}>Projects</Link>
      </nav>
    </div>
    
  );
}

export default TopBar;