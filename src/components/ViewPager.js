import React, { useRef, useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import './ViewPager.css'
import ReactCardFlip from 'react-card-flip';

import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';

const pages = [
  a,
  b,
  c
]

const comments = [
    a,
    b,
    c
  ]

function DiplayCard(prop){
    const [flipped, setFlipped] = useState(false);
    const flipSpeed = 1;
    let handleFlip = (e) => {
        e.preventDefault();
        setFlipped(!flipped);
    }
    return <div className='slideContainer' onClick={handleFlip}>
            <ReactCardFlip isFlipped={flipped} flipSpeedBackToFront={flipSpeed} flipSpeedFrontToBack={flipSpeed}>
            <div className='picContainer'>
                <img src={prop.front} className={'pic'}/>
            </div>
            <div className='picContainer'>
                <img src={prop.back} className={'pic'}/>
            </div>
            </ReactCardFlip>
        </div>
}

export default function ViewPager() {

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        withLoop: true,
        items: [
          {
            id: 'item-1',
            renderItem: <DiplayCard front={pages[0]} back={comments[0]}/>,
          },
          {
            id: 'item-2',
            renderItem: <DiplayCard front={pages[1]} back={comments[1]}/>,
          },
          {
            id: 'item-2',
            renderItem: <DiplayCard front={pages[2]} back={comments[2]}/>,
          },
        ],
      })
      
    return <>
        {carouselFragment}
    </>
}