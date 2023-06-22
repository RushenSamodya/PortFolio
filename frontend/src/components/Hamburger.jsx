import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faBookOpen,
  faFileCode,
  faBlog,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Hamburger = () => {
  return (
    <Menu colorScheme="white">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="ghost"
        colorScheme="white"
      />
      <MenuList color="black" alignItems="center" paddingLeft="30px">
        <Link to="#home" smooth>
          <MenuItem
            icon={
              <FontAwesomeIcon icon={faHouse} style={{ color: "#000000" }} />
            }
          >
            Home
          </MenuItem>
        </Link>

        <Link to="#about" smooth>
          <MenuItem
            icon={
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ color: "#000000" }}
              />
            }
          >
            About
          </MenuItem>
        </Link>

        <Link to="#education" smooth>
          <MenuItem
            icon={
              <FontAwesomeIcon icon={faBookOpen} style={{ color: "#000000" }} />
            }
          >
            Education
          </MenuItem>
        </Link>

        <Link to="#projects" smooth>
          <MenuItem
            icon={
              <FontAwesomeIcon icon={faFileCode} style={{ color: "#000000" }} />
            }
          >
            Projects
          </MenuItem>
        </Link>

        <Link to="#blog" smooth>
          <MenuItem
            icon={
              <FontAwesomeIcon icon={faBlog} style={{ color: "#000000" }} />
            }
          >
            Blog
          </MenuItem>
        </Link>
        <Link to="#contactme" smooth>
          <MenuItem
            icon={
              <FontAwesomeIcon
                icon={faAddressBook}
                style={{ color: "#000000" }}
              />
            }
          >
            Contact Me
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default Hamburger;
