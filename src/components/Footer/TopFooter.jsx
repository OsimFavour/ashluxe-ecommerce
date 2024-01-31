import { FaInstagram } from "react-icons/fa"
import React from 'react'

const TopFooter = () => {
    return (
        <section className="community container-xxl mb-5">
            <div className="row">
                <div className="col-6">
                    <div className="community-content">
                        <h2 className="community-title">Join Our Community</h2>
                        <p className="community-description">                                                                                             Be the first to get the latest updates on our promotion campaigns, products, and services.</p>
                    </div>
                </div>
            
                <div className="col-6">
                    <div className="community-subscription">
                        <div className="community-input-group">
                            <input type="text" placeholder="Enter your email address" className="community-input"/>
                            <input type="submit" value="join" className="community-submit"/>
                        </div>
                
                        <div className="community-social-media">
                            {/* <FaInstagram/> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopFooter