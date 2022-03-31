import React from 'react'

const Footer = () => {

    const footerDate = new Date().getFullYear()

    return (
        <footer className="footer footer-center px-4 text-[#fafafa]">
            <div>
                <p>Copyright © {footerDate} - All right reserved by A-V</p>
            </div>
        </footer>

    )
}

export default Footer