import headerFull from "../media/headerFull.png";
import headerMobile from "../media/headerMobile.png";
import MobileDetector from "../components/MobileDetector";

// this exists solely because i made App.js rely too much on
// states to change it to a function later, once i implemented
// MobileDetector. so the header image has its work outsourced here
function Header() {
  const isMobile = MobileDetector();
  return (
    <img
      src={isMobile ? headerMobile : headerFull}
      className="headerImg"
      alt="CUMC 2021"
    />
  );
}

export default Header;
