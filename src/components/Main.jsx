import { Box, Button, Flex, Grid, GridItem, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
    return (
        <>
            <Flex  >
                <Box bgImage={"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt57ec74702f10e54e/641a172305105b4fc3bf446e/global-20230406-sweet-savings-feature-background-xs.jpg?width=599&quality=80&auto=webp"} textAlign={"center"}>
                    <Box m="auto" border={"1px solid green"} w="70%">
                        <Img src='https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3b14acc8482ad623/640a5178952945362ea1b840/20230406-global-sweet_savings-grid1-fg-m.png?width=50p&quality=80&auto=webp' alt='pro' />

                    </Box>
                    <Box border={"1px solid red"} w="70%" m="auto">
                        <Text fontSize={"30px"} fontWeight={"bold"}>Treat yourself to delightful deals on tech.</Text>
                        <Text>Sale ends April 13.*</Text>
                        <Button bgColor={"#0046be"} color={"white"}>Shop Now</Button>
                    </Box>

                </Box>
                <Grid
                    h={"200px"}
                    templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    border={"1px solid red"}
                >
                    <GridItem>
                        <Flex>
                            <Box></Box>
                        </Flex>
                    </GridItem>
                    <GridItem></GridItem>
                    <GridItem></GridItem>

                </Grid>
            </Flex>
        </>
    )
}

export default Main

