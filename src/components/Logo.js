import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text
        fontWeight="bold"
        fontFamily="dancingScript"
        align="center"
        fontSize="3xl"
      >
        &lt; Dinesh Shinde /&gt;
      </Text>
    </Box>
  );
}
