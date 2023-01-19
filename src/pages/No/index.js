import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

const No = () => {
  return (
    <div className='flex flex-wrap justify-center pt-14'>
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Please</h2>
            {/* <p>We are using cookies for no reason.</p> */}
            <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={'/yes'}>Yes</Link></button>
            <button className="btn btn-ghost"><Link to={'/please'}>No</Link></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default No