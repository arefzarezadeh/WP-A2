import { Box, type BoxProps } from "@chakra-ui/react";

interface ShapeProps extends BoxProps {
  name: string
}

export const ShapeMaker = ({name, ...props}: ShapeProps) => {
  switch (name) {
    case 'rectangle': return <Rectangle {...props} />;
    case 'triangle': return <Triangle {...props} />;
    case 'circle': return <Circle {...props} />;
  }
};

export const Rectangle = ({...props}: BoxProps) => {
  return (
    <Box
      width='50px'
      height='50px'
      background='red'
      {...props}
    />
  );
};

export const Circle = ({...props}: BoxProps) => {
  return (
    <Box 
      width='50px'
      height='50px'
      background='orange'
      borderRadius='50%'
      {...props}
    />
  );
};

export const Triangle = ({...props}: BoxProps) => {
  return (
    <Box 
      width='0px'
      height='0px'
      borderLeft='25px solid transparent'
      borderRight='25px solid transparent'
      borderBottom='50px solid green'
      {...props}
    />
  );
};