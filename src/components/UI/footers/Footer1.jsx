import './Footer1.css'
import appLogo from '../../../assets/logo1.png'

function Footer1() {
    return (
        <>
            <div className='footer1'>
                <div className='border'>
                    <h4>Customer Care</h4>
                    <ul>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Returns & Refunds</li>
                        <li>Daraz Shop</li>
                        <li>Contact Us</li>
                        <li>Purchase Protection</li>
                        <li>Daraz Pick up Points</li>
                    </ul>
                </div>
                <div className='border'>
                    <h4>Daraz</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Digital Payments</li>
                        <li>Daraz Donates</li>
                        <li>Daraz Blog</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>NTN Number : 4012118-6</li>
                        <li>STRN Number : 1700401211818</li>
                        <li>Online Shopping App</li>
                        <li>Online Grocery Shopping</li>
                        <li>Daraz Exclusive</li>
                        <li>Daraz University</li>
                        <li>Sell on Daraz</li>
                        <li>Join Daraz Affiliate Program</li>
                    </ul>
                </div>
                <div>
                    <div className='flex'>
                        <img src={appLogo} alt="app-logo" />
                        <div>
                            <h4>Happy Shpping</h4>
                            <p>Download App</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer1;