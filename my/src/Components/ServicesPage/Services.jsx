import React, { useState } from 'react';
import './Services.css';
import { ServicesData } from '../../data/Services';
import Modal from './Modal';

const Services = () => 
{

  const[modal,setModal] = useState(false);
  const[data,setData]=useState(null);

  function handleClick(item)
  {
    setData(item);
    setModal(!modal);
    console.log("enter")
  }

  return (
    <div className={`Services-container ${modal ? "active-modal" : ""}`}
    onClick={() => modal && setModal(!modal)}>

      <div className="Services-content">

        <div className="Services-main-heading">
          <h2>Services</h2>
        </div>

        <div className="services-grid-container">
          {
            ServicesData.map((item) => {

              const description = item.desc.length < 100 ? item.desc : `${item.desc.substring(0, 100)}...`;
              return (
                <div className="services-card" key={item.id}>
                  <img src={item.icon} alt={item.title} />
                  <h5>{item.title}</h5>
                  <p>{description} <span onClick={()=>handleClick(item)}>Read More</span></p>
                </div>                
              );
            })
          }
        </div>

          {
            modal && (<Modal item={data} setModal={setModal}></Modal>)
          }
      </div>
    </div>
  );
};

export default Services;
