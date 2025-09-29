import React from 'react'
import "../Home/Home.css"

function Social() {
    return (
        <div className='home__social' >
            <a href="mailto:sebastiangs2309@gmail.com" className='hover-style_v2  hover-style_v2--small' target="_blank" >
                <i className="uil-social-icons uil-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/chef-negi-in06/" className='hover-style_v2 hover-style_v2--small' target="_blank" >
                <i className="uil-social-icons uil-linkedin"></i>
            </a>
        </div>
    )
}

export default Social;
