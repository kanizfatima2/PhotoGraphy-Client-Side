import React from 'react';
import './Carousel.css'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full h-3/4  ">
                    <img src="https://photos.smugmug.com/Bangladeshi-Wedding-Photos/i-NzPRRHN/1/eded4037/M/_SSP4982-Exposure-M.jpg" alt="" className="w-full h-3/4 " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-3/4 ">
                    <img src="https://humayra.com.bd/wp-content/uploads/2019/05/Wedding-of-Farha.jpg" alt="" className="w-full h-3/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-3/4 ">
                    <img src="https://sanjoyshubro.files.wordpress.com/2014/09/sanjoy-shubro-317901.jpg" alt="" className="w-full h-3/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-3/4 ">
                    <img src="https://alpha360.co/uploads/vendor_profile_page/profile_photo//38a074cb281696ca2ad5214abdf006d4.jpg" alt="" className="w-full h-3/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;