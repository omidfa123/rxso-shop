import { Box, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';

const Products = () => {
  const [active, setActive] = useState();
  return (
    <Box h="100%">
      <SimpleGrid
        columns={6}
        spacing={2}
        h={'87%'}
        overflow="auto"
        pl={'10px'}
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
            background: '#B6C5DC',
            borderRadius: '7px',
            opacity: '0.5',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#879DBF',
            borderRadius: '7px',
            opacity: '0.7',
            borderRight: 'none',
            borderLeft: 'none',
          },
          ' &::-webkit-scrollbar-track-piece:end': {
            background: '#B6C5DC',
            borderRadius: '7px',
            opacity: '0.5',
            marginBottom: '-82px',
          },
        }}
      >
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item, index) => (
          <Box key={index}>
            <Box
              bg="white"
              w="100%"
              h="273px"
              borderRadius={2}
              onClick={() => {}}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
