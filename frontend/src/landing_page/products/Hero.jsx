
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Hero() {
    return (
        <div className="container border-bottom">
        <div className='text-center mt-5 p-3'>
        <h1 className='text-muted'>Technology</h1>
        <h3 className='text-muted mt-4 fs-5'>Sleek, modern, and intuitive trading platforms</h3>
        <p className='mt-4 mb-5 text-muted'>
          Check out our <a href="" style={{textDecoration:"none"}}>
             investment offerings
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </p>
        </div>
      </div>
    );
}

export default Hero;