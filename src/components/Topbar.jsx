import "@css/topbar.css";
import Time from "./Time";

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
        <div>
          <h2>Logo</h2>
        </div>
      </header>
    </>
  );
};

export default Topbar;
