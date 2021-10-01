import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImgSlider() {


    
    let setting={
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
       
    };
    return (
            <Carousel {...setting}>
                <Wrap>
                        <img src="/images/slider-badging.jpg" />
                </Wrap>
                <Wrap>
                        <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                        <img src="/images/slider-scale.jpg" />
                </Wrap>
                <Wrap>
                        <img src="/images/slider-scales.jpg" />
                </Wrap>
            </Carousel>
    )
}

export default ImgSlider;



const Carousel = styled(Slider)`
.slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }

  ul li button{
      &::before
      {
          font-size:10px;
          color:rgb(150,158,171);
      }
  }

  li.slick-active button::before
  {
      color:white;
  }
 
`;

const Wrap = styled.div`

    img
    {
        width:100%;
        height:100%;
        margin-bottom:0;
        padding-bottom:0;
        border-radius:4px;
        border:1px solid transparent;
        }

`;