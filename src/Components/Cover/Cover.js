import React from 'react';
import Slider from 'react-slick';

import './Cover.css';

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const sliderCoverGenerator = (images) => {
  if (images) {
    return (
      <Slider {...settings}>
        {images.map((image) => {
          console.log('image')
          return (
            <div key={image.id} className="item_slider" 
            style={{background:`url(/images/covers/${image.cover})`}}>
              <div className="caption">
                  <h4>{image.topic}</h4>
                  <p>{image.title}</p>
              </div>
            </div>
          )
        })}
      </Slider>
    )
  }
}

const Cover = ({images}) => {
  return (
    <div>
      {sliderCoverGenerator(images)}
    </div>
  )
}

export default Cover;