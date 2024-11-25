import Image from 'next/image';
import React, { useState } from 'react';
import man from '@/public/images/man.jpeg';
import { FaStar } from "react-icons/fa";
import CircularProgressBar from '../PercentageProgressBar';
import MinProgressBar from '../MinProgressBar';
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css"; // Import styles for react-datepicker
import ReactDatePicker from "react-datepicker";
import { FunnelChart } from 'react-funnel-pipeline'
import 'react-funnel-pipeline/dist/index.css'
function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(!isModalOpen);  // Open modal

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
                <div className='flex flex-col h-full w-[307px] gap-[12px]'>
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
                                                    dateFormat="dd"
                                                    className="p-1 w-12"
                                                    placeholderText="--"
                                                    monthsShown={4}
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
                                                    dateFormat="dd"
                                                    className="p-1 w-12"
                                                    placeholderText="--"
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
                                                    dateFormat="dd"
                                                    className="p-1 w-12"
                                                    customInput={<FaRegCalendarAlt className='w-7 h-7' />}
                                                    monthsShown={2}
                                                    popperPlacement="bottom-start" // Ensure it opens to the right side
                                                />
                                            </div>
                                        </div>

                                        {/* Date Range Display */}
                                        {/* <div className="mt-4">
                                            <p className="text-sm">
                                                {startDate && endDate
                                                    ? `${startDate.getDate()} to ${endDate.getDate()}`
                                                    : "Select a date range"}
                                            </p>
                                        </div> */}
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
                    <div className='shadow flex flex-col'>
                        <div className="">
                           <div>My Funnel </div>
                        </div>
                        <div>
                        <FunnelChart
                            data={[
                                { name: 'Awareness', value: 252 },
                                { name: 'Interest', value: 105 },
                                { name: 'Consideration', value: 84 },
                                { name: 'Evaluation', value: 72 },
                                { name: 'Commitment', value: 19 },
                                { name: 'Pre-sale', value: 0 },
                                { name: 'Sale', value: 10 }
                            ]}
                        />
                        </div>
                    </div>
                </div>
                <div className='shadow h-full w-[653px]'>
                    {/* Empty section, can be used for additional content */}
                </div>
                <div className='shadow h-full w-[305px]'>
                    {/* Empty section, can be used for additional content */}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
