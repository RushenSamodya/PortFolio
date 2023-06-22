import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Text,
  Textarea,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import Hamburger from "../components/Hamburger";
import { EmailIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isLargerThan375] = useMediaQuery("(min-width: 750px)");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      toast({
        title: "Please fill all the fields",
        description:
          "Some of the fields in the form have not been filled correctly",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_tkiqcq2",
        "template_6e9tjz9",
        form.current,
        "MxF-4Ajt6TRKaF-5k"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Email Sent",
            description: "Your email has been successfully sent",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Email Did not Sent",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      );
  };

  return (
    <>
      {isLargerThan375 ? (
        <>
          <Box width="100%" height="130%" id="contactme" background="#1E1E1E">
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
                paddingBottom="2%"
              >
                Contact Me
              </Text>
              <Text fontSize="2xl" color="#ffffff" padding="2%">
                You’ve made it to the end. Thank You for your time.
              </Text>
              <Text fontSize="2xl" color="#ffffff">
                Feel Free to leave a message if you want to contact me.
              </Text>
              <Text fontSize="2xl" color="#ffffff">
                Hope You’ll have a wonderful day
              </Text>

              <Box
                width="60%"
                paddingTop="5%"
                color="#ffffff"
                ref={form}
                as="form"
              >
                <FormControl padding="3%">
                  <FormLabel colorScheme="whiteAlpha" fontSize="2xl">
                    Name
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your name here"
                    bg="white"
                    name="from_name"
                    color="#000000"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl padding="3%">
                  <FormLabel colorScheme="whiteAlpha" fontSize="2xl">
                    Email address
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email here"
                    bg="white"
                    name="reply_to"
                    color="#000000"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <Text padding="3%" fontSize="2xl">
                  Message
                </Text>
                <Textarea
                  placeholder="Enter your message here"
                  width="95%"
                  marginLeft="3%"
                  bg="white"
                  name="message"
                  color="#000000"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  leftIcon={<EmailIcon />}
                  colorScheme="gray"
                  variant="solid"
                  margin="3%"
                  onClick={sendEmail}
                >
                  Send
                </Button>
              </Box>
            </Box>
            <Text
              color="#ffffff"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xl"
            >
              @Rushen Samodya
            </Text>
          </Box>
        </>
      ) : (
        <>
          <Box width="100%" height="100%" id="contactme" background="#1E1E1E">
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
                paddingBottom="5%"
              >
                Contact Me
              </Text>
              <Text fontSize="xl" color="#ffffff" padding="1%">
                You’ve made it to the end.
              </Text>
              <Text fontSize="xl" color="#ffffff" padding="1%">
                Thank You for your time.
              </Text>
              <Text fontSize="xl" color="#ffffff" paddingTop="2rem">
                Feel Free to leave a message,
              </Text>
              <Text fontSize="xl" color="#ffffff" padding="1%">
                if you want to contact me.
              </Text>
              <Text fontSize="xl" color="#ffffff" paddingTop="2rem">
                Hope You’ll have a wonderful day.
              </Text>

              <Box
                width="80%"
                paddingTop="5%"
                color="#ffffff"
                ref={form}
                as="form"
                marginTop="2rem"
              >
                <FormControl padding="3%">
                  <FormLabel colorScheme="whiteAlpha" fontSize="2xl">
                    Name
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your name here"
                    bg="white"
                    name="from_name"
                    color="#000000"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl padding="3%">
                  <FormLabel colorScheme="whiteAlpha" fontSize="2xl">
                    Email address
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email here"
                    bg="white"
                    name="reply_to"
                    color="#000000"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <Text padding="3%" fontSize="2xl">
                  Message
                </Text>
                <Textarea
                  placeholder="Enter your message here"
                  width="95%"
                  marginLeft="3%"
                  bg="white"
                  name="message"
                  color="#000000"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  leftIcon={<EmailIcon />}
                  colorScheme="gray"
                  variant="solid"
                  margin="3%"
                  onClick={sendEmail}
                >
                  Send
                </Button>
              </Box>
            </Box>
            <Text
              color="#ffffff"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xl"
            >
              @Rushen Samodya
            </Text>
          </Box>
        </>
      )}
    </>
  );
};

export default ContactMe;
