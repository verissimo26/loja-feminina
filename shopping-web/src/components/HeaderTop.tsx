import React from 'react'
import { BsFacebook, BsLinkedin, } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

const HeaderTop = () => {
    return (
        <div className='border-b border-gray-200 hidden sm:block'>
            <div className='container py-4'>
                <div className='flex justify-between items-center'>
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <BsFacebook />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaXTwitter />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <AiFillInstagram />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsLinkedin />
                        </div>
                    </div>
                    <div className='text-gray-500 text-[12px]'>
                        <b>ENTREGA GRÁTIS</b> ESSA SEMANA PEDIDOS ACIMA DE R$ 100,00
                    </div>
                    <div className='text-gray-500 text-[12px] font-semibold'>
                        <h1>IgorDEV</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop