import "./navbar.scss";
import adminImage from "./../../assets/image/admin.png";
import { SearchIcon,UploadIcon, MessageIcon, InboxIcon } from "../Icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logoImage" src={adminImage} alt="" />
        <span>Trương Ngọc Đệ</span>
      </div>
      <div className="icons">
        <button className="search-btn" onMouseDown={(e) => e.preventDefault()}>
          <SearchIcon />
        </button>
        <button className="search-btn" onMouseDown={(e) => e.preventDefault()}>
          <UploadIcon />
        </button>
        <button className="search-btn" onMouseDown={(e) => e.preventDefault()}>
          <MessageIcon />
        </button>
        <div className="notification">
        <button className="search-btn" onMouseDown={(e) => e.preventDefault()}>
          <InboxIcon />
        </button>
          <span>1</span>
        </div>
        <div className="user">
          <img src={adminImage} alt="" />
          {/* <span>Đệ</span> */}
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
