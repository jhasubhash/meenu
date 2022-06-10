import React, { useRef, useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import ReactCardFlip from 'react-card-flip';

import './ViewPager.css'

import p from '../images/p.png';
import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';
import d from '../images/d.png';


import a_back from '../images/back/a.png';
import b_back from '../images/back/b.png';
import c_back from '../images/back/c.png';
import d_back from '../images/back/d.png';

import Heart from './Heart';


const pages = [
    a,
    b,
    c,
    d
]

const comments = [
    a_back,
    b_back,
    c_back,
    d_back
  ]


function DiplayCard(props){
    const [flipped, setFlipped] = useState(false);
    const flipSpeed = 1;
    let handleFlip = (e) => {
        e.preventDefault();
        setFlipped(!flipped);
    }
    return <div className='slideContainer' >
            <ReactCardFlip isFlipped={flipped} flipSpeedBackToFront={flipSpeed} flipSpeedFrontToBack={flipSpeed}>
            <div className='picContainer' onClick={handleFlip}>
                <img src={props.front} className={'pic'}/>
            </div>
            <div className='picContainer' onClick={handleFlip}>
                <img src={props.back} className={'pic'}/>
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
            renderItem: <DiplayCard front={pages[2]} back={comments[2]} />,
          },
          {
            id: 'item-4',
            renderItem: <DiplayCard front={pages[3]} back={comments[3]} />,
          },
        ],
      })
      
    return <>
        <Heart/>
        {carouselFragment}
    </>
}