import React,{ useEffect, useState } from 'react';
import {auth,provider} from './config';
import{signInWithPopup} from 'firebase/auth'
import Home from './Home'


function SignIn(){
    const [value,setvalue]=useState('');

    const handleclick=()=>
    {
        signInWithPopup(auth,provider).then((data) =>{
            setvalue(data.user.email);
            localStorage.setItem('email',data.user.email);
        });
    };
    useEffect(()=>
    {
        setvalue(localStorage.getItem('email'));
    },[]);
    return(
        <div>
            {value ? <Home/>:<button onClick={handleclick}>Sign In with google</button>}
        </div>
    );
}
export default SignIn;