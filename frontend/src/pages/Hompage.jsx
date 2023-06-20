import Navbar from "../components/Navbar";
import { Box, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import GitHubImage from "../assets/Github.png";
import LinkedInImage from "../assets/LinkedIn.png";
import TwitterImage from "../assets/Twitter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Hompage = () => {
  const [isLargerThan375] = useMediaQuery("(min-width: 750px)");

  return (
    <>
      {isLargerThan375 ? (
        <>
          <Navbar />
          <Box color="white" fontWeight="light" height="85vh" width="100vw">
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              paddingTop="3rem"
            >
              <Text fontSize="6xl">Hello!</Text>
              <Text fontSize="6xl">I’m Rushen</Text>
            </Box>

            <Box
              fontSize="xl"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Text>Aspiring undergraduate passionate </Text>
              <Text>about building user-friendly web solutions</Text>
              <Box padding="4rem">
                <Link to="#contactme" smooth>
                  <Button
                    borderRadius="50px"
                    colorScheme="white"
                    variant="outline"
                    size="lg"
                  >
                    Contact me
                  </Button>
                </Link>
              </Box>
            </Box>

            <Box
              fontSize="25px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="2rem"
            >
              <NavLink to="https://github.com/RushenSamodya" target="_blank">
                <Image src={GitHubImage} width="25px" height="25px" />
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/rushen-samodya-2231881b6/"
                target="_blank"
              >
                <Image src={LinkedInImage} width="25px" height="25px" />
              </NavLink>
              <NavLink to="https://twitter.com/RushenSamodya" target="_blank">
                <Image src={TwitterImage} width="25px" height="25px" />
              </NavLink>
            </Box>

            <Box
              fontSize="25px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingTop="3rem"
            >
              <Link to="#about" smooth>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  bounce
                  style={{ color: "#ffffff" }}
                />
              </Link>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Navbar />
          <Box color="white" fontWeight="light" height="90%" width="100%">
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              paddingTop="3rem"
            >
              <Text fontSize="6xl">Hello!</Text>
              <Text fontSize="6xl">I’m </Text>
              <Text fontSize="6xl"> Rushen</Text>
            </Box>

            <Box
              fontSize="xl"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              padding="1rem"
            >
              <Text>Aspiring undergraduate passionate </Text>
              <Text> about building user-friendly</Text>
              <Text> web solutions</Text>
              <Box padding="4rem">
                <Link to="#contactme" smooth>
                  <Button
                    borderRadius="50px"
                    colorScheme="white"
                    variant="outline"
                    size="lg"
                  >
                    Contact me
                  </Button>
                </Link>
              </Box>
            </Box>

            <Box
              fontSize="25px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="2rem"
            >
              <NavLink to="https://github.com/RushenSamodya" target="_blank">
                <Image src={GitHubImage} width="25px" height="25px" />
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/rushen-samodya-2231881b6/"
                target="_blank"
              >
                <Image src={LinkedInImage} width="25px" height="25px" />
              </NavLink>
              <NavLink to="https://twitter.com/RushenSamodya" target="_blank">
                <Image src={TwitterImage} width="25px" height="25px" />
              </NavLink>
            </Box>

            <Box
              fontSize="25px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingTop="3rem"
            >
              <Link to="#about" smooth>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  bounce
                  style={{ color: "#ffffff" }}
                />
              </Link>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Hompage;
