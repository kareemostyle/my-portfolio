import ProfileImage from "./ProfileImage";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <>
      <div className="min-h-screen flex flex-row bg-orange-100">
        <div className="flex flex-col w-12 lg:w-36 md:w-24 bg-white overflow-hidden">
          <div className="flex item-center justify-center shadow-md bg-teal-100">
            <ProfileImage />
          </div>
          <ul className="flex flex-col py-4">
            <NavbarItem prefix="far" iconName="address-card" item="About" />
            <NavbarItem prefix="fas" iconName="briefcase" item="Experience" />
            <NavbarItem prefix="fas" iconName="phone" item="Contact Me" />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
