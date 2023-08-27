import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createAccount, loginUser } from "../Redux/authReducer/action";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import CaptionCarousel from "../Components/CaptionCarousel";
import { LOGIN_FAILURE } from "../Redux/authReducer/actionTypes";

export default function LoginAndRegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register1,
    handleSubmit: hS1,
    formState: { errors: errors1 },
  } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let adminLogin = () => {
    // dispatch(adminLogin({ email, password })) // Use the admin login action
    //   .then(() => {
    //     navigate("/admin");
    //   })
    //   .catch(() => {
    //     toast({
    //       title: "Invalid Admin Credentials",
    //       description: "Please enter valid admin email and password.",
    //       position: "top-center",
    //       status: "error",
    //       duration: 2000,
    //       isClosable: true,
    //     });
    //   });
    const expectedAdminEmail = "admin@example.com";
    const expectedAdminPassword = "admin";

    if (email === expectedAdminEmail && password === expectedAdminPassword) {
      navigate("/admin");
      onClose();
    } else {
      toast({
        title: "Invalid Admin Credentials",
        description: "Please enter valid admin email and password.",
        position: "top-center",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  console.log(location);
  const onLoginSubmit = (dat) => {
    const email = dat.Email;
    const password = dat.Password;

    const userData = { email, password };

    dispatch(loginUser(userData))
      .then(() => {
        toast({
          title: "Login Successfully!",
          position: "top-center",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate(location.state, { replace: true });
        document.getElementById("loginform").reset();
      })
      .catch((err) => {
        // console.log("err", err);
        toast({
          title: "Login Failed",
          description: "Please check your credentials",
          position: "top-center",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        dispatch({ type: LOGIN_FAILURE });
      });
  };

  const onAccountCreateSubmit = (data) => {
    const { Name, Email, Password } = data;
    const userData = { name: Name, email: Email, password: Password };

    dispatch(createAccount(userData))
      .then(() => {
        toast({
          title: "Account Created Successfully.",
          position: "top-center",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Something went wrong!",
          position: "top-center",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });

    // document.getElementById("ca").reset();
    navigate("/");
  };

  return (
    <Container>
      <STYLEDIV>
        <CaptionCarousel />
      </STYLEDIV>
      <DIV>
        <Tabs variant="soft-rounded" id="modal">
          <TabList>
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <form action="" id="loginform" onSubmit={hS1(onLoginSubmit)}>
                <label style={{ marginTop: "8px" }}>Enter your Email</label>
                <input
                  autoComplete="off"
                  {...register1("Email", {
                    required: true,
                    pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                  placeholder="email"
                />
                {errors1?.Email?.type === "required" && (
                  <p>
                    <RiErrorWarningFill /> This field is required
                  </p>
                )}
                {errors1?.Email?.type === "pattern" && (
                  <p>
                    <RiErrorWarningFill /> Invalid email address
                  </p>
                )}

                <label>Enter your Password</label>
                <input
                  type="password"
                  placeholder="password"
                  autoComplete="off"
                  {...register1("Password", {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                  })}
                />
                {errors1?.Password?.type === "required" && (
                  <p>
                    <RiErrorWarningFill /> This field is required
                  </p>
                )}
                {errors1?.Password?.type === "minLength" && (
                  <p>
                    <RiErrorWarningFill /> Password must be 6 characters
                  </p>
                )}
                {errors1?.Password?.type === "maxLength" && (
                  <p>
                    <RiErrorWarningFill /> Password must be 6 characters
                  </p>
                )}
                <br />
                <small
                  style={{
                    margin: "auto",
                    padding: "10px",
                    fontSize: "16px",
                    color: "gray",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={onOpen}
                >
                  Login As Admin
                </small>
                <br />
                <input type="submit" />
              </form>
            </TabPanel>
            <TabPanel>
              <form id="ca" onSubmit={handleSubmit(onAccountCreateSubmit)}>
                <label>Enter your Name</label>
                <input
                  autoComplete="off"
                  {...register("Name", {
                    required: true,
                    autoComplete: "off",
                    maxLength: 20,
                    minLength: 3,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.Name?.type === "required" && (
                  <p>
                    <RiErrorWarningFill /> This field is required
                  </p>
                )}
                {errors?.Name?.type === "maxLength" && (
                  <p>
                    <RiErrorWarningFill /> Name cannot exceed 20 characters
                  </p>
                )}
                {errors?.Name?.type === "minLength" && (
                  <p>
                    <RiErrorWarningFill /> Name must be at 3 characters
                  </p>
                )}
                {errors?.Name?.type === "pattern" && (
                  <p>
                    <RiErrorWarningFill /> Alphabetical characters only
                  </p>
                )}

                <label>Enter your Email</label>
                <input
                  autoComplete="off"
                  {...register("Email", {
                    required: true,
                    pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                />
                {errors?.Email?.type === "required" && (
                  <p>
                    <RiErrorWarningFill /> This field is required
                  </p>
                )}
                {errors?.Email?.type === "pattern" && (
                  <p>
                    <RiErrorWarningFill /> Invalid email address
                  </p>
                )}

                <label>Create your Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  {...register("Password", {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                  })}
                />
                {errors?.Password?.type === "required" && (
                  <p>
                    <RiErrorWarningFill /> This field is required
                  </p>
                )}
                {errors?.Password?.type === "minLength" && (
                  <p>
                    <RiErrorWarningFill /> Password must be 6 characters
                  </p>
                )}
                {errors?.Password?.type === "maxLength" && (
                  <p>
                    <RiErrorWarningFill /> Password must be 6 characters
                  </p>
                )}

                <button type="submit">Submit</button>
              </form>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody padding="15%" mt="auto">
              <h1
                class="login-title"
                style={{
                  textAlign: "center",
                  paddingBottom: "20px",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Admin Login
              </h1>
              <form
                class="login_form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  fontSize: "20px",
                }}
              >
                <div>
                  <label for="email">Email </label>
                  <br />
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required
                    style={{
                      backgroundColor: "transparent",
                      height: "50px",
                      marginTop: "15px",
                      marginBottom: "10px",
                      border: "1px solid",
                      padding: "10px",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label for="password">Password </label>
                  <br />
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    style={{
                      backgroundColor: "transparent",
                      height: "50px",
                      marginTop: "15px",
                      marginBottom: "10px",
                      border: "1px solid",
                      padding: "10px",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  background="black"
                  _hover={{ bg: "black" }}
                  onClick={adminLogin}
                  color="white"
                  type="submit"
                >
                  Log in
                </Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </DIV>
    </Container>
    // </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;
  overflow: hidden;
`;
const STYLEDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  margin-top: 5px;

  @media screen and (min-width: 1024px) {
    width: 35%;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
const DIV = styled.div`
  /* border:2px solid red; */
  /* margin-left:-20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  /* padding: 20px; */

  #modal {
    /* margin-top:"-5px"; */
    border: 2px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 150px;
      color: black;
    }
    button[aria-selected="true"] {
      background-color: gray;
      color: white;
      font-weight: 700;
    }
    #loginform,
    #ca {
      display: flex;
      flex-direction: column;
      color: black;
      input,
      button {
        background-color: transparent;
        height: 50px;
        margin-top: 15px;
        margin-bottom: 10px;
        border: 1px solid;
        padding: 10px;
        border-radius: 10px;
      }
      input[type="submit"] {
        width: 50%;
        margin: auto;
        margin-top: 15px;
        color: white;
        border-radius: 50px;
        border: 0;
        background-color: gray;
        font-size: 18px;
        font-weight: 700;
        height: 40px;
        padding: 0px;
        cursor: pointer;
      }
      caret-color: #f76f22;
      p {
        display: flex;
        align-items: center;
        gap: 5px;
        padding-bottom: 5px;
        color: red;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    #modal {
      width: 100%;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    #modal {
      width: 100%;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    #modal {
      width: 100%;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    #modal {
      width: 100%;
    }
  }
`;

// import {
//   Box,
//   Button,
//   Center,
//   Heading,
//   Input,
//   SimpleGrid,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import CaptionCarousel from "../Components/CaptionCarousel";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../Redux/authReducer/action";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const dispatch = useDispatch();
//   const isAuth = useSelector((store) => store.loginReducer.isAuth);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//       email,
//       password,
//     };
//     dispatch(loginUser(userData)).then(() => {
//       navigate("/");
//     });
//   };
//   return (
//     <Box mt={8}>
//       <SimpleGrid columns={2}>
//         <Box>
//           <CaptionCarousel />
//         </Box>
//         <Box backgroundColor="gray.100" p={9}>
//           <Center>
//             <Heading p={8}>Welcome Back...</Heading>
//           </Center>
//           <Center>
//             <Box
//               boxShadow="lg"
//               w="70%"
//               borderRadius={10}
//               border="1px solid lightGray"
//               p={8}
//             >
//               <form onSubmit={handleSubmit}>
//                 <label>Enter Email Address: </label>
//                 <Input
//                   backgroundColor="white"
//                   border="1px solid gray"
//                   type="email"
//                   placeholder="Enter Email Address"
//                   mb={7}
//                   isRequired
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label>Enter Password: </label>
//                 <Input
//                   backgroundColor="white"
//                   border="1px solid gray"
//                   minLength={6}
//                   type="password"
//                   placeholder="Enter Password"
//                   isRequired
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Center>
//                   <Button
//                     mt={6}
//                     w="50%"
//                     boxShadow="lg"
//                     border="1px solid gray"
//                     backgroundColor="white"
//                     type="submit"
//                   >
//                     Submit
//                   </Button>
//                 </Center>
//               </form>
//             </Box>
//           </Center>
//         </Box>
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default Login;
