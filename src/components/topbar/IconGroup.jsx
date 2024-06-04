import Battery from "./Battery";
import VolumeIcon from "./VolumeIcon";
import WifiIcon from "./WifiIcon";
import "@css/topbar.css";

const IconGroup = () => {
  return (
    <div className="icon-container">
      <WifiIcon size={"1rem"}/>
      <VolumeIcon size={"0.75rem"} color={"#dddddd"} strokeWidth={1.5}/>
      <Battery />
    </div>
  );
};

export default IconGroup;
