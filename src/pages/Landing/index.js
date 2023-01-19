import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

const Landing = () => {
  return (
    <div>
      <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">You've been hacked!</h2>
    <p>LOL jk</p>
    <div className="card-actions justify-end">
      <button className="btn">Next</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Landing