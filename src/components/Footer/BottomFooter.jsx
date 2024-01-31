import React from 'react'
import { Link } from 'react-router-dom'

const BottomFooter = () => {
    return (
        <footer className="footer">
        <div className="footer-explore">
            <h3 className="footer-explore-title">EXPLORE</h3>
            <ul className="footer-explore-list">
                <li className="footer-explore-item"><Link to='' className="footer-explore-link">About</Link></li>
                <li className="footer-explore-item"><Link to='' className="footer-explore-link">Contact</Link></li>
                <li className="footer-explore-item"><Link to='' className="footer-explore-link">Shipping</Link></li>
                <li className="footer-explore-item"><Link to='' className="footer-explore-link">FAQs</Link></li>
                <li className="footer-explore-item pb-3"><Link to='' className="footer-explore-link">Terms of Service</Link></li>
            </ul>
        </div>
    
        <div className="footer-copyright">
            <p className="footer-copyright-text">@2024 ASHLUXE •</p>
        </div>
    </footer>
    )
}

export default BottomFooter