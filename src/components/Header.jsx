import React from 'react';
import logo from '../assets/investment-calculator-logo.png'

export default function Header(){
return (
    <header id="header">
        <img src={logo} alt="Lgoo showing the money bag" />
        <h2>Investment Calculator</h2>
    </header>
)
}