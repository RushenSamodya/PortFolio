import { Box, IconButton, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Hamburger from "../components/Hamburger";
import Group1 from "../assets/Group 1.png";
import Group2 from "../assets/Group 2.png";
import Group3 from "../assets/Group 3.png";

const Projects = () => {
  const [isLargerThan375] = useMediaQuery("(min-width: 750px)");

  return (
    <>
      {isLargerThan375 ? (
        <>
          <Box width="100%" height="98%" id="projects" background="#1E1E1E">
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
                Projects
              </Text>
              <Box display="flex" alignItems="center">
                <Box
                  color="#ffffff"
                  width="50%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    width="80%"
                    height="85%"
                    background="#D9D9D9"
                    color="#000000"
                    borderRadius="50"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    margin="5%"
                  >
                    <Text fontSize="2xl" fontWeight="800" paddingTop="5%">
                      Expense Tracker
                    </Text>
                    <Text
                      fontSize="2xl"
                      padding="8%"
                      display="flex"
                      justifyContent="center"
                    >
                      A chatting application using socket IO and MERN Stack
                      which can have one to one and group chat options
                    </Text>
                    <Box
                      width="80%"
                      height="5rem"
                      background="#1E1E1E"
                      borderRadius="50"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      gap="3rem"
                      margin="2rem"
                      boxShadow="2px 15px 8px rgba(0, 0, 0, 0.1)"
                    >
                      <Box
                        color="white"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Image src={Group1} width="2rem" height="2rem" />
                        <Text fontSize="xs"> Mongo DB</Text>
                      </Box>

                      <Box
                        color="white"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Image src={Group2} width="2rem" height="2rem" />
                        <Text fontSize="xs"> Express js</Text>
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
                        <Text fontSize="xs"> Node js </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  color="#ffffff"
                  width="50%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    width="80%"
                    height="85%"
                    background="#D9D9D9"
                    color="#000000"
                    borderRadius="50"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    margin="5%"
                  >
                    <Text fontSize="2xl" fontWeight="800" paddingTop="5%">
                      Chat App
                    </Text>
                    <Text
                      fontSize="2xl"
                      padding="8%"
                      alignItems="center"
                      display="flex"
                      justifyContent="center"
                    >
                      A chatting application using socket IO and MERN Stack
                      which can have one to one and group chat options.
                    </Text>
                    <Box
                      width="80%"
                      height="5rem"
                      background="#1E1E1E"
                      borderRadius="50"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      gap="3rem"
                      margin="2rem"
                      boxShadow="2px 15px 8px rgba(0, 0, 0, 0.1)"
                    >
                      <Box
                        color="white"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Image src={Group1} width="2rem" height="2rem" />
                        <Text fontSize="xs"> Mongo DB</Text>
                      </Box>

                      <Box
                        color="white"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Image src={Group2} width="2rem" height="2rem" />
                        <Text fontSize="xs"> Express js</Text>
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
                        <Text fontSize="xs"> Node js </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box width="100%" height="100%" id="projects" background="#1E1E1E">
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
                paddingBottom="1%"
              >
                Projects
              </Text>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Box
                  color="#ffffff"
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    width="80%"
                    height="80%"
                    background="#D9D9D9"
                    color="#000000"
                    boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
                    borderRadius="50"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    margin="5%"
                  >
                    <Text fontSize="xl" fontWeight="800" paddingTop="5%">
                      Expense Tracker
                    </Text>
                    <Text
                      fontSize="xl"
                      padding="8%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      A chatting application using socket IO and MERN Stack
                      which can have one to one and group chat options
                    </Text>
                    <Box
                      width="90%"
                      height="7rem"
                      background="#1E1E1E"
                      borderRadius="50"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      gap="1rem"
                      boxShadow="2px 15px 8px rgba(0, 0, 0, 0.1)"
                      marginBottom="1rem"
                    >
                      <Box
                        color="white"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Image src={Group1} width="2rem" height="2rem" />
                        <Text fontSize="xs"> Mongo DB</Text>
                      </Box>

                      <Box
                        color="white"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Image src={Group2} width="2rem" height="2rem" />
                        <Text fontSize="xs"> Express js</Text>
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
                        <Text fontSize="xs"> Node js </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  width="80%"
                  height="80%"
                  background="#D9D9D9"
                  color="#000000"
                  boxShadow="inset 0px 0px 10px 5px rgba(0, 0, 0, 0.3)"
                  borderRadius="50"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  margin="5%"
                >
                  <Text fontSize="xl" fontWeight="800" paddingTop="5%">
                    Chat App
                  </Text>
                  <Text
                    fontSize="xl"
                    padding="8%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    A chatting application using socket IO and MERN Stack which
                    can have one to one and group chat options
                  </Text>
                  <Box
                    width="90%"
                    height="5rem"
                    background="#1E1E1E"
                    borderRadius="50"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap="1rem"
                    boxShadow="2px 15px 8px rgba(0, 0, 0, 0.1)"
                    marginBottom="1rem"
                  >
                    <Box
                      color="white"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Image src={Group1} width="2rem" height="2rem" />
                      <Text fontSize="xs"> Mongo DB</Text>
                    </Box>

                    <Box
                      color="white"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Image src={Group2} width="2rem" height="2rem" />
                      <Text fontSize="xs"> Express js</Text>
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
                      <Text fontSize="xs"> Node js </Text>
                    </Box>
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

export default Projects;
