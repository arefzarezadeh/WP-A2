import { Stack, type StackProps } from "@chakra-ui/react";
import { Rectangle, Triangle, Circle } from "./Shapes";
import type { Dispatch, SetStateAction } from "react";

interface SidebarProps extends StackProps {
  setDraggedShape: Dispatch<SetStateAction<string>>,
};

export const Sidebar = ({setDraggedShape, ...props}: SidebarProps) => {
  const handleDragStart = (e: React.DragEvent, shapeType: string) => {
    e.dataTransfer.setData('shape', shapeType);
  
    const ghost = document.createElement('div');
    ghost.style.position = 'absolute';
    ghost.style.top = '-1000px';
    ghost.style.left = '-1000px';
  
    if (shapeType === 'rectangle') {
      ghost.style.width = '50px';
      ghost.style.height = '50px';
      ghost.style.background = 'red';
    } else if (shapeType === 'circle') {
      ghost.style.width = '50px';
      ghost.style.height = '50px';
      ghost.style.background = 'orange';
      ghost.style.borderRadius = '50%';
    } else if (shapeType === 'triangle') {
      ghost.style.width = '0px';
      ghost.style.height = '0px';
      ghost.style.borderLeft = '25px solid transparent';
      ghost.style.borderRight = '25px solid transparent';
      ghost.style.borderBottom = '50px solid green';
    }
  
    document.body.appendChild(ghost);
    setDraggedShape(shapeType);
    e.dataTransfer.setDragImage(ghost, 25, 25);
  
    setTimeout(() => {
      document.body.removeChild(ghost);
    }, 0);
  };

  return (
    <Stack gap={4} {...props}>
      <Rectangle 
        draggable
        onDragStart={(e) => handleDragStart(e, 'rectangle')}
      />
      <Circle 
        draggable
        onDragStart={(e) => handleDragStart(e, 'circle')}
      />
      <Triangle
        draggable
        onDragStart={(e) => handleDragStart(e, 'triangle')}
      />
    </Stack>
  );
};
