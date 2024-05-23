import {useState} from 'react';
import { useNavigate} from 'react-router-dom';

export default function ContactUs(){
    
    
    const navigate = useNavigate();
    

    const [formState,setFormState] = useState({
        'fullName':'',
        'email':''
    });

    const updateFormField = (e) => {
        const keybeingChanged = e.target.name;
        const newValue = e.taget.value;
        setFormState({
            ...formState,
            [keybeingChanged]:newValue
        })
    }
    return <>
    <h1>Contact Us</h1>
    <div>
        <label>
            Full Name
        </label>
        <input 
        type ="text" name="fullName" 
        className='form-control'
        value={formState.fullName}
        onChange={updateFormField}
        />
    </div>
    <div>
        <label>Email:</label>
        <input 
        type="text" 
        name="email" 
        className='form-control'
        value={formState.email}
        onChange={updateFormField}
        />
    </div>
    <button className='btn btn-primary mt-3' 
    onClick={()=>{
        navigate("/form-submitted",{
            state:formState
        })
        
    }}
    >Submit</button>
    </>
}