import React from 'react'

const TopFooter = () => {
    return (
        <section className="community">
            <div className="community__content">
                <h2 className="community__title">Join Our Community</h2>
                <p className="community__description">Be the first to get the latest updates on our promotion campaigns, products, and services.</p>
            </div>
        
            <div className="community__subscription">
                <div className="community__input-group">
                    <input type="text" placeholder="Enter your email address" className="community__input"/>
                    <input type="submit" value="join" className="community__subit"/>
                </div>
        
                <div className="community__social-media">
                    <i className="fa fa-instagram" style="font-size:24px"></i>
                </div>
            </div>
        </section>
    )
}

export default TopFooter