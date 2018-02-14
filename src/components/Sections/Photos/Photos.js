import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Photo1 from '../../../assets/imgs/galleryimg5.png';
import './Photos.css';


class Photos extends Component {
    render() {
        let settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrow:false,
            autoplay:true,
            autoplaySpeed:5000,
            pauseOnHover:false,
            responsive:[
                {
                    breakpoint:1023,
                    settings:{
                        slidesToShow:3,
                    }
                },
                {
                    breakpoint:767,
                    settings:{
                        slidesToShow:2
                    }
                },
                {
                    breakpoint:539,
                    settings:{
                        slidesToShow:1
                    }
                }
            ]
            
        };

        let slides = [];
        for(let count = 0; count <= 4; count++){
            slides.push(
                <div key = {count}>
                    <img src={Photo1} alt= {"Photo " + count}/>
                </div>
            );
        }

        return (
            <div className="Photos">
                <Slider {...settings}>
                    {slides}
                </Slider>
            </div>

        );

    }
}

export default Photos;