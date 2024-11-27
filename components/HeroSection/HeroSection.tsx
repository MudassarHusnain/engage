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
import { Data, DropDown } from '@/types/dropdown';
import Dropdown from './Dropdown';
import MyResponsiveBullet from './LeadStatistics';
import LinearProgressBar from './ProgressBar';
import { IoIosSearch } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BiMessageSquareCheck } from "react-icons/bi";

const records = [
    { stage: "New", name: "Ahmed Hassan", mobile: "+971 50 1234567", location: "Downtown", beds: "Studio", sla: "23:30" },
    { stage: "New", name: "Fatima Saeed", mobile: "+971 55 9876543", location: "Business Bay", beds: "1", sla: "18:35" },
    { stage: "New", name: "WhatsApp User", mobile: "+971 56 2345678", location: "Old Town", beds: "2", sla: "0" },
    { stage: "New", name: "Sara Ali", mobile: "+971 58 3456789", location: "Dubai Marina", beds: "3", sla: "20:00" },
    { stage: "New", name: "Omar Zayed", mobile: "+971 50 6789123", location: "Jumeirah Beach", beds: "Studio", sla: "16:45" },
    { stage: "New", name: "Leena Rashid", mobile: "+971 52 4567890", location: "Business Bay", beds: "1", sla: "16:45" },
    { stage: "New", name: "Rami Abdullah", mobile: "+971 55 1230987", location: "Downtown", beds: "2", sla: "14:00" },
    { stage: "New", name: "Hana Khalil", mobile: "+971 56 7890123", location: "Old Town", beds: "3", sla: "10:30" },
    { stage: "New", name: "Zaid Farooq", mobile: "+971 58 9012345", location: "Jumeirah Village", beds: "Studio", sla: "08:00" },
    { stage: "New", name: "Yasmin Tariq", mobile: "+971 50 3456789", location: "Dubai Hills", beds: "1", sla: "06:00" }
];


const calculateColor = (slaTime: any) => {
    const currentTime: any = new Date();
    const [slaHours, slaMinutes] = slaTime.split(":").map(Number);

    // Create a new Date object for the SLA time today
    const slaDate: any = new Date();
    slaDate.setHours(slaHours, slaMinutes, 0, 0);

    // Calculate the difference in hours between the SLA time and the current time
    const timeDifference = (currentTime - slaDate) / (1000 * 60 * 60); // Time difference in hours

    if (timeDifference < 4) {
        return 'blue'; // Less than 4 hours
    } else if (timeDifference >= 4 && timeDifference < 8) {
        return 'yellow'; // Between 4 and 8 hours
    } else {
        return 'red'; // More than 8 hours (or set a default color)
    }
};

