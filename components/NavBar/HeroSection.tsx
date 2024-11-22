import Image from 'next/image'
import React from 'react'
import man from '@/public/images/man.jpeg';
import { FaStar } from "react-icons/fa";
import CircularProgressBar from '../PercentageProgressBar';
import MinProgressBar from '../MinProgressBar';

function HeroSection() {
    return (
        <div className=' w-full h-[943px] mt-8 px-[72px]'>
            <div className='flex flex-row justify-between items-start gap-[14px]'>
                <div className='flex flex-col h-full w-[307px] gap-[12px] shadow'>
                    <div className='flex flex-col gap-4 h-full shadow p-4'>
                        <div className=''>
                            <h5 className='w-full font-bold text-[14px]'>
                                My Profile
                            </h5>
                        </div>
                        <div className='flex flex-row w-full gap-2'>
                            <div>
                                <Image src={man} alt='picture' className='rounded-sm' width={54} height={54} />
                            </div>
                            <div className='flex flex-col text-[14px]'>
                                <div>
                                    Liam Dawett
                                </div>
                                <div className='flex flex-row gap-1 font-thin'>
                                    <div>
                                        <FaStar className='text-blue-500 text-[14px] mt-0.5' />
                                    </div>
                                    <div className=''>
                                        <span className='text-[12px] font-bold'>4.5 </span><span className='text-blue-500 px-1 py-1 text-[12px]'>(21)  | EngageHero</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 text-[12px]'>
                            <div>
                                <span className='text-stone-300'>Branch: </span>Business bay
                            </div>
                            <div>
                                <span className='text-stone-300'>RERA No: </span>CN-1062603
                            </div>
                            <div>
                                <span className='text-stone-300'>AOS: </span>Downtown Dubai,Old Town Marina
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row justify-start px-[20px] gap-10'>
                            <div className='self-start'>
                            <MinProgressBar minutes={55}/>
                            </div>
                            <div className='self-start'>
                            <CircularProgressBar progress={65}/>
                            </div>
                        </div>
                    </div>
                    <div className='shadow h-full'>b</div>
                    <div className='shadow h-full'>c</div>

                </div>
                <div className='shadow h-full w-[653px]'>

                </div>
                <div className='shadow h-full w-[305px]'>

                </div>
            </div>
        </div>
    )
}

export default HeroSection