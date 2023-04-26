import React from 'react'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { AiOutlineMenu, AiOutlineSearch, AiTwotoneShop } from "react-icons/ai"
import { BsCart3, BsChevronDown } from "react-icons/bs"
import { BsTagFill } from "react-icons/bs"



const Navbar = () => {
    return (
        <>
            <Box display={"flex"} w="100%" h={"70px"} border={"1px solid red"} bg="#0046be" color={"white"}>
                <Flex w={"70%"} alignItems="center" justifyContent={"space-around"} border={"1px solid teal"}>
                    <Box border={"1px solid green"} fontWeight={"bold"} fontSize={"30px"} lineHeight={"10px"}>
                        <Text>BEST</Text>
                        <Box display={"flex"} border={"1px solid red"} alignItems={"center"} justifyContent={"center"} p="3px">
                            <Text>BUY </Text>

                            <BsTagFill color='yellow' />



                        </Box>


                    </Box>
                    <Flex border={"1px solid blue"} alignItems="center" fontSize={"20px"} fontWeight="bold">
                        <AiOutlineMenu />
                        <Text>Menu</Text>
                    </Flex>
                    <Flex alignItems="center" w="50%" >
                        <Input bg="white" w={"100%"} borderRadius={"5px 0px 0px 5px"} placeholder='What can we help you find today?' />
                        <Button bg="white" borderRadius={"0px 5px 5px 0px"} color={"black"} fontSize={"30px"} fontWeight="bold"> <AiOutlineSearch /></Button>

                    </Flex>

                </Flex>

                <Flex border={"1px solid blue"} fontWeight="bold" gap={"10px"} p="10px" fontSize={"20px"} >

                    <Box display={"flex"} alignItems={"center"} border={"1px solid red"} >
                        <AiTwotoneShop />
                        <Text>Aiea</Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} border={"1px solid green"} >
                        <BsCart3 />
                        <Text>Account</Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} border={"1px solid green"}  >
                        <BsCart3 />
                        <Text>Cart</Text>
                    </Box>
                </Flex>


            </Box>
            <Flex w="100%" h="50px" p={"10px"} bg="#003da6" color={"white"}>
                <Flex gap={"25px"} fontWeight={"bold"} padding={"10px"} marginLeft={"10px"}>
                    <Box display={"flex"} alignItems={"center"} gap={"3px"}>
                        <Text>Shops</Text>
                        <BsChevronDown />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={"3px"}>

                        <Text>Brands</Text>
                        <BsChevronDown />

                    </Box>

                    <Box display={"flex"} alignItems={"center"} gap={"3px"}>
                        <Text>Deals</Text>
                        <BsChevronDown />

                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={"3px"}>
                        <Text>Services</Text>
                        <BsChevronDown />

                    </Box>


                </Flex>

            </Flex>
        </>



    )
}

export default Navbar




