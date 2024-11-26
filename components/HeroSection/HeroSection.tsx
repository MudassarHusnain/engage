import Image from 'next/image';
import React, { useState } from 'react';
import man from '@/public/images/man.jpeg';
import { FaStar } from "react-icons/fa";
import CircularProgressBar from '../PercentageProgressBar';
import MinProgressBar from '../MinProgressBar';
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css"; // Import styles for react-datepicker
import ReactDatePicker from "react-datepicker";
import MyResponsiveFunnel from '../Funnel';
import { Data } from '@/types/dropdown';
import Dropdown from './Dropdown';
import MyResponsiveBullet from './LeadStatistics';
import LinearProgressBar from './ProgressBar';
function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(!isModalOpen);  // Open modal
    const [clientOnly, setClientOnly] = useState<Data[]>([{ name: 'Client Only' }, { name: 'External Agents' }, { name: 'All' }])
    const [leadStatistics , setLeadStatistics] = useState( [
        {
          id: "New",
          ranges: [44],
        },
        {
          id: "power",
          ranges: [2],
        },
        {
          id: "volume",
          ranges: [3],
        },
        {
          id: "cost",
          ranges: [368780],
        },
        {
          id: "revenue",
          ranges: [10],
        },
      ])
    const today = new Date();
    const [startDate, setStartDate] = useState<Date | null>(today);
    const [endDate, setEndDate] = useState<Date | null>(today);

    // Set the date range based on selected period (This Month, 3M, 6M, 1Y)
    const handlePresetRange = (range: string) => {
        const newStartDate = new Date(today);
        const newEndDate = new Date(today);

        switch (range) {
            case "thisMonth":
                newStartDate.setDate(1); // Start of the current month
                newEndDate.setMonth(today.getMonth() + 1); // Go to the next month
                newEndDate.setDate(0); // Set the last day of the current month
                break;
            case "3M":
                newStartDate.setMonth(today.getMonth() - 3); // 3 months ago
                newEndDate.setDate(today.getDate());
                break;
            case "6M":
                newStartDate.setMonth(today.getMonth() - 6); // 6 months ago
                newEndDate.setDate(today.getDate());
                break;
            case "1Y":
                newStartDate.setFullYear(today.getFullYear() - 1); // 1 year ago
                newEndDate.setDate(today.getDate());
                break;
            default:
                break;
        }

        setStartDate(newStartDate);
        setEndDate(newEndDate);
    };

    return (
        <div className='w-full h-[943px] mt-8 px-[72px]'>
            <div className='flex flex-row justify-between items-start gap-[14px]'>
                <div className='flex flex-col w-full sm:w-1/3 lg:w-1/4 gap-[12px]'>
                    {/* Profile Section */}
                    <div className='flex flex-col gap-4 h-full shadow p-4'>
                        <div className=''>
                            <h5 className='w-full font-bold text-[14px]'>
                                My Profile
                            </h5>
                        </div>
                        <div className='flex flex-row w-full gap-3'>
                            <div>
                                <Image src={man} alt='picture' className='rounded-sm' width={54} height={54} />
                            </div>
                            <div className='flex flex-col text-[14px]'>
                                <div>
                                    Liam Dawett
                                </div>
                                <div className='flex flex-row gap-1 font-thin' style={{backgroundColor: '#F8F9FC'}}>
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
                                <span className='text-gray-400'>Branch: </span>Business bay
                            </div>
                            <div>
                                <span className='text-gray-400'>RERA No: </span>CN-1062603
                            </div>
                            <div>
                                <span className='text-gray-400'>AOS: </span>Downtown Dubai,Old Town Marina
                            </div>
                        </div>
                        <hr />
                        <div className='flex flex-row justify-between px-[20px] w-[275px]'>
                            <div className=''>
                                <MinProgressBar minutes={5} />
                            </div>
                            <div className=''>
                                <CircularProgressBar progress={65} />
                            </div>
                        </div>
                    </div>

                    {/* Performance Section */}
                    <div className='flex flex-col gap-4 h-full shadow p-4'>
                        <div className='flex flex-row justify-between'>
                            <h5 className='w-full font-bold text-[14px]'>
                                My Performance
                            </h5>
                            <div className="shadow p-1.5 cursor-pointer" onClick={openModal}>
                                <FaRegCalendarAlt />
                            </div>
                        </div>
                        <div className={`relative ${isModalOpen ? 'block-line' : 'hidden'} w-[600px]`}>
                            {isModalOpen && (
                                <div
                                    className="absolute inset-0 bg-opacity-50 transition-opacity duration-300 justify-start"
                                    style={{ zIndex: 50 }} // Ensure it's above other content
                                >
                                    <div
                                        className="bg-white px-3 py-2 rounded-lg shadow-lg w-[264px] h-[94px]"
                                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                                        style={{
                                            opacity: isModalOpen ? 1 : 0,
                                            transition: 'opacity 0.3s ease-in-out',
                                        }}
                                    >
                                        {/* Date Range Preset Buttons */}
                                        <div className="flex flex-row gap-1">
                                            <button
                                                className="w-[83px] text-sm shadow"
                                                onClick={() => handlePresetRange("thisMonth")}
                                            >
                                                This Month
                                            </button>
                                            <button
                                                className="w-[48px] py-2 text-sm shadow"
                                                onClick={() => handlePresetRange("3M")}
                                            >
                                                3 M
                                            </button>
                                            <button
                                                className="w-[48px] py-2 text-sm  shadow"
                                                onClick={() => handlePresetRange("6M")}
                                            >
                                                6 M
                                            </button>
                                            <button
                                                className="w-[48px] py-2 text-sm shadow border-1"
                                                onClick={() => handlePresetRange("1Y")}
                                            >
                                                1 Y
                                            </button>
                                        </div>

                                        {/* Date Range Picker (Using react-datepicker) */}
                                        <div className="mt-4">
                                            <div className="flex flex-row justify-between items-center">
                                                <span className="mx-1">From</span>
                                                <ReactDatePicker
                                                    selected={startDate}
                                                    onChange={(date: Date) => setStartDate(date)}
                                                    selectsStart
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    dateFormat="MM/yy"
                                                    className="p-1 w-16"
                                                    monthsShown={2}
                                                    popperPlacement="bottom-start" // Ensure it opens to the right side
                                                />
                                                <span className="mx-1">to</span>
                                                <ReactDatePicker
                                                    selected={endDate}
                                                    onChange={(date: Date) => setEndDate(date)}
                                                    selectsEnd
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    minDate={startDate}
                                                    dateFormat="MM/yy"
                                                    className="p-1 w-16"
                                                    placeholderText=""
                                                    monthsShown={2}
                                                    popperPlacement="bottom-start" // Ensure it opens to the right side
                                                />
                                                {/* <FaRegCalendarAlt /> */}
                                                <ReactDatePicker
                                                    selected={endDate}
                                                    onChange={(date: Date) => setEndDate(date)}
                                                    selectsEnd
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    minDate={startDate}
                                                    dateFormat="MM/yyyy"
                                                    className="p-1 w-12"
                                                    customInput={<FaRegCalendarAlt className='w-6 h-6' />}
                                                    monthsShown={2}
                                                    popperPlacement="bottom-start" // Ensure it opens to the right side
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='flex flex-row justify-between gap-3 '>
                            <div className='bg-blue-50 flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>12</div>
                                <div className='text-[10px]'>Number of calls</div>
                            </div>
                            <div className='bg-blue-50 flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>24</div>
                                <div className='text-[10px]'>Viewings done</div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between gap-3'>
                            <div className='bg-blue-50 flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>12.4 <span className='font-normal text-sm'>M</span></div>
                                <div className='text-[10px]'>Total Deals Value (AED)</div>
                            </div>
                            <div className='bg-blue-50 flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>32</div>
                                <div className='text-[10px]'>Total Leads</div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between gap-3'>
                            <div className='bg-blue-50 flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>12</div>
                                <div className='text-[10px]'>Total Enquires</div>
                            </div>
                            <div className='bg-blue-50 flex flex-col justify-between items-center w-full py-3 rounded relative'>
                                <div className='text-[18px] font-bold '><span className='text-blue-400 text-[10px] font-normal top-[3px] absolute left-[4px] bg-blue-200 rounded p-[2px]'>Rank 2</span> 8 <span className='text-blue-400 font-normal text-[10px] relative top-[-5px]'>+1</span></div>
                                <div className='text-[10px]'>Closed Deals</div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow flex flex-col justify-between gap-2 h-[286px] px-4'>
                        <div className="">
                            <div className='font-bold text-[14px]'>My Funnel <span className='font-normal text-[12px] text-gray-300'> | All time</span> </div>
                            <div className='flex flex-col justify-between gap-1'>
                                <div className='text-blue-500'>
                                    Total received leads
                                </div>
                                <div className=' w-full h-[185px]'>
                                    <MyResponsiveFunnel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shadow w-full sm:w-2/3 lg:w-3/4 flex flex-col justify-between gap-4 py-2'>
                        <div className='flex flex-row justify-between gap-5 items-center px-4 py-2'>
                            <div className='font-bold text-[14px]'>My Leads <span className='font-normal text-[12px] text-gray-300'> | Lead Statistics</span> </div>
                            <div>
                                <Dropdown data={clientOnly}/>
                            </div>
                        </div>
                        <div className='flex flex-col w-full justify-between gap-2 px-4'>
                            <LinearProgressBar progress={32} progresscolor='blue' title='New' />
                            <LinearProgressBar progress={20} progresscolor='#B0C6F8' nonProgressColor='white' title='Qualified' />
                            <LinearProgressBar progress={12} progresscolor='#B0C6F8' nonProgressColor='white' title='Viewing' />
                            <LinearProgressBar progress={8} progresscolor='#B0C6F8' nonProgressColor='white' title='Offer' />
                            <LinearProgressBar progress={5} progresscolor='#E9EAED' nonProgressColor='white' title='Reserves'/>
                            <LinearProgressBar progress={10} progresscolor='#E9EAED' nonProgressColor='white' title='Deals'/>
                        </div>
                </div>
                <div className='shadow h-full w-1/3'>
                    {/* Empty section, can be used for additional content */}
                    abc
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
