import { Box, IconButton, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Hamburger from "../components/Hamburger";
import Group1 from "../assets/Group 1.png";
import Group2 from "../assets/Group 2.png";
import Group3 from "../assets/Group 3.png";

const About = () => {
  const [isLargerThan375] = useMediaQuery("(min-width: 750px)");

  return (
    <>
      {isLargerThan375 ? (
        <>
          <Box width="100%" height="98%" id="about" background="#1E1E1E">
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
              justifyContent="center"
              alignItems="center"
            >
              <Box
                width="70%"
                height="90%"
                background="#D9D9D9"
                borderRadius="50"
                display="flex"
                flexDirection="column"
                alignItems="center"
                boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
              >
                <Text fontSize="3xl" fontWeight="800" padding="1%">
                  About me
                </Text>
                <Text fontSize="2xl" fontWeight="700" padding="2%">
                  Bonjor 👋
                </Text>

                <Text fontSize="2xl" paddingTop="1%">
                  My name is Rushen. and I am currently pursuing a
                </Text>
                <Text fontSize="2xl">
                  BSc (Hons) in Information Technology at the
                </Text>
                <Text fontSize="2xl">University of Moratuwa.</Text>

                <Text fontSize="2xl" paddingTop="2%">
                  I am passionate about <b>full-stack development</b>
                </Text>
                <Text fontSize="2xl">and my favorite technology stack is</Text>
                <Text fontSize="2xl" paddingBottom="3%">
                  MERN (MongoDB, Express.js, React.js, and Node.js).
                </Text>

                <Box
                  width="80%"
                  height="20%"
                  background="#1E1E1E"
                  borderRadius="50"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="5rem"
                >
                  <Box
                    color="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image src={Group1} width="4rem" height="4rem" />
                    <Text> Mongo DB</Text>
                  </Box>

                  <Box
                    color="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image src={Group2} width="4rem" height="4rem" />
                    <Text> Express js</Text>
                  </Box>

                  <Box
                    color="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image src={Group3} width="4rem" height="4rem" />
                    <Text> React</Text>
                  </Box>

                  <Box
                    color="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image src={Group2} width="4rem" height="4rem" />
                    <Text> Node js </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box width="100%" height="100%" id="about" background="#1E1E1E">
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
              height="95%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                width="90%"
                height="90%"
                background="#D9D9D9"
                borderRadius="50"
                display="flex"
                flexDirection="column"
                alignItems="center"
                boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
                padding="2rem"
              >
                <Text fontSize="3xl" fontWeight="800" padding="1%">
                  About me
                </Text>
                <Text fontSize="2xl" fontWeight="700" padding="2%">
                  Bonjor 👋
                </Text>

                <Text fontSize="xl" paddingTop="2rem">
                  My name is Rushen. and I am
                </Text>
                <Text fontSize="xl">currently pursuing a BSc (Hons)</Text>
                <Text fontSize="xl">in Information Technology at the</Text>
                <Text fontSize="xl">University of Moratuwa.</Text>

                <Text fontSize="xl" paddingTop="2rem">
                  I am passionate about
                </Text>
                <Text fontSize="xl">
                  <b>full-stack development</b>
                </Text>
                <Text fontSize="xl">and my favorite technology</Text>
                <Text fontSize="xl" paddingBottom="3%">
                  {" "}
                  stack is MERN Stack.
                </Text>

                <Box
                  marginTop="3rem"
                  padding="1rem"
                  width="100%"
                  height="15%"
                  background="#1E1E1E"
                  borderRadius="35"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="1rem"
                >
                  <Box
                    color="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image src={Group1} width="2rem" height="2rem" />
                    <Text fontSize="xs"> Mongo</Text>
                    <Text fontSize="xs">DB</Text>
                  </Box>

                  <Box
                    color="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image src={Group2} width="2rem" height="2rem" />
                    <Text fontSize="xs"> Express </Text>
                    <Text fontSize="xs"> js</Text>
                  </Box>

                  <Box
                    color="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image src={Group3} width="2rem" height="2rem" />
                    <Text fontSize="xs"> React</Text>
                  </Box>

                  <Box
                    color="white"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image src={Group2} width="2rem" height="2rem" />
                    <Text fontSize="xs"> Node </Text>
                    <Text fontSize="xs"> js </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default About;
