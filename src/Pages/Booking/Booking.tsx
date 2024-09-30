import {  useParams } from "react-router-dom";
import { FaRegCalendar } from "react-icons/fa6";
import { useGetSingleFacilityQuery } from "../../Redux/Features/facility/facility.Api";
import { useState } from "react";
import { useGetCheckAvailabilityQuery } from "../../Redux/Features/booking/booking.api";
import { RootState } from "../../Redux/store";
import { useAppSelector } from "../../Redux/hooks";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useCreateBookingMutation } from "../../Redux/Features/booking/booking.api";
import { toast } from "sonner";

type TSlot = {
  startTime: string;
  endTime: string;
  _id: string;
};

const Booking = () => {
  const { id } = useParams();
  const user = useAppSelector((state: RootState) => state.auth.userData);
  const { register, setValue, watch } = useForm();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [shouldCheckAvailability, setShouldCheckAvailability] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<TSlot[]>([]);
  const [startTimeOptions, setStartTimeOptions] = useState<string[]>([]);
  const [endTimeOptions, setEndTimeOptions] = useState<string[]>([]);
  const [payableAmount, setPayableAmount] = useState(0);
  const [createBooking, { isLoading: isCreatingBooking }] =
    useCreateBookingMutation();

  const { data, isLoading, error } = useGetSingleFacilityQuery(id);
  const facility = data?.data;

  const {
    data: slotsData,
    isLoading: slotLoading,
    error: slotError,
  } = useGetCheckAvailabilityQuery(selectedDate?.toISOString(), {
    skip: !selectedDate || !shouldCheckAvailability,
  });

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setShouldCheckAvailability(false);
  };

  const handleCheckAvailability = () => {
    if (selectedDate) {
      setShouldCheckAvailability(true);
    } else {
      alert("Please select a date.");
    }
  };

  const handleSlotChange = (slotId: string) => {
    const slot = slotsData?.data.find((slot: TSlot) => slot._id === slotId);
    if (slot) {
      setAvailableSlots([slot]);
      const startTimes = generateTimeRange(slot.startTime, slot.endTime);
      setValue("startTime", "");
      setValue("endTime", "");
      setPayableAmount(0);
      setStartTimeOptions(startTimes);
    }
  };

  const handleStartTimeChange = (startTime: string) => {
    setValue("startTime", startTime);
    const filteredEndTimes = generateTimeRange(
      startTime,
      availableSlots[0]?.endTime || "",
      true
    );
    setEndTimeOptions(filteredEndTimes);
    setValue("endTime", "");
    setPayableAmount(0);
  };

  const handleEndTimeChange = (endTime: string) => {
    setValue("endTime", endTime);
    const startTime = watch("startTime");
    if (startTime && endTime) {
      const startHour = parseInt(startTime.split(":")[0]);
      const endHour = parseInt(endTime.split(":")[0]);
      const duration = endHour - startHour;

      setPayableAmount(duration * facility?.pricePerHour);
    }
  };

  const generateTimeRange = (
    start: string,
    end: string,
    addOneHourGap = false
  ) => {
    const times = [];
    let current = parseInt(start.replace(":", ""));
    const endTime = parseInt(end.replace(":", ""));
    if (addOneHourGap) {
      current += 100;
    }

    while (current <= endTime) {
      const hours = Math.floor(current / 100)
        .toString()
        .padStart(2, "0");
      const minutes = (current % 100).toString().padStart(2, "0");
      times.push(`${hours}:${minutes}`);
      current += 100;
    }

    return times;
  };

  const handleBooking = async () => {
    const bookingData = {
      facility: id,
      date: selectedDate?.toISOString(),
      startTime: watch("startTime"),
      endTime: watch("endTime"),
      user: user?._id,
      payableAmount: payableAmount,
      priceInHour: facility.pricePerHour,
      transactionId : `TXN-${Date.now()}`
      
    };
    const toastId = toast.loading("Creating booking...");
    
    try {
      const res = await createBooking(bookingData).unwrap();
      console.log(res.data.newBooking._id)
      // setBookingId(res.data.newBooking._id);
      toast.success("Booking created successfully!", { id: toastId });
      console.log("Booking created successfully:", res);
      window.location.href = res.data.paymentInfo.payment_url
    } catch (error) {
      if(user?.role !== "user"){
        toast.error("Only user can create a booking", {id:toastId})
      }else{
        toast.error("Something went wrong.", {id:toastId});
      }
      
    }
  };

  if (isLoading) {
    return <div>Loading facility...</div>;
  }

  if (error) {
    return <div>Error loading facility data.</div>;
  }

  return (
    <div className="mt-24 max-w-2xl mx-auto ">
      <div className="w-full ">
       
        <div className="relative">
        <img className="rounded-md max-h-[40vh] w-full" src={facility.image} alt="" />
            <h2 className="mt-4 absolute left-3 bottom-5 text-xl font-medium text-white bg-[#03AED2] px-2 py-[4px]"> {facility?.name}</h2>
          </div>
        <div className="lg:flex lg:justify-between">
          
        <div className="mt-2">
  <DatePicker
    selected={selectedDate}
    onChange={handleDateChange}
    dateFormat="yyyy/MM/dd"
    className="border border-gray-300 p-2 rounded-md bg-[#03AED2] text-white placeholder-white"
    placeholderText="Select a date"
    readOnly
  />
  <DatePicker
    selected={selectedDate}
    onChange={handleDateChange}
    dateFormat="yyyy/MM/dd"
    className="text-2xl text-[#03AED2] mt-6 ml-4"
    customInput={<FaRegCalendar className="cursor-pointer" />}
  />
</div>
          <div>
            <button
              onClick={handleCheckAvailability}
              className="mt-2 p-2 bg-[#03AED2] text-white "
            >
              Check availability
            </button>
          </div>
        </div>
      </div>

      {slotLoading && <div>Checking available slots...</div>}
      {slotError && <div>Error fetching available slots</div>}

      {shouldCheckAvailability && slotsData?.data?.length > 0 && (
        <div className="mt-2">
          <label className="bg-[#03AED2] p-2  text-white"  htmlFor="slot">Available Slots:</label>
          <select className="bg-[#03AED2] p-2  text-white" id="slot" onChange={(e) => handleSlotChange(e.target.value)}>
            <option className="bg-[#03AED2]" value="">Select a slot</option>
            {slotsData.data.map((item: TSlot) => (
              <option className="bg-[#03AED2]" key={item._id} value={item._id}>
                {item.startTime} - {item.endTime}
              </option>
            ))}
          </select>
        </div>
      )}

      {availableSlots.length > 0 && (
        <div className="lg:flex lg:justify-between">
          <div className="mt-2 mb-4">
          <div className="flex items-center ">
  <label className="bg-[#03AED2] p-2  text-white" htmlFor="startTime">
    Start Time:
  </label>
  <select
    id="startTime"
    {...register("startTime")}
    onChange={(e) => handleStartTimeChange(e.target.value)}
    className="bg-[#03AED2] p-2  text-white"
  >
    <option className="bg-[#03AED2]" value="">
      Select a start time
    </option>
    {startTimeOptions.map((time) => (
      <option key={time} value={time} className="bg-[#03AED2]">
        {time}
      </option>
    ))}
  </select>
</div>
          </div>

          <div className="mt-2">
            <label htmlFor="endTime" className="bg-[#03AED2] p-2 text-white">End Time:</label>
            <select
              id="endTime"
              {...register("endTime")}
              onChange={(e) => handleEndTimeChange(e.target.value)}
              className="bg-[#03AED2] p-2  text-white"
            >
              <option className="bg-[#03AED2]" value="">Select an end time</option>
              {endTimeOptions.map((time) => (
                <option className="bg-[#03AED2]" key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {watch("startTime") && watch("endTime") && (
      

        
        <div className="mt-2 lg:flex lg:justify-between">
          <div>
          <h3 className="bg-[#03AED2] p-2 inline-block text-white mb-2">Amount: ${payableAmount}</h3>
          </div>
          <div>
          <button
            onClick={handleBooking}
            className=" p-2 bg-[#03AED2] text-white "
            disabled={isCreatingBooking}
          >
            {isCreatingBooking ? "Creating..." : "Confirm Booking"}
          </button>
          </div>
         
        </div>
        
      )}
    </div>
  );
};

export default Booking;
