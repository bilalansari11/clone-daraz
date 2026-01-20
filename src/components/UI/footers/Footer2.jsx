import './Footer2.css';
import Cash from '../../../assets/cash.png';
import Visa from '../../../assets/visa.png';
import Master from '../../../assets/master.png';
import EasyPaisa from '../../../assets/easy.png';
import DarazWallet from '../../../assets/daraz-wallet.png';
import JazzCash from '../../../assets/jazz.png';
import UnionPay from '../../../assets/union-pay.png';
import Hbl from '../../../assets/hbl.png';
import Installment from '../../../assets/installment.png';
import Verified from '../../../assets/verified.png';



function Footer2() {
    return (
        <>
            <div className='footer-2 flex gap-12'>
                <div>
                    <h4 className='mb-4'>Payment Methods</h4>
                    <div className='grid grid-rows-2 grid-cols-6 gap-1'>
                        <img className='w-12 h-8' src={Cash} alt="logo" />
                        <img className='w-12 h-8' src={Visa} alt="logo" />
                        <img className='w-12 h-8' src={Master} alt="logo" />
                        <img className='w-12 h-8' src={EasyPaisa} alt="logo" />
                        <img className='w-12 h-8' src={DarazWallet} alt="logo" />
                        <img className='w-12 h-8' src={JazzCash} alt="logo" />
                        <img className='w-12 h-8' src={UnionPay} alt="logo" />
                        <img className='w-12 h-8' src={Hbl} alt="logo" />
                        <img className='w-12 h-8' src={Installment} alt="logo" />
                    </div>
                </div>
                <div>
                    <h4 className='mb-4'>Verified by</h4>
                    <img src={Verified} alt="logo" />
                </div>
            </div>
        </>
    )
}

export default Footer2;