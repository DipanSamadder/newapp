import React, { useState } from 'react';
import style from './form.module.css';


export default function FormData() {
    const [user, setUser] = useState({name: "", email:""});
    const {name, email} = user;
    const handelOnChange = (e)=>{
      setUser({...user, [e.target.name]: e.target.value});
    }
    const handelOnSubmitForm = (e)=>{
      console.log(user);
    }
  return (
    <div className={style.formGroup}>
        <form action="">
            <input type="text" name="name" placeholder="name" value={name} onChange={handelOnChange}/><br/><br/>
            <input type="email" name="email"  placeholder="name" value={email} onChange={handelOnChange}/><br/><br/>
            <input type="submit" value="Submit" onClick={handelOnSubmitForm}/>
        </form>

    </div>
  )

}
