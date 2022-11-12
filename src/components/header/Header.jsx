import { Box,  Center,  Flex, Heading, Icon, } from '@chakra-ui/react'
import { TbPlant2 } from 'react-icons/tb';
import { BsBag } from 'react-icons/bs';
import { MdPeopleAlt } from 'react-icons/md';


import { Link, useLocation } from "react-router-dom";

export function Header() {  
    const location = useLocation();

    return(
        <Box  bg='blackAlpha.700' h='70px'  width='100%' px='4' py='1.5' >
        <Flex minWidth='max-content' alignItems='center' justify='space-between' >
            <Box p='2'> 
                <Heading ><Icon as={TbPlant2} fontSize='3xl' color='gray.100'/></Heading>    
            </Box>

            <Flex  gap = '4'textColor='blackAlpha.500' justifyContent='space-between'>

                <a><Link to="/">Menu</Link></a>
                <a><Link to="/dashboard">Productos</Link></a>
                <a><Link to="/dashboard">Promociones</Link></a>
                
            </Flex>
            
            <Flex gap='4' textColor='blackAlpha.500' justifyContent='space-between'>
                <Icon as={MdPeopleAlt} fontSize='2xl' color='gray.100'/>
                <a><Link to='/dashboard'>Registarse</Link></a>
                <a><Link to='/dashboard'>Ingresar</Link></a>
                <Icon as={BsBag} fontSize='2xl' color='gray.100'/>
            </Flex>
            
        </Flex>
        </Box>
    )
}
