import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSwipeable } from 'react-swipeable'
import { setDirection, setSliding, setPosition } from '../../features/carousel/carouselSlice'

const NEXT = 'next'
const PREV = 'prev'


const getOrder = (index, position, numItems) => {
    return index - position < 0 ? numItems - Math.abs(index - position) : index - position
}


const Carousel = ({ children }) => {

    const dispatch = useDispatch()
    
    const numItems = React.Children.count(children)

    const { sliding, direction, position } = useSelector(store => store.carousel)

    // const [ sliding, setSliding ] = useState(false)
    // const [ direction, setDirection ] = useState('')
    // const [ position, setPosition ] = useState(0)

    const stopSliding = () => dispatch(setSliding(false))
    
    const slidePrev = () => {
        dispatch(setSliding(true))
        dispatch(setDirection(PREV))
        dispatch(setPosition(position === numItems - 1 ? 0 : position - 1))

        setTimeout(stopSliding, 50)
    }


    const slideNext = () => {
        dispatch(setSliding(true))
        dispatch(setDirection(NEXT))
        dispatch(setPosition(position === numItems - 1 ? 0 : position + 1))

        setTimeout(stopSliding, 50)
    }
    
    const slide = (direction) => {
        if (direction === NEXT) {
            slideNext()
        }
        else {
            slidePrev()
        }
    }
    


    const handlers = useSwipeable({
        onSwipeLeft: () => slide(NEXT),
        onSwipeRight: () => slide(PREV),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true,
        onSwiped: (eventData) => console.log("User Swiped!", eventData),
        onSwiping: () => console.log('swiping'),
        onSwipedUp: () => console.log('up'),
        touchEventOptions: { passive: true },
    })


    return (
        <div {...handlers}>
            <div className='carousel-wrapper mb-3'>
                <div className={`carousel-container ${direction} ${sliding && 'sliding'}`}>
                    {React.Children.map(children, (child, index) => (
                        <div className='carousel-slot' style={{ order: getOrder(index, position, numItems) }}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            
            <button onClick={() => slide(NEXT)}>Next</button>
            <button onClick={() => slide(PREV)}>Prev</button>
        </div>
    )
}


export default Carousel