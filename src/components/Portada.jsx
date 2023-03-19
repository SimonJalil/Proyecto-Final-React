import React from 'react'
import { 
    Box,
    Center,
    Image,
    Text,
    Container
} from '@chakra-ui/react'

const Portada = () => {
  return (
    <Center m={10}>
        <Box boxSize='xxl'>
            <Image src="https://image.winudf.com/v2/image1/Y29tLlRvbUphclN0dWRpby5HYW1pbmdTaG9wMkRfc2NyZWVuXzBfMTU4NjEzMzYzNF8wMjg/screen-0.jpg?fakeurl=1&type=.webp" alt="Game Store"/>
        </Box>
    </Center>
  )
}

export default Portada
