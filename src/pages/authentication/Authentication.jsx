import {Header} from '../../components/header/Header.jsx'
import { Input, Text, Flex, Box, Button, Stack } from '@chakra-ui/react'

import {useState, useEffect} from 'react';

export function Authentication(){

    const [auth, setAuth] = useState([])

    useEffect(() => {
        setAuth('login')
    }, [])
    
    return (
        <div>
            <Header/>
            <Box height='100%' align='center'>
                {auth == 'login' ? <Login setAuth={setAuth}/> : <Register setAuth={setAuth}/>}
            </Box>
        </div>
    )
}

export function Login({setAuth}){
    return(
        <Box width={600} borderRadius='12px' p={10} boxShadow='2xl'>
            <Text fontSize='3xl'>Inicia sesion</Text>
            <Box mt={15}> 
                <Input placeholder='Tu usuario' p={7} width={500}/>
            </Box>
            <Box mt={5}>
                <Input placeholder='Tu Contraseña' p={7} width={500}/>
            </Box>
            <Stack mt={10} spacing={10} direction='row' justify='center'>
                <Button size='lg' onClick={() => setAuth('register')}>Registrar</Button>
                <Button size='lg'>Iniciar session</Button>
            </Stack>
        </Box>
    )
}

export function Register({setAuth}){
    return(       
        <Box width={600} borderRadius='12px' p={10} boxShadow='2xl'>
            <Text fontSize='3xl'>Registrate</Text>
            <Box mt={15}> 
                <Input placeholder='Tu usuario' p={7} width={500}/>
            </Box>
            <Box mt={5}>
                <Input placeholder='Tu Contraseña' p={7} width={500}/>
            </Box>
            <Box mt={5}>
                <Input placeholder='Repite tu Contraseña' p={7} width={500}/>
            </Box>
            <Stack mt={10} spacing={10} direction='row' justify='center'>
                <Button size='lg' onClick={() => setAuth('login')}>Iniciar sesion</Button>
                <Button size='lg'>Registrate</Button>
            </Stack>
        </Box>
    )
}