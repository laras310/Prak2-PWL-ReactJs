import React from 'react';
import useStyles from '../styles/projectstyles';

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.box}>
      <h2 className={classes.h2}>Projects</h2>
        <div className={classes.flexbox}>
          <div className={classes.flexrow}>
            <div className={classes.project}>
              <h2 className={classes.h2}>Defense of Ila</h2>
              <p className={classes.txtCont}>A classic asteroid shooting game. This game was made with pygame for object oriented programming.
              My role was Programmer</p>
            </div>  
            <img src="/Defense-of-ila.png" className={classes.image}/>
          </div>
          <div className={classes.flexrow}>
            <div className={classes.project}>
              <h2 className={classes.h2}>KliniX</h2>
              <p className={classes.txtCont}>A system information for archive digitalization, and service automatization. My role was front-end programmer and a little bit of backend</p>
            </div>  
            <img src="/hrfi.png" className={classes.image}/>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Projects;