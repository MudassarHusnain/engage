import Image from 'next/image';
import React, { useState } from 'react';
import man from '@/public/images/avatar.svg'
import CircularProgressBar from '../PercentageProgressBar';
import MinProgressBar from '../MinProgressBar';
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import MyResponsiveFunnel from '../Funnel';
import { Data, DropDown } from '@/types/dropdown';
import Dropdown from './Dropdown';
import LinearProgressBar from './ProgressBar';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { BiCalendarCheck } from "react-icons/bi";
import checkbadge from '@/public/images/Checkbadge.svg'
import calendar from '@/public/images/Tabs.svg'
import blueDot from "@/public/images/blueDot.svg"
import yellowDot from "@/public/images/yellowDot.svg"
import redDot from "@/public/images/redDot.svg"
import w1 from "@/public/images/w1.svg"
import w2 from "@/public/images/w2.svg"
import w3 from "@/public/images/w3.svg"
import a1 from "@/public/images/a1.svg";
import a2 from "@/public/images/a2.svg";
import manIcon from "@/public/images/manIcon.svg"
import date from "@/public/images/date.svg"
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
];


interface Activity {
    logo: string;
    title: string;
    description: string;
    user: string;
    contact?: string;
    fullDate?: string;
    date: string;
    relativeTime: string;
    stage?: string;
    inlineData?: boolean;
}

const activities: Activity[] = [
    {
        logo: a1,
        title: "Viewing booked for your listing",
        description: "There is a new lead reassigned to you due to unmet SLA. Please tap to see more information.",
        user: "Courtney Henry",
        contact: "+971 2311 3221",
        date: "Friday, 9:30 am",
        relativeTime: "Yesterday",
        inlineData: true,
    },
    {
        logo: a2,
        title: "Viewing booked for your listing",
        description: "There is a new lead reassigned to you due to unmet SLA. Please tap to see more information.",
        user: "Courtney Henry",
        contact: "+971 2311 3221",
        date: "Friday, 9:30 am",
        relativeTime: "Yesterday",
        stage: "Qualified",
    },
    {
        logo: a1,
        title: "Viewing booked for your listing",
        description: "There is a new lead reassigned to you due to unmet SLA. Please tap to see more information.",
        user: "Courtney Henry",
        fullDate: "December 15,2023 - 6:00 PM",
        date: "Friday, 9:30 am",
        relativeTime: "Yesterday",
    },
    {
        logo: a1,
        title: "Viewing booked for your listing",
        description: "There is a new lead reassigned to you due to unmet SLA. Please tap to see more information.",
        user: "Courtney Henry",
        fullDate: "December 15,2023 - 6:00 PM",
        date: "Friday, 9:30 am",
        relativeTime: "Yesterday",
    },
    {
        logo: a1,
        title: "Viewing booked for your listing",
        description: "There is a new lead reassigned to you due to unmet SLA. Please tap to see more information.",
        user: "Courtney Henry",
        contact: "+971 2311 3221",
        date: "Friday, 9:30 am",
        relativeTime: "Yesterday",
    },
];

