import React from 'react'
import './Modal.css'
const Modal = ({item,setModal}) => {
  return (
    <div className='Modal-container'>
        <h2>{item.title}</h2>

        <div className="list-container">
        {
            item.modaldata.map( (item) =>(
                <li> <span className='modal-heading'>{item.heading}-</span> <span className='modal-para'>{item.para}</span></li>
            ))
        }
        </div>
        <button onClick={()=>setModal(false)} className='modal-button'>Close</button>
    </div>
  )
}

export default Modal