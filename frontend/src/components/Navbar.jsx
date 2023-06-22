import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { SearchIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isLargerThan375] = useMediaQuery("(min-width: 750px)");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {isLargerThan375 ? (
        <Box id="home">
          <Flex
            color="white"
            padding="2rem"
            justify="space-around"
            align="center"
            gap="15rem"
          >
            <Box>
              <Text cursor="pointer" fontSize="28px">
                rushen
              </Text>
            </Box>

            <Flex gap="3rem" fontSize="18px">
              <Link to="#home" smooth>
                <Text cursor="pointer">Home</Text>
              </Link>
              <Link to="#about" smooth>
                <Text cursor="pointer">About</Text>
              </Link>
              <Link to="#education" smooth>
                <Text cursor="pointer">Education</Text>
              </Link>
              <Link to="#projects" smooth>
                <Text cursor="pointer">Projects</Text>
              </Link>
              <Link to="#blog" smooth>
                <Text cursor="pointer">Blog</Text>
              </Link>
            </Flex>

            <Box display="flex" fontSize="18px" gap="1rem" cursor="pointer">
              {/* <Icon marginRight="8px">
                <SearchIcon />
              </Icon>
              <Icon
                marginRight="8px"
                onClick={() => setDarkMode(!darkMode)}
                transition="color 0.3s ease-in-out"
              >
                {!darkMode ? <SunIcon /> : <MoonIcon />}
              </Icon> */}
            </Box>
          </Flex>
        </Box>
      ) : (
        <Flex
          color="white"
          padding="30px"
          justify="space-between"
          align="center"
          id="home"
        >
          <Box>
            <Text fontSize="24px">rushen</Text>
          </Box>

          <Box>
            {/* <Icon marginRight="20px">
              <SearchIcon />
            </Icon>
            <Icon marginRight="8px" onClick={() => setDarkMode(!darkMode)}>
              {!darkMode ? <SunIcon /> : <MoonIcon />}
            </Icon> */}

            <Hamburger />
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Navbar;
