import { Box, Image, Text, Flex, Tag, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export function Card({product}){
    return (
        <Link to={`/product/${product.id}`}>
            <Box boxShadow='xl' m={10} borderRadius='5px' width={400} overflow='hidden'>
                <Box overflow='hidden' height={400}>
                    <Image src={product.img} mb={20}/>
                </Box>
                <Box p={4}>

                    <Flex align='center' justifyContent='space-between' p={3} mb={1}>
                        <Text fontSize='2x1'>
                            <strong>{product.name}</strong>
                        </Text>
                        <Tag p={4} colorScheme={product.available ? 'green' : 'red' }>
                            {product.available ? 'Disponible' : 'No disponible' }
                        </Tag>
                    </Flex>

                    <Text color='gray.600' p={3} textAlign='justify'>{product.description.slice(0,220)+'...'}</Text>

                    <Flex align='center' p={4} justifyContent='space-between'>
                        <Text color='green'>Costo ${product.price}</Text>
                        <Text>Vendidos {product.sold}</Text>
                    </Flex>
                </Box>
            </Box>
        </Link>
    )
}