import {Header} from '../../components/header/Header.jsx'
import {Footer} from '../../components/footer/Footer.jsx'
import {HorizontalCards} from '../../components/cards/Cards.jsx'

import {useParams} from 'react-router-dom'

import { Box, Flex, Image, Text } from '@chakra-ui/react'

import { get_product } from '../../data/products.js'


export function Product(){
    const {productId} = useParams()

    const product = get_product(productId)

    const basicBoxStyles = {
        background:
          'url(https://wallpaperaccess.com/full/784181.jpg) center/cover no-repeat',
      }

    return (
        <div>
            <Header/>
            <Box sx={basicBoxStyles} overflow='hidden' height={400} filter='auto' brightness='40%' zIndex={0}/>
            <Flex w='100%' justifyContent='center' mt={-200} mb={30}>
                <Box width={500} height={300} m={5} bg='white' boxShadow='2xl' zIndex={1}>
                    <img src={product.img}/>
                </Box>
                <Box width={700} height={850} m={5} p={10} bg='white' boxShadow='2xl' zIndex={1}>
                    <Text fontSize='3xl' mb={10}>{product.name}</Text>
                    <Text fontSize='1xl'>{product.description}</Text>
                </Box>
            </Flex>
            <HorizontalCards/>
            <Footer/>
        </div>
    )
}