import React, { useState,useContext } from 'react';
import {ThemeContext} from "../../contexts/ThemeContext"
import './ColorBox.scss';

ColorBox.propTypes = {

};

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(initColor);
        return initColor;

    });
    //context
    const testContext = useContext(ThemeContext)
    console.log(testContext)

    function getRandomColor() {
        const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
        const randomIndex = Math.trunc(Math.random() * 5);
        return COLOR_LIST[randomIndex]
    };

    function handleBoxClick() {
        //get random color -> set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    return ( 
        <div className = "color-box" style = {{ backgroundColor: color }} onClick = { handleBoxClick }>
        COLORBOX 
        </div>
    );
}

export default ColorBox;