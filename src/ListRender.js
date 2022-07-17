import React from 'react'
import './App.css';

const ListRender = ({date,amount,type}) => {
  return (
    <div className="list-main">
       <div className="same3">{date}</div>
       <div className="same3">{amount}</div>
       <div className="same3">{type}</div>      
    </div>
  )
}

export default ListRender