const calculateColor = (slaTime: any) => {
    const currentTime: any = new Date();
    const [slaHours, slaMinutes] = slaTime.split(":").map(Number);

    const slaDate: any = new Date();
    slaDate.setHours(slaHours, slaMinutes, 0, 0);

    const timeDifference = (currentTime - slaDate) / (1000 * 60 * 60);

    if (timeDifference < 4) {
        return blueDot;
    } else if (timeDifference >= 4 && timeDifference < 8) {
        return yellowDot;
    } else {
        return redDot;
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
            score: 32,
            progresscolor: 'blue',
            nonProgressColor: '#EAECF6',
        },
        {
            id: "Qualified",
            score: 20,
            progresscolor: '#B0C6F8',
            nonProgressColor: 'white',
        },
        {
            id: "Viewing",
            score: 12,
            progresscolor: '#B0C6F8',
            nonProgressColor: 'white',
        },
        {
            id: "Offer",
            score: 8,
            progresscolor: '#B0C6F8',
            nonProgressColor: 'white',
        },
        {
            id: "Reserves",
            score: 5,
            progresscolor: '#E9EAED',
            nonProgressColor: 'white',
        },
        {
            id: "Deals",
            score: 10,
            progresscolor: '#E9EAED',
            nonProgressColor: 'white',
        },
    ]);
    const today = new Date();
    const [startDate, setStartDate] = useState<Date | null>(today);
    const [endDate, setEndDate] = useState<Date | null>(today);

    const handlePresetRange = (range: string) => {
        const newStartDate = new Date(today);
        const newEndDate = new Date(today);

        switch (range) {
            case "thisMonth":
                newStartDate.setDate(1);
                newEndDate.setMonth(today.getMonth() + 1);
                newEndDate.setDate(0);
                break;
            case "3M":
                newStartDate.setMonth(today.getMonth() - 3);
                newEndDate.setDate(today.getDate());
                break;
            case "6M":
                newStartDate.setMonth(today.getMonth() - 6);
                newEndDate.setDate(today.getDate());
                break;
            case "1Y":
                newStartDate.setFullYear(today.getFullYear() - 1);
                newEndDate.setDate(today.getDate());
                break;
            default:
                break;
        }

        setStartDate(newStartDate);
        setEndDate(newEndDate);
    };

    return (
        <div className='w-full h-[943px] mt-8 px-[72px] overflow-hidden pb-3'>
            <div className='flex flex-row justify-between items-start gap-[14px] h-full max-[780px]:flex-col '>
                <div className='flex-col w-1/4 gap-[12px] h-full hidden md:flex'>
                    {/* Profile Section */}
                    <div className='flex flex-col gap-2 h-full border-[1px] rounded p-4'>
                        <div className=''>
                            <h5 className='w-full font-bold text-[14px]'>
                                My Profile
                            </h5>
                        </div>
                        <div className='flex flex-row w-full h-full gap-3'>
                            <div>
                                <Image src={man} alt='picture' className='rounded-sm' width={54} height={54} />
                            </div>
                            <div className='flex flex-col text-[14px] font-medium leading-[21px]'>
                                <div>
                                    Liam Dawett
                                </div>
                                <div className='flex flex-row gap-1 font-thin' style={{ backgroundColor: '#F8F9FC' }}>
                                    <div>
                                        <Image src={checkbadge} className='text-blue-500 text-[14px] mt-0.5' alt='checkbadge' />
                                    </div>
                                    <div className=''>
                                        <span className='text-[12px] font-bold'>4.5 </span><span className='text-engageColor px-1 py-1 text-[12px]'>(21)  | EngageHero</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 text-[12px]'>
                            <div>
                                <span className='text-textColor'>Branch: </span>Business bay
                            </div>
                            <div>
                                <span className='text-textColor'>RERA No: </span>CN-1062603
                            </div>
                            <div>
                                <span className='text-textColor'>AOS: </span>Downtown Dubai,Old Town Marina
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

                    <div className='flex flex-col gap-4 h-full border-[1px] rounded p-4'>
                        <div className='flex flex-row justify-between'>
                            <h5 className='w-full font-bold text-[14px]'>
                                My Performance
                            </h5>
                            <div className="" onClick={openModal}>
                                <Image src={calendar} alt='calendar' />
                            </div>
                        </div>
                        <div className={`relative ${isModalOpen ? 'block-line' : 'hidden'} w-[600px]`}>
                            {isModalOpen && (
                                <div
                                    className="absolute inset-0 bg-opacity-50 transition-opacity duration-300 justify-start"
                                    style={{ zIndex: 50 }}
                                >
                                    <div
                                        className="bg-white px-3 py-2 rounded-lg shadow-lg w-[264px] h-[94px]"
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            opacity: isModalOpen ? 1 : 0,
                                            transition: 'opacity 0.3s ease-in-out',
                                        }}
                                    >
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
                                                    popperPlacement="bottom-start"
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
                                                    popperPlacement="bottom-start"
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
                                                    popperPlacement="bottom-start"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='flex flex-row justify-between gap-3 '>
                            <div className='bg-performanceColor flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>12</div>
                                <div className='text-[10px]'>Number of calls</div>
                            </div>
                            <div className='bg-performanceColor flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>24</div>
                                <div className='text-[10px]'>Viewings done</div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between gap-3'>
                            <div className='bg-performanceColor flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>12.4 <span className='font-normal text-sm'>M</span></div>
                                <div className='text-[10px]'>Total Deals Value (AED)</div>
                            </div>
                            <div className='bg-performanceColor flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>32</div>
                                <div className='text-[10px]'>Total Leads</div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between gap-3'>
                            <div className='bg-performanceColor flex flex-col justify-between items-center w-full py-3 rounded'>
                                <div className='text-[18px] font-bold '>12</div>
                                <div className='text-[10px]'>Total Enquires</div>
                            </div>
                            <div className='bg-performanceColor flex flex-col justify-between items-center w-full py-3 rounded relative'>
                                <div className='text-[18px] font-bold '><span className='text-rankeColor text-[10px] font-normal top-[3px] absolute left-[4px] bg-rankeBg rounded p-[2px]'>Rank 2</span> 8 <span className='text-rankeColor font-normal text-[8px] relative top-[-5px]'>+1</span></div>
                                <div className='text-[10px]'>Closed Deals</div>
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] rounded flex flex-col justify-between gap-2 h-full px-4 py-4'>
                        <div className="">
                            <div className='font-bold text-[14px]'>My Funnel <span className='font-normal text-[12px] text-textColor'> | All time</span> </div>
                            <div className='flex flex-col justify-between gap-1'>
                                <div className='text-totalLeadColor py-[6px]'>
                                    Total received leads
                                </div>
                                <div className=' w-full h-[185px]'>
                                    <MyResponsiveFunnel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded w-2/4 flex-col justify-between gap-4 py-2 h-full hidden md:flex'>
                    <div className='flex flex-row justify-between gap-5 items-center px-4 py-2'>
                        <div className='font-bold text-[14px]'>My Leads <span className='font-normal text-[12px] text-textColor'> | Lead Statistics</span> </div>
                        <div>
                            <Dropdown data={clientOnly} dropdown={dropdowns[0]} />
                        </div>
                    </div>
                    <div className='flex flex-col w-full justify-between gap-2 px-4'>
                        {
                            leadStatistics.map((leadstatistic, index) =>
                            <div key={index}> 
                                <LinearProgressBar progress={leadstatistic.score} progresscolor={leadstatistic.progresscolor} nonProgressColor={leadstatistic.nonProgressColor} title={leadstatistic.id}/>
                                </div>
                            )
                        }
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
                                    <div className="flex text-left gap-4 text-[12px] text-textColor w-5/6">
                                        <div className="w-1/5 px-[6px] py-[8px] font-normal">Stage</div>
                                        <div className="w-1/5 px-[6px] py-[8px] font-normal">Name</div>
                                        <div className="w-1/5 py-px-[6px] py-[8px] font-normal">Mobile</div>
                                        <div className="w-1/5 px-[6px] py-[8px] font-normal">Location</div>
                                        <div className="w-1/5 px-[6px] py-[8px] font-normal">Beds</div>
                                    </div>
                                    <div className="w-1/6 px-[6px] py-[8px]"></div>
                                </div>


                                {/* Data Rows */}
                                {records.map((record, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-row justify-between hover:bg-hoverTableRecord hover:rounded hover:font-bold group"
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
                                                    <Image src={w1} alt='whatsapp message' className='h-8 w-8 px-1' />
                                                    <Image src={w2} alt='call' className='h-8 w-8 px-1' />
                                                    <Image src={w3} alt='whatsapp' className='h-8 w-8 px-1' />
                                                </div>
                                            </div>
                                            <div className={`w-1/5 px-[6px] py-[8px] ${record.name === 'WhatsApp User' ? 'group-hover:hidden' : 'flex'}`}>{record.beds}</div>

                                        </div>

                                        {/* SLA and Button Section */}
                                        <div className="w-1/6 px-[6px] py-[8px] relative">
                                            {/* SLA container */}
                                            {record.name === 'WhatsApp User' ?
                                                (<div className={`flex flex-row justify-between ${record.name === 'WhatsApp User' ? 'group-hover:hidden' : 'flex'}`}>
                                                    <Image src={w1} alt='whatsapp message' className='h-8 w-8 px-1' />
                                                    <Image src={w2} alt='call' className='h-8 w-8 px-1' />
                                                    <Image src={w3} alt='whatsapp' className='h-8 w-8 px-1' />
                                                </div>) :
                                                (<div className="w-[97px] h-[30px] border rounded px-[7px] py-[4px] flex justify-between items-center group-hover:hidden">
                                                    <span className="text-textColor w-[30px]">SLA: </span>
                                                    <span className="font-bold w-[40px]"> {record.sla}</span>
                                                    <span className="w-[20px]">
                                                        <Image src={calculateColor(record.sla)} width={10} height={10} alt='blueDot' className='mx-1.5' />
                                                    </span>
                                                </div>
                                                )
                                            }
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
                <div className='border rounded flex flex-col justify-between gap-2 h-full w-1/4 px-4 pt-4 pb-2 max-[640px]:w-full  overflow-hidden'>
                    <div className=''>
                        <h5 className='w-full font-bold text-[14px]'>
                            Activities
                        </h5>
                    </div>
                    <div className="container mx-auto grid grid-cols-1 gap-4">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between gap-2 h-full w-full pt-4 pb-2"
                            >
                                {/* Details Section */}
                                <div className="flex flex-col justify-between gap-[10px]">
                                    <div className="flex flex-row justify-start items-center gap-[6px] h-[18px]">
                                        <div>
                                            <Image src={activity.logo} alt='activity logo' /></div>
                                        <div className="text-[12px] font-bold">{activity.title}</div>
                                    </div>
                                    <div className="flex text-[10px]">{activity.description}</div>

                                    {/* Dynamic Data Section */}
                                    {activity.inlineData ? (
                                        <div className="flex flex-row justify-start text-[12px] gap-[8px] bg-lightGray p-2 rounded">
                                            <Image src={manIcon} alt='man Icon' className=" text-HiIconColor" />
                                            <div>{activity.user}</div>
                                            <div>|</div>
                                            <div>{activity.contact}</div>
                                        </div>
                                    ) : activity.stage ? (
                                        <div className="flex flex-col justify-start text-[12px] gap-[8px] bg-lightGray p-2 rounded">
                                            <div className="flex flex-row justify-start gap-2">
                                                <Image src={manIcon} alt='man Icon' className=" text-HiIconColor" />
                                                {activity.user}
                                            </div>
                                            <div className="flex ps-5 text-gray-700">Stage: {activity.stage}</div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col justify-start text-[12px] gap-[8px] bg-lightGray p-2 rounded">
                                            <div className="flex flex-row justify-start gap-2">
                                                <Image src={manIcon} alt='man Icon' className=" text-HiIconColor" />
                                                {activity.user}
                                            </div>
                                            <div className="flex flex-row justify-start gap-2">
                                                <Image src={date} alt='dateIcon' className=" text-gray-500" />
                                                {activity.contact} {activity.fullDate}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-row justify-between text-[10px] text-gray-500">
                                        <div>{activity.date}</div>
                                        <div>{activity.relativeTime}</div>
                                    </div>
                                    <div className="border-[1px] border-gray-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeroSection;