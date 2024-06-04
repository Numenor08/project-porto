import "@css/topbar.css";
import Time from "./Time";
import IconGroup from "./IconGroup";

const Topbar = () => {
  
  return (
    <>
      <header className="topbar-container">
        <div>
          <h2 className="dot">Activities</h2>
        </div>
        <div>
          <Time />
        </div>
          <IconGroup />
      </header>
    </>
  );
};

export default Topbar;
