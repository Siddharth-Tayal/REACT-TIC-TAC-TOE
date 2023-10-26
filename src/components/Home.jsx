import React from 'react'
import { Link } from 'react-router-dom'
import wallpaper from "../assets/home.png"

const Home = () => {
    return (
        <div className='home'>
            <img src={wallpaper} data-aos='zoom-out' alt="" />
            <Link to={'/game'} data-aos="flip-right" data-aos-duration="1000">Let's Play</Link>
        </div>

    )
}

export default Home