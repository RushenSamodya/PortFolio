import Navbar from "../components/Navbar";
import { Box, Text, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import GitHubImage from "../assets/Github.png";
import LinkedInImage from "../assets/LinkedIn.png";
import TwitterImage from "../assets/Twitter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Hompage = () => {
  return (
    <>
      <Navbar />
      <Box
        color="white"
        fontWeight="light"
        height="80vh"
        width="100vw"
        id="home"
      >
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
            <Button
              borderRadius="50px"
              colorScheme="white"
              variant="outline"
              size="lg"
            >
              Contact me
            </Button>
          </Box>
        </Box>

        <Box
          fontSize="25px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="2rem"
        >
          <Image src={GitHubImage} width="25px" height="25px" />
          <Image src={LinkedInImage} width="25px" height="25px" />
          <Image src={TwitterImage} width="25px" height="25px" />
        </Box>

        <Box
          fontSize="25px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingTop="3rem"
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            bounce
            style={{ color: "#ffffff" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hompage;
