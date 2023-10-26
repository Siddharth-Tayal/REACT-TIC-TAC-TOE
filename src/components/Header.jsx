import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='header'
            data-aos="flip-up"
        >Tic-Tac-Toe</div>
    )
}

export default Header