import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

const Landing = () => {
  return (
    <div className='flex flex-wrap justify-center pt-14'>
      <div className="card w-96 bg-primary text-primary-content ">
  <div className="card-body">
    <h2 className="card-title">You've been hacked!</h2>
    <p>LOL just kidding</p>
    <div className="card-actions justify-end">
      <button className="btn"><Link to={'/start'}>next</Link></button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Landing