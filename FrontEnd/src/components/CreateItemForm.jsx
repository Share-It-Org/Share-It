import React from 'react'
import ServerRequests from '../types/ServerRequests';
import { useRef, useState, useEffect } from 'react';

const CreateItemForm = () => {
    const inputRef = useRef(null);
    const [formData, setFormData] = useState({ 
        name: '',
        description: '',
        leaseDuration: '',
        category: '',
        photo:'' 
      });
  
    const {name, description, leaseDuration, category, photo} = formData;
  
    const handleChangeForm = (e) => {
      // TODO: Why is Object.assign approach below not working?
      // setFormData(prevState => Object.assign(prevState, {[e.target.name]: e.target.value} )) 
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
  
    const handleSubmit = (e) => {
      console.log(formData);
      ServerRequests.CreateItem('drew', formData)
    }
  
    //Focus on first input field upon mounting
    useEffect(() => {
      // inputRef.current.focus();
    })
  
  
    return (
      <div id="create-item">
        <input type="text" id='name' name='name' placeholder="Item Name" value={name} ref={inputRef} onChange={handleChangeForm}/>
        <input type="text" id='description' name='description' placeholder="Description" value={description} onChange={handleChangeForm}/>
        <input type="text" id='leaseDuration' name='leaseDuration' placeholder="Duration" value={leaseDuration} onChange={handleChangeForm}/>
        <input type="text" id='category' name='category' placeholder="Category" value={category} onChange={handleChangeForm}/>
        <input type="text" id='photo' name='photo' placeholder="Photos Not Yet Implemented" value={photo} onChange={handleChangeForm}/>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
    )
}

export default CreateItemForm;