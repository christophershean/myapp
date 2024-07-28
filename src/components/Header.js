import React from 'react';
import styles from "./Header.module.css";
import { useState } from 'react';
import { useEffect } from 'react';


const Header = () => {
    const [value, setvalue] = useState(0);

    const valuehandler = () => {
        setvalue(value + 1);
        console.log(value);
        //setvalue("updated");
        //console.log(value);
    }
    
    const Subtracthandler = () => {
        setvalue(value - 1);
        console.log(value);
        
    }
    useEffect(() => {console.log("change the data")});
        

  return (
    <div className={styles.header}>
        <p>this is paragrame</p>
        <button onClick={valuehandler}>addition</button>
        <button onClick={Subtracthandler}>subtract</button>
        <h1>{value}</h1>
    </div>
  )
}

export default Header;