function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(!isModalOpen);  // Open modal
    const [clientOnly, setClientOnly] = useState<Data[]>([{ name: 'Client Only' }, { name: 'External Agents' }, { name: 'All' }])
    const [tenants, setTenants] = useState<Data[]>([{ name: 'Client Only' }, { name: 'External Agents' }, { name: 'All' }])
    const [newest, setNewest] = useState<Data[]>([{ name: 'Newest' }, { name: 'Latest modified' }, { name: 'Shortest SLA' }])
    const [dropdowns, setDropdown] = useState<DropDown[]>([{ name: 'Client Only' }, { name: 'Tenants' }, { name: 'Newest' }]);
    const [record, setRecord] = useState(records);
    const [leadStatistics, setLeadStatistics] = useState([
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
                <div className='flex flex-col w-[307px] gap-[12px]'>
                    {/* Profile Section */}
                    <div className='flex flex-col gap-4 h-full border-[1px] rounded p-4'>
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
                                <div className='flex flex-row gap-1 font-thin' style={{ backgroundColor: '#F8F9FC' }}>
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
                    <div className='flex flex-col gap-4 h-full border-[1px] rounded p-4'>
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
                    <div className='border-[1px] rounded flex flex-col justify-between gap-2 h-[286px] px-4'>
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
                <div className='border rounded w-[653px] flex flex-col justify-between gap-4 py-2'>
                    <div className='flex flex-row justify-between gap-5 items-center px-4 py-2'>
                        <div className='font-bold text-[14px]'>My Leads <span className='font-normal text-[12px] text-gray-300'> | Lead Statistics</span> </div>
                        <div>
                            <Dropdown data={clientOnly} dropdown={dropdowns[0]} />
                        </div>
                    </div>
                    <div className='flex flex-col w-full justify-between gap-2 px-4'>
                        <LinearProgressBar progress={32} progresscolor='blue' title='New' />
                        <LinearProgressBar progress={20} progresscolor='#B0C6F8' nonProgressColor='white' title='Qualified' />
                        <LinearProgressBar progress={12} progresscolor='#B0C6F8' nonProgressColor='white' title='Viewing' />
                        <LinearProgressBar progress={8} progresscolor='#B0C6F8' nonProgressColor='white' title='Offer' />
                        <LinearProgressBar progress={5} progresscolor='#E9EAED' nonProgressColor='white' title='Reserves' />
                        <LinearProgressBar progress={10} progresscolor='#E9EAED' nonProgressColor='white' title='Deals' />
                    </div>


                    <div>
                        <div className="px-4  flex flex-col justify-between gap-4">
                            <div className="flex flex-row justify-between gap-4 py-[10px]">
                                <div className="w-2/3 relative">
                                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                        <IoIosSearch className="w-5 h-5" />
                                    </span>
                                    <input
                                        type="text"
                                        className="w-full pl-10 pr-4 py-2 text-[12px] border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Search by Name, Mobile number, Lead ID"
                                    />
                                </div>
                                <div className='w-1/3 flex flex-row justify-between gap-4'>
                                    <div>
                                        <Dropdown data={tenants} dropdown={dropdowns[1]} />
                                    </div>
                                    <div>
                                        <Dropdown data={newest} dropdown={dropdowns[2]} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2  justify-between">
                                {/* Header Row */}
                                <div className='flex flex-row justify-between'>
                                    <div className="flex text-left gap-4 text-[12px] text-gray-400 w-5/6">
                                        <div className="w-1/5 px-[6px] py-[8px] font-normal">Stage</div>
                                        <div className="w-1/5 px-[6px] py-[8px] font-normal">Name</div>
                                        <div className="w-1/5 py-px-[6px] py-[8px] font-normal">Mobile</div>
                                        <div className="w-1/5 px-[6px] py-[8px] font-normal">Location</div>
                                        <div className="w-1/5 px-[6px] py-[8px] font-normal">Beds</div>
                                    </div>
                                    <div className="w-1/6 px-[6px] py-[8px]"></div> {/* Empty space column */}
                                </div>


                                {/* Data Rows */}
                                {records.map((record, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-row justify-between hover:bg-gray-200 hover:rounded hover:font-bold group"
                                    >
                                        {/* Data Row */}
                                        <div className="flex flex-row justify-center gap-4 text-[12px] text-gray-800 w-5/6 h-[46px]">
                                            <div className="w-1/5 px-[6px] py-[8px] flex items-center gap-[2px]">
                                                <div className="border rounded px-1">
                                                    <span className="inline-block px-1">
                                                        <svg width={8} height={8}>
                                                            <rect width={8} height={8} fill="gray" rx={2} ry={2}></rect>
                                                        </svg>
                                                    </span>
                                                    {record.stage}
                                                </div>
                                            </div>
                                            <div className="w-1/5 mx-[6px] my-[8px]">{record.name}</div>
                                            <div className="w-1/5 px-[6px] py-[8px]">{record.mobile}</div>
                                            <div className="w-1/5 px-[6px] py-[8px]">{record.location}</div>
                                            <div className={`w-1/5 hidden ${record.name === 'WhatsApp User' ? 'group-hover:flex' : 'hidden'}`}>
                                                <div className=' flex flex-row justify-start py-2'>
                                                    <BiMessageSquareCheck className='h-8 w-8 px-1' />
                                                    <MdOutlinePhoneInTalk className='h-8 w-8 px-1' />
                                                    <FaWhatsappSquare className='h-8 w-8 px-1' />
                                                </div>
                                            </div>
                                            <div className={`w-1/5 px-[6px] py-[8px] ${record.name === 'WhatsApp User' ? 'group-hover:hidden' : 'flex'}`}>{record.beds}</div>

                                        </div>

                                        {/* SLA and Button Section */}
                                        <div className="w-1/6 px-[6px] py-[8px] relative">
                                            {/* SLA container */}
                                            {record.name === 'WhatsApp User' ?
                                                (<div className={`flex flex-row justify-between ${record.name === 'WhatsApp User' ? 'group-hover:hidden' : 'flex'}`}>
                                                    <BiMessageSquareCheck />
                                                    <MdOutlinePhoneInTalk />
                                                    <FaWhatsappSquare />
                                                </div>) :
                                                (<div className="w-[97px] h-[30px] border rounded px-[7px] py-[4px] flex items-center group-hover:hidden">
                                                    <span className="text-gray-300">SLA: </span>
                                                    <span className="font-bold"> {record.sla}</span>
                                                    <span>
                                                        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" className="mr-[10px]">
                                                            <circle
                                                                cx="5"
                                                                cy="5"
                                                                r="2"
                                                                fill={calculateColor(record.sla)}
                                                                className="inline-block"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>)
                                            }
                                            {/* Ok Button (Visible on hover) */}
                                            <div className="absolute right-2 top-1.5 group-hover:block hidden">
                                                {record.name === 'WhatsApp User' ?
                                                    <button className="w-20 h-8 bg-black text-white rounded">update</button> :
                                                    <button className="w-10 h-8 bg-black text-white rounded">Ok</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>


                    </div>

                </div>
                <div className='border rounded flex flex-col justify-between gap-2 h-full w-[307px] px-4 pt-4 pb-2'>
                    <div className=''>
                        <h5 className='w-full font-bold text-[14px]'>
                            Activities
                        </h5>
                    </div>
                    <div className='flex flex-col justify-between py-4 gap-[10px]'>
                        <div className='flex flex-row justify-start items-center gap-[6px] h-[18px]'>
                            <div className=''>
                                logo
                            </div>
                            <div className=' text-[12px] font-bold '>Viewing booked for your listing</div>
                        </div>
                        <div className='flex text-[10px]'>
                            There is a new lead reassigned to you due to unmet SLA. Please tap to see more information.
                        </div>
                        <div className='flex flex-row justify-start text-[12px] gap-[8px]'>
                            <div className='flex '>
                            Courtney Henry
                            </div>
                            <div className='flex '>
                                |
                            </div>
                            <div className='flex '>
                            +971 2311 3221
                            </div>
                        </div>
                        <div className='flex flex-row justify-between'></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeroSection;