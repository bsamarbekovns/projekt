import React from 'react';
import classes from './button.module.css'


const Button = ({onclick, label}) => {
  return (
    <button className={classes.btn} onClick={onclick}>
      {<label/>}
    </button>
  );
};
export default Button;
