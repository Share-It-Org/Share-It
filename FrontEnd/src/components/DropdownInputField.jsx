import React from 'react'
import { useState, useRef } from 'react';
import '../styles/Profile.css';

const DropdownPopup = ({setCategory}) => {

    const DropdownItem = ({option, setCategory}) => {
        return (
            <div id="dropdown-item" onClick={(e) => setCategory(e, option)}>
            {option}
            <br />
            </div>
        )
    }

    return(
        <div className="dropdown-popup">
            <DropdownItem option="Tools" setCategory={setCategory}></DropdownItem>
            <DropdownItem option="Games" setCategory={setCategory}></DropdownItem>
            <DropdownItem option="Electronics" setCategory={setCategory}></DropdownItem>
            <DropdownItem option="Books" setCategory={setCategory}></DropdownItem>
            <DropdownItem option="Sporting Goods" setCategory={setCategory}></DropdownItem>
            <DropdownItem option="Camping" setCategory={setCategory}></DropdownItem>
            <DropdownItem option="Spaces" setCategory={setCategory}></DropdownItem>
            <DropdownItem option="Arts & Crafts" setCategory={setCategory}></DropdownItem>
            <DropdownItem option="Gardening" setCategory={setCategory}></DropdownItem>
        </div>
    )
}

const DropdownInputField = ({icon, setCategory}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown-field" onClick={() => setOpen(!open)}>
            <div className="icon-button">
                {icon}
            </div>
            {open && <DropdownPopup setCategory={setCategory}/>}
        </div>
    )
}

export default DropdownInputField