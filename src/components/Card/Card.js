import React from 'react';
import img1 from "./img/img10.jpg"
import img2 from "./img/img20.jpg"
import img3 from "./img/img30.jpg"
import "./Card.scss"


const Card = () => {

    return (
        <div className='gros mt-5'>
            <div className='g-card-container row d-flex'>
                <div className='g-card col-sm-12 col-md-4 col-lg-4 mb-4'>
                    <img src={img1} alt="img1" />
                    <div className='bloc-button'>
                        <button className='btn btn-light'>Discover</button>
                    </div>
                </div>
                <div className='g-card col-sm-12 col-md-4 col-lg-4 mb-4'>
                    <img src={img2} alt="img2" />
                    <div className='bloc-button'>
                        <button className='btn btn-light'>Discover</button>
                    </div>
                </div>
                <div className='g-card col-sm-12 col-md-4 col-lg-4 mb-4'>
                    <img src={img3} alt="imag3" />
                    <div className='bloc-button'>
                        <button className='btn btn-light'>Discover</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;