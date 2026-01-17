import './Footer1.css'
import appLogo from '../../../assets/logo1.png'
import appStore from '../../../assets/app-store.png'
import playStore from '../../../assets/play-store.png'
import appGallery from '../../../assets/app-gallery.png'

function Footer1() {
    return (
        <>
            <div className='footer1'>
                <div className='flex'>
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
                </div>
                <div>
                    <div className='flex'>
                        <img src={appLogo} alt="app-logo" />
                        <div>
                            <h3 className='text-[#f85606]'>Happy Shopping</h3>
                            <p className='text-sm text-[#0f136d]'>Download App</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={appStore} alt="app-store" />
                            <img src={playStore} alt="app-store" />
                            <img src={appGallery} alt="app-store" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer1;