import React, { useRef } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import './ViewPager.css'

import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';

const pages = [
  a,
  b,
  c
]

function DiplayCard(prop){
    return <div className='slideContainer'>
        <div className='picContainer'>
            <img src={prop.url} className={'pic'}/>
        </div>
    </div>
}

export default function ViewPager() {

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        withLoop: true,
        items: [
          {
            id: 'item-1',
            renderItem: <DiplayCard url={pages[0]}/>,
          },
          {
            id: 'item-2',
            renderItem: <DiplayCard url={pages[1]}/>,
          },
          {
            id: 'item-2',
            renderItem: <DiplayCard url={pages[2]}/>,
          },
        ],
      })
      
    return <>
        {carouselFragment}
    </>
}