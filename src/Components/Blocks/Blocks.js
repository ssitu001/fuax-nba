import React from 'react';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-reveal';

import './Blocks.css';

const generateBlocks = (blocks) => {
  if (blocks) {
    return (
      blocks.map((block) => {
        return (
          <Zoom key={block.id} className={`block ${block.type}`}>
            <div className="veil"></div>
            <div className="image" style={{background: `url(/images/blocks/${block.image}) no-repeat`}}>
            </div>
            <div className="title">
              <Link to={block.link}>{block.title}</Link>
            </div>
          </Zoom>
        )
      })
    )
  }
};

const Blocks = ({blocks}) => {
  return (
    <div className="home_blocks">
      {generateBlocks(blocks)}
    </div>
  )
}

export default Blocks;