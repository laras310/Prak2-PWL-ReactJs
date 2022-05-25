import React from 'react';
import useStyles from '../styles/homestyles';

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.flexbox}>
          <div className={classes.txtCont}>
            <h4 className={classes.h4} >Hi, my name  is</h4>
            <h1 className={classes.h1}>Nurul Aulia Larasati</h1>
            <p className={classes.p}>I'm a data-driven person aspiring to be a data scientist from Bandar Lampung, Indonesia</p>
            <a className={classes.a} href='#'>Download CV</a>
          </div>
          <img src="/foto.png" className={classes.image}/>
        </div>
      </div>
        
    </div>
  );
}

export default Home;