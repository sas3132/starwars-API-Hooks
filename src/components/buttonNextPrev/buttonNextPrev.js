import React from 'react';
import './buttonNextPrev.scss'

function ButtonNextPrev({clickPrev, clickNext}) {
    return (
        <div className="buttonDiv">
            <button onClick={()=>clickPrev()}><img src="/img/arrowleft.svg" alt=""/></button>
            <button onClick={()=>clickNext()}> <img src="/img/arrow.svg" alt=""/></button>
        </div>
    );
}

export default ButtonNextPrev;