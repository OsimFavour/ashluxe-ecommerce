import React from 'react'
import smallBanner01 from '../../assets/images/banner/small-banner-01.webp'
import smallBanner02 from '../../assets/images/banner/small-banner-02.webp'
import smallBanner03 from '../../assets/images/banner/small-banner-03.webp'

const SmallBanner = () => {
    return (
        <div className="pt-5">
            <div className="row">
            <div className="d-flex justify-content-between align-items-center">

                <div className="first-small-banner">
                    <img
                        src={smallBanner01} 
                        className='img-fluid'
                        alt="main banner" 
                    />
                    
                </div>

                <div className="small-banner">
                    <img
                        src={smallBanner02}  
                        className='img-fluid'
                        alt="main banner" 
                    />
                </div>

                <div className="last-small-banner">
                    <img
                        src={smallBanner03} 
                        className='img-fluid'
                        alt="main banner" 
                    />
                </div>

</div>
            </div>
        </div>
    )
}

export default SmallBanner