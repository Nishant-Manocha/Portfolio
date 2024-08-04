import React from 'react'
import {items} from '../../data/SlidebarItems'
import {Link, NavLink} from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";

export const Slidebar = () => {
  return (
    <div className="slide-overlay">
        <div className="nav-toggler">
                <i><IoReorderThreeOutline/></i>
        </div>
        <div className='slide-container'>
        
        <div className="slide-content">
            <div className="logo">
                <Link to={"/"}><span>N</span>ishant</Link>
            </div>
            
            <ul className="list-container">
                {
                    items.map( (item,index) =>{
                        return <li key={index} className='list-items'>
                                <NavLink to={item.path} className='list-title'><i className='icons'>{item.icons}</i>{item.title}</NavLink>
                                </li>
                    })
                }
            </ul>
        </div>
    </div>

    </div>
  )
}
