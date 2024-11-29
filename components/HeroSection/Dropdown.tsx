import React, { useState, useRef, useEffect } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Data } from '@/types/dropdown';
import { DropDown } from '@/types/dropdown';
import newest from "@/public/images/newest.svg"
import Image from 'next/image';
function Dropdown({ data , dropdown }: { data: Data[], dropdown: DropDown }) {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleRadioChange = (itemName: string) => {
        setSelectedItem(itemName);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    console.log(selectedItem)
    return (
        <div ref={dropdownRef} className="relative text-left text-[12px]">
            <button
                onClick={toggleDropdown}
                className={`inline-flex w-full items-center text-[12px] border rounded px-2 py-1.5 ${dropdown.name==="Client Only" && ('font-bold')} `}
            >
                {dropdown.name==="Newest"? (
                  <Image src={newest} alt="Newest" width={13} height={13} />
                ): ""
            }
                {dropdown.name}
                <RiArrowDropDownLine aria-hidden="true" className=" size-6 ps-1 rounded-lg" />
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5 text-[12px] w-[157px] h-[108px] gap-2">
                    <div className="py-1">
                        {data.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 p-2 text-[12px]">
                                <input
                                    type="radio"
                                    id={`radio-${item.name}`}
                                    name="client" 
                                    checked={selectedItem === item.name}
                                    onChange={() => handleRadioChange(item.name)}
                                    className="h-4 w-4 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 text-[12px]"
                                />
                                <label htmlFor={`radio-${item.name}`} className=" text-gray-700 text-[12px]">
                                    {item.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;