import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

const Start = () => {
  return (
    <div className='flex flex-wrap justify-center pt-14'>
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
            <h2 className="card-title">However, I have just one question for you...</h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
            <button className="btn"><Link to={'/question'}>Next</Link></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Start