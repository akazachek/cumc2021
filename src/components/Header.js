import headerFull from "../media/headerFull.png";
import headerMobile from "../media/headerMobile.png";
import MobileDetector from "../components/MobileDetector";

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
