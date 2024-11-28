import { FC, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import { FaRegCalendarAlt } from "react-icons/fa"; 

type CalendarRangePickerProps = {
    open: boolean;
    close: () => void;
};

const CalendarRangePicker: FC<CalendarRangePickerProps> = ({ open, close }) => {
    const today = new Date();
    const [startDate, setStartDate] = useState<Date | null>('');
    const [endDate, setEndDate] = useState<Date | null>('');

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
        <>
            {open && (
                <div
                    className="fixed inset-0 flex items-center justify-start bg-gray-800 bg-opacity-50 transition-opacity duration-300"
                    onClick={close} 
                    style={{ zIndex: 50 }} 
                >
                    <div
                        className="bg-white px-3 py-2 rounded-lg shadow-lg w-[264px] h-[94px]"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            opacity: open ? 1 : 0,
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
                                className="w-[48px] py-2 text-sm text-blue-500 hover:underline shadow"
                                onClick={() => handlePresetRange("3M")}
                            >
                                3 M
                            </button>
                            <button
                                className="w-[48px] py-2 text-sm text-blue-500 hover:underline shadow"
                                onClick={() => handlePresetRange("6M")}
                            >
                                6 M
                            </button>
                            <button
                                className="w-[48px] py-2 text-sm text-blue-500 hover:underline shadow border-1"
                                onClick={() => handlePresetRange("1Y")}
                            >
                                1 Y
                            </button>
                        </div>

                        <div className="mt-4">
                            <div className="flex flex-row flex-grow justify-between items-center">
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
                                    monthsShown={2}
                                    popperClassName=""
                                    popperPlacement="bottom-end" 
                                    popperModifiers={[
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, 10], 
                                            },
                                        },
                                    ]}
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
                                />
                                <FaRegCalendarAlt />
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-sm">
                                {startDate && endDate
                                    ? `${startDate.getDate()} to ${endDate.getDate()}`
                                    : "Select a date range"}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CalendarRangePicker;
