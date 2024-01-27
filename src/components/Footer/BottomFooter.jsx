import React from 'react'
import { Link } from 'react-router-dom'

const BottomFooter = () => {
    return (
        <footer className="footer">
        <div className="footer__explore">
            <h3 className="footer__explore-title">EXPLORE</h3>
            <ul className="footer__explore-list">
                <li className="footer__explore-item"><Link to='' className="footer__explore-link">About</Link></li>
                <li className="footer__explore-item"><Link to='' className="footer__explore-link">Contact</Link></li>
                <li className="footer__explore-item"><Link to='' className="footer__explore-link">Shipping</Link></li>
                <li className="footer__explore-item"><Link to='' className="footer__explore-link">FAQs</Link></li>
                <li className="footer__explore-item"><Link to='' className="footer__explore-link">Terms of Service</Link></li>
            </ul>
        </div>
    
        <div className="footer__copyright">
            <p className="footer__copyright-text">@2024 ASHLUXE •</p>
        </div>
    </footer>
    )
}

export default BottomFooter