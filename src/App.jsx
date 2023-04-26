import { Box, Button, Center, Heading, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { TfiLinkedin, TfiLink, TfiGithub } from "react-icons/tfi";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Navbar from "./components/Navbar"
import Main from "./components/Main"


function App() {
  const { appData } = useSelector((store) => store.app);
  console.log(appData);
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
