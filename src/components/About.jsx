import React from 'react';
import useStyles from '../styles/aboutstyles';

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.flexbox}>
          <div className={classes.txtCont}>
            <h4 className={classes.h4}>About Me</h4>
            <p className={classes.p}>Hello! My name is Laras, a 3rd year student from Institut Teknologi Sumatera, Indonesia.
            I have a passion for analyzing data.
            Problem solver, calm, and collected person with perfectionist attitude. I enjoy crochet, TV series, and generally every kind of music.
            My main focus these days is learning data analytics, machine learning, and finishing college. </p>
          </div>
          <img src="/Knitting.png" className={classes.image}/>
          <div className={classes.skill}>
            <h4 className={classes.h4}>My Skill</h4>
            <p className={classes.p}>This is what i learned so far in college:</p>
            <ul>
              <li>Data Analysis</li>
              <li>Machine Learning</li>
              <li>Data Visualization</li>
              <li>Python</li>
              <li>SQL</li>
              <li>HTML + CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>C++</li>
            </ul>
          </div>

          
        </div>
      </div>
        
    </div>
  );
}

export default Home;