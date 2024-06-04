import BatteryGauge from "react-battery-gauge";
import { useEffect, useState } from "react";

const Battery = () => {
  const [batteryPercentage, setBatteryPercentage] = useState(null);
  useEffect(() => {
    const updateBatteryStatus = (battery) => {
      setBatteryPercentage(Math.floor(battery.level * 100));
    };

    const updateBatteryPercentage = () => {
      navigator.getBattery().then(updateBatteryStatus);
    };

    const batteryInterval = setInterval(updateBatteryPercentage, 1000);

    return () => {
      clearInterval(batteryInterval);
    };
  }, []);
  const gaugeProps = {
    size: 20,
    value: batteryPercentage || 70,
    animated: true,
    padding: 0,
    customization: {
      batteryBody: {
        strokeWidth: 2,
        cornerRadius: 15,
        fill: "none",
        strokeColor: "#dddddd",
      },
      readingText: {
        lightContrastColor: "none",
        darkContrastColor: "none",
        lowBatteryColor: "none",
        fontFamily: '"Ubuntu", sans-serif',
        fontSize: "1.25rem",
        showPercentage: false,
      },
      batteryMeter: {
        fill: "#dddddd",
        lowBatteryValue: 20,
        lowBatteryFill: "#ff9999",
        outerGap: 8,
      },
    },
  };

  return (
    <>
      <BatteryGauge {...gaugeProps} />
    </>
  );
};

export default Battery;
