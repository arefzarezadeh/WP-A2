import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';
import { Canvas, type Shape } from './Canvas';
import Header from './Header';
import { useState } from 'react';
import Counter from './Counter';

const MainPage = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [draggedShape, setDraggedShape] = useState<string>('');
  return (
    <Box h="100vh">
      <Header shapes={shapes} setShapes={setShapes} h="8%" />
      <Flex h="80%">
        <Canvas shapes={shapes} setShapes={setShapes} minW="95%" h="100%" draggedShape={draggedShape} />
        <Sidebar padding={3} minW="5%" h="100%" setDraggedShape={setDraggedShape} />
      </Flex>
      <Counter shapes={shapes} h="12%" />
    </Box>
  );
};

export default MainPage;