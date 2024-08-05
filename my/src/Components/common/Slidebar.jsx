import React, { useState, useEffect } from 'react';
import { items } from '../../data/SlidebarItems';
import { Link, NavLink } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const Slidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1199);
  const [isOpen, setIsOpen] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1199);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true); // Automatically open the sidebar on larger screens
    }
  }, [isMobile]);

  return (
    <>
      {isMobile && (
        <>
          <div 
            className="nav-toggler" 
            onClick={() => setIsOpen(!isOpen)} 
            style={{ 
              left: isOpen ? '210px' : '10px',
              backgroundColor: isOpen ? 'transparent' : 'var(--bg-black-100)',
              border: isOpen ? 'none' : '',
            }}
          >
            <i>
              {isOpen ? <IoMdClose /> : <IoReorderThreeOutline />}
            </i>
          </div>

          <div className={`slide-container ${isOpen ? "slideOpen" : "slideClose"}`}  style={{display: isOpen ? "flex" :"none"}}> 
            <div className="slide-content">
              <div className="logo">
                <Link to={"/"}><span>N</span>ishant</Link>
              </div>

              <ul className="list-container">
                {items.map((item, index) => (
                  <li key={index} className='list-items'>
                    <NavLink 
                      to={item.path} 
                      className='list-title' 
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <i className='icons'>{item.icons}</i>{item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

      {!isMobile && (
        <div className="slide-container"> 
          <div className="slide-content">
            <div className="logo">
              <Link to={"/"}><span>N</span>ishant</Link>
            </div>

            <ul className="list-container">
              {items.map((item, index) => (
                <li key={index} className='list-items'>
                  <NavLink 
                    to={item.path} 
                    className='list-title'
                  >
                    <i className='icons'>{item.icons}</i>{item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
