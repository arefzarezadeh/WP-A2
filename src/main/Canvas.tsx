import { Box, type BoxProps } from '@chakra-ui/react';
import { type Dispatch, type SetStateAction } from 'react';
import { ShapeMaker } from './Shapes';

export interface Shape {
  type: string,
  x: number,
  y: number
}

interface CanvasProps extends BoxProps {
  shapes: Shape[],
  setShapes: Dispatch<SetStateAction<Shape[]>>,
  draggedShape: string
}

export const Canvas = ({shapes, setShapes, draggedShape, ...props}: CanvasProps) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();

    const shape = e.dataTransfer.getData('shape');
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 25 || y < 25 || x > rect.width - 25 || y > rect.height - 25)
      return;
  
    setShapes((prev) => [
      ...prev,
      {
        type: shape,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    ]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 25 || y < 25 || x > rect.width - 25 || y > rect.height - 25) {
      e.dataTransfer.dropEffect = 'none';
    } else {
      e.dataTransfer.dropEffect = 'copy';
    }
  
    e.preventDefault();
  };

  return (
    <Box
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      backgroundColor="#f0f0f0"
      {...props}
    >
      {shapes.map((s, idx) => {
        return (
          <ShapeMaker
            key={idx}
            position='absolute'
            name={s.type}
            left={s.x - 25}
            top={s.y - 25 + 0.08 * window.innerHeight}
            onDoubleClick={() => {
              setShapes(prev => prev.filter((_, i) => i !== idx));
            }}
          />
        );
      })}

    </Box>
  );
};
