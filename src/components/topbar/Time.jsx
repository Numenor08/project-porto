import { useState, useEffect } from "react";
import LoadingRing from "@/components/Loading";

const Time = () => {
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const updateDateTime = () => {
    setTime(formatTime(new Date()));
    setDate(formatDate(new Date()));
  };

  useEffect(() => {
    updateDateTime(); // Update the date and time immediately when the component mounts

    const interval = setInterval(updateDateTime, 1000); // Update the date and time every second

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);
  return (
    <>
      <h2>{date || time ? `${date}, ${time}` : <LoadingRing size={"0.75rem"}/>}</h2>
    </>
  );
};

// Mengformat Date
const formatDate = (date) => {
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

// Mengformat Time
const formatTime = (time) => {
  return time.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export default Time;
