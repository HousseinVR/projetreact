import React from 'react';
import "./footer.scss"

const Footer = () => {
    return (
        <div className='footer container-fluid bg-light'>
            <div className='g-card-container row m-5'>
                <div className='g-card col-sm-12 col-md-4 col-lg-4'>
                    <h3>Get in touch</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, cum?</p>
                    <div>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-snapchat"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
                <div className='g-card col-sm-12 col-md-4 col-lg-4'>
                    <h4>CATEGORIES</h4>
                    <ul>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Sunglasses</a></li>
                        </ul>
                </div>
                <div className='g-card col-sm-12 col-md-4 col-lg-4'>
                <h4>LINKS</h4>
                        <ul>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                </div>
            </div>
        </div>



    );
};

export default Footer;