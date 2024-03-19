import { useState } from "react";

const Appointment = () => {
  // State to hold the selected date
  const [selectedDate, setSelectedDate] = useState("");

  // Function to handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-y-4 py-8 md:py-14 justify-center items-center">
          <h2 className="text-3xl font-bold text-blue-950">
            Make an Appointment
          </h2>
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
            <div className="md:max-w-[300px]">
              <label
                className="text-sm md:text-base text-blue-950 font-bold"
                htmlFor="date"
              >
                Pick a Date:
              </label>
              <input
                className="text-base md:text-lg px-2 py-1 border border-blue-400 rounded-md"
                type="date"
                id="date"
                name="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="md:max-w-[300px]">
              <label className="text-sm md:text-base text-blue-950 font-bold">
                Hour:
              </label>
              <input
                className="text-base md:text-lg px-2 py-1 border border-blue-400 rounded-md"
                type="text"
                id="hour"
                name="hour"
                placeholder="0.10 - 20.00"
              />
            </div>
          </div>
          <button className="bg-blue-950 py-3 px-8 rounded-lg text-white font-semibold text-lg">
            Make Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
