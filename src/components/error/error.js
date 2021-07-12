import React from 'react';
import './error.scss'
import logo from './dstar1.svg'


const Error = () => {
    return (

        <div className='borderSpinner'>
            <img src={logo} alt=""/>
            <h2>Error!</h2>
        </div>
    );
};
export default Error;