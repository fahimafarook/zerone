import React, { useState } from 'react';
import '../css/common.css'

function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className='contact-form'>
            {/* <div className='form-field-container'>
                <label className='form-fields'>name</label>
                <input className = "input"
                    placeholder="fahima"
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
            /> 
                <label className='form-fields'>Email ID</label>
                <label className='form-fields'>Phone Number</label>
                <label className='form-fields'>Iusse</label>
            </div>  */}
        </div>
    );
}

export default Form;