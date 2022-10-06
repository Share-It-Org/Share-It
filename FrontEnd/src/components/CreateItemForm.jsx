import React from 'react'
import ServerRequests from '../types/ServerRequests';
import { useRef, useState, useEffect } from 'react';
import '../styles/Profile.css';
import DropdownInputField from './DropdownInputField.jsx';

const CreateItemForm = () => {
    const inputRef = useRef(null);

    const [formData, setFormData] = useState({ 
        name: '',
        description: '',
        leaseDuration: '',
        category: 'Category',
        photo:'' 
      });

    const [categoryVal, setCategoryVal] = useState('Category')
  
    const {name, description, leaseDuration, category, photo} = formData;
  
    const handleChangeForm = (e) => {
      // TODO: Why is Object.assign approach below not working?
      // setFormData(prevState => Object.assign(prevState, {[e.target.name]: e.target.value} )) 
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }

    function DropdownMenu() {
        return (
            <div className="dropdown">

            </div>
        )
    }
  
    const handleSubmit = (e) => {
      console.log(formData);
      ServerRequests.CreateItem('drew', formData)
    }
  
    //Focus on first input field upon mounting
    useEffect(() => {
      // inputRef.current.focus();
    })

    const handlePickCategory = (e, val) => {
        // setCategoryVal(val);
        setFormData({
            ...formData, 
            category: val
        })
    }

    return (
      <div id="create-item-form">
        <div id="category-dropdown">
        <DropdownInputField id='category' name='category' value={category} onChange={handleChangeForm} setCategory={handlePickCategory} children="Hello World!" icon={formData.category}/> <br />
        </div>
        <input type="text" id='name' name='name' placeholder="Item Name" value={name} ref={inputRef} onChange={handleChangeForm}/> <br />
        <input type="text" id='description' name='description' placeholder="Description" value={description} onChange={handleChangeForm}/> <br />
        <input type="text" id='leaseDuration' name='leaseDuration' placeholder="Duration" value={leaseDuration} onChange={handleChangeForm}/> <br />
        {/* <input type="text" id='category' name='category' placeholder="Category" value={category} onChange={handleChangeForm}/> <br /> */}
        <input type="text" id='photo' name='photo' placeholder="Photos Not Yet Implemented" value={photo} onChange={handleChangeForm}/> <br />
        <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
    )
}

export default CreateItemForm;