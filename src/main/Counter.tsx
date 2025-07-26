import { Flex, type FlexProps } from "@chakra-ui/react";
import type { Shape } from "./Canvas";
import { Circle, Rectangle, Triangle } from "./Shapes";

interface CounterProps extends FlexProps {
  shapes: Shape[]
}

const Counter = ({ shapes, ...props }: CounterProps)  => {
  const count: Record<string, number> = {};
  shapes.forEach((value) => {
    if (value.type in count)
      count[value.type]++;
    else
    count[value.type] = 1;
  });
  return (
    <Flex justify="space-evenly" align="center" {...props}>
      <Flex align="center" gap={4}>
        <Triangle />
        {count['triangle'] | 0}
      </Flex>
      
      <Flex align="center" gap={4}>
        <Rectangle />
        {count['rectangle'] | 0}
      </Flex>
      
      <Flex align="center" gap={4}>
        <Circle />
        {count['circle'] | 0}
      </Flex>
    </Flex>
  );
};

export default Counter;