import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className='home-container'>
            <Link to="/todo" className='btn btn-warning link'>To Do App</Link>
            <Link to="/notes" className='btn btn-warning link'>Note Keeper</Link>
    </div>
  )
}

export default Home