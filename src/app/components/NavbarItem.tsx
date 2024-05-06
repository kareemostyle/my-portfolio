import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconName,
  IconPrefix,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

interface NavbarItemProps {
  iconName: IconName; // Accept the icon name as a prop
  item: string;
  prefix: IconPrefix;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ prefix, iconName, item }) => {
  return (
    <li>
      <a
        href=""
        className="flex flex-row items-center h-12 transform lg:hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-orange-200"
      >
        <span className="inline-flex items-center justify-center h-10 md:h-8 w-10 md:w-8 pl-2 md:pl-4">
          <FontAwesomeIcon icon={[prefix, iconName]} />
        </span>
        <span className="text-sm font-medium pl-4 hidden md:inline">
          {item}
        </span>
      </a>
    </li>
  );
};

export default NavbarItem;
