import { Flex } from '@chakra-ui/react';

import Search from './Search';

export default function Layout({ children }) {
  return (
    <Flex
      padding="2rem"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      maxW="5xl"
      margin="auto"
    >
      <Search />
      {children}
    </Flex>
  );
}