import React from 'react'
import ServerRequests from '../types/ServerRequests';
import { useRef, useState, useEffect } from 'react';
import '../styles/Profile.css';

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
      <div>
      <div className='profileDivs' id="create-item">
        <h2>add item</h2>
        <input className='inputField' type="text" id='name' name='name' placeholder="Item Name" value={name} ref={inputRef} onChange={handleChangeForm}/>
        <input className='inputField' type="text" id='description' name='description' placeholder="Description" value={description} onChange={handleChangeForm}/>
        <input className='inputField' type="text" id='leaseDuration' name='leaseDuration' placeholder="Duration" value={leaseDuration} onChange={handleChangeForm}/>
        <input className='inputField' type="text" id='category' name='category' placeholder="Category" value={category} onChange={handleChangeForm}/>
        <input className='inputField' type="text" id='photo' name='photo' placeholder="Photos Not Yet Implemented" value={photo} onChange={handleChangeForm}/>
        <input className='btn' type="button" value="Submit" onClick={handleSubmit} />
      </div>
      <br/>
      <div className='provileDivs' id="create-item">
        <h2>add item</h2>
        <input className='inputField' type="text" id='name' name='name' placeholder="Item Name" value={name} ref={inputRef} onChange={handleChangeForm}/>
        <input className='inputField' type="text" id='description' name='description' placeholder="Description" value={description} onChange={handleChangeForm}/>
        <input className='inputField' type="text" id='leaseDuration' name='leaseDuration' placeholder="Duration" value={leaseDuration} onChange={handleChangeForm}/>
        <input className='inputField' type="text" id='category' name='category' placeholder="Category" value={category} onChange={handleChangeForm}/>
        <input className='inputField' type="text" id='photo' name='photo' placeholder="Photos Not Yet Implemented" value={photo} onChange={handleChangeForm}/>
        <input className='btn' type="button" value="Submit" onClick={handleSubmit} />
      </div>
      </div>

    )
}

export default CreateItemForm;