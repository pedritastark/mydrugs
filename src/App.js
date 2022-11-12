import { Flex, Heading, VStack } from "@chakra-ui/react";

function App() {
  return (
   <div className="App">
      <VStack p = {5}>
        <Flex w = "100%">
          <Heading
            ml={8} size="md" fontWeight={"semibold"} color="cyan.400">Nombre Marca</Heading>

        </Flex>
      </VStack>
   </div>
  );
}

export default App;
