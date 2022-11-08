import React from 'react'
import { useLocation } from 'react-router-dom'

const Select = () => {

    const location=useLocation();
    const value=location.state;

  return (
    <div className="Select-section">
        <div className="container text-center">
            <div className="row">
                <div className="col-lg-12">
                    <img src={value.img} className="" style={{width:"10%"}} alt="" />
                    <h1 className='mt-3'>{value.text3}</h1>
                    <p className='text-muted fw-bolder'>Deposit {value.text3} Tokens and Earn {value.text4}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Select