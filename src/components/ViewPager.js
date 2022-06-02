import React, { useRef, useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import './ViewPager.css'
import ReactCardFlip from 'react-card-flip';

import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';
import d from '../images/d.png';

const pages = [
  a,
  b,
  c,
  d
]

const comments = [
    a,
    b,
    c,
    d
  ]

function DiplayCard(prop){
    const [flipped, setFlipped] = useState(false);
    const flipSpeed = 1;
    let handleFlip = (e) => {
        e.preventDefault();
        setFlipped(!flipped);
    }
    return <div className='slideContainer' >
            <ReactCardFlip isFlipped={flipped} flipSpeedBackToFront={flipSpeed} flipSpeedFrontToBack={flipSpeed}>
            <div className='picContainer' onClick={handleFlip}>
                <img src={prop.front} className={'pic'}/>
            </div>
            <div className='picContainer' onClick={handleFlip}>
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
            id: 'item-3',
            renderItem: <DiplayCard front={pages[2]} back={comments[2]}/>,
          },
          {
            id: 'item-4',
            renderItem: <DiplayCard front={pages[3]} back={comments[3]}/>,
          },
        ],
      })
      
    return <>
        {carouselFragment}
    </>
}