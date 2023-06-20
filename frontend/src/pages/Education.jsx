import { Box, IconButton, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Hamburger from "../components/Hamburger";
import UoM from "../assets/UoM 1.png";
import STC from "../assets/Badge 2.png";

const Education = () => {
  const [isLargerThan375] = useMediaQuery("(min-width: 750px)");

  return (
    <>
      {isLargerThan375 ? (
        <>
          <Box width="100%" height="98%" id="education" background="#1E1E1E">
            <Box
              height="4%"
              display="flex"
              justifyContent="flex-end"
              paddingRight="1rem"
              padding="1%"
            >
              <IconButton>
                <Hamburger />
              </IconButton>
            </Box>
            <Box
              height="92%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Text
                fontSize="3xl"
                color="#ffffff"
                fontWeight="800"
                paddingBottom="3%"
              >
                Education
              </Text>

              <Box
                width="80%"
                height="20%"
                background="#D9D9D9"
                borderRadius="40"
                display="flex"
                alignItems="center"
                boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
                margin="2%"
              >
                <Box
                  width="20%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src={UoM} width="5rem" height="5rem" />
                </Box>
                <Box width="80%">
                  <Text fontSize="2xl" fontWeight="700" color="#000000">
                    University of Moratuwa
                  </Text>
                  <Text fontSize="2xl" color="#000000">
                    Reading for a Bsc. (Hons) in Information Technology
                  </Text>
                </Box>
              </Box>
              <Box
                width="80%"
                height="20%"
                background="#D9D9D9"
                borderRadius="50"
                display="flex"
                alignItems="center"
                boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
                margin="2%"
              >
                <Box
                  width="20%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src={STC} width="3.5rem" height="4rem" />
                </Box>
                <Box width="80%">
                  <Text fontSize="2xl" fontWeight="700" color="#000000">
                    St. Thomas’ College Matara
                  </Text>
                  <Text fontSize="2xl" color="#000000">
                    Studied up to GCE Advanced Level in Physical Science Stream
                  </Text>
                </Box>
              </Box>
              <Box
                width="60%"
                height="30%"
                background="#D9D9D9"
                borderRadius="50"
                display="flex"
                alignItems="center"
                boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
                margin="3%"
              >
                <Box
                  width="60%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  marginLeft="15%"
                >
                  <Text fontSize="2xl" color="#000000">
                    School Head Prefect
                  </Text>
                  <Text fontSize="2xl" color="#000000">
                    CIMA (Foundational Level)
                  </Text>
                </Box>
                <Box
                  width="40%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="2xl" color="#000000">
                    2017
                  </Text>
                  <Text fontSize="2xl" color="#000000">
                    2018
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box width="100%" height="100%" id="education" background="#1E1E1E">
            <Box
              height="4%"
              display="flex"
              justifyContent="flex-end"
              paddingRight="1rem"
              padding="1%"
            >
              <IconButton>
                <Hamburger />
              </IconButton>
            </Box>
            <Box
              height="92%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Text
                fontSize="3xl"
                color="#ffffff"
                fontWeight="800"
                paddingBottom="3%"
              >
                Education
              </Text>

              <Box
                width="90%"
                height="20%"
                background="#D9D9D9"
                borderRadius="30"
                display="flex"
                alignItems="center"
                boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
                margin="2%"
              >
                <Box
                  width="20%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src={UoM} width="2rem" height="2rem" />
                </Box>
                <Box width="80%">
                  <Text fontSize="lg" fontWeight="700" color="#000000">
                    University of Moratuwa
                  </Text>
                  <Text fontSize="lg" color="#000000">
                    Reading for a Bsc. (Hons) in Information Technology
                  </Text>
                </Box>
              </Box>
              <Box
                width="90%"
                height="20%"
                background="#D9D9D9"
                borderRadius="30"
                display="flex"
                alignItems="center"
                boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
                margin="2%"
              >
                <Box
                  width="20%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src={STC} width="1.5rem" height="2rem" />
                </Box>
                <Box width="80%">
                  <Text fontSize="lg" fontWeight="700" color="#000000">
                    St. Thomas’ College Matara
                  </Text>
                  <Text fontSize="lg" color="#000000">
                    Studied up to GCE Advanced Level in Physical Science Stream
                  </Text>
                </Box>
              </Box>
              <Box
                width="80%"
                height="20%"
                background="#D9D9D9"
                borderRadius="30"
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
                margin="5rem"
              >
                <Text fontSize="lg" color="#000000">
                  School Head Prefect - 2017
                </Text>
                <Text fontSize="lg" color="#000000">
                  CIMA (Foundational Level) - 2018
                </Text>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Education;
