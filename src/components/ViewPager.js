import React, { useRef } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import './ViewPager.css'

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

function DiplayCard(prop){
    return <>
    <div className='slideContainer'>
        <div className='picContainer'>
            <img src={prop.url} className={'pic'}/>
        </div>
    </div>
    </>
}

export default function ViewPager() {

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
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
    <div>{carouselFragment}</div>
    </>
}