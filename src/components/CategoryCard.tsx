import {
  AspectRatio,
  Box,
  BoxProps,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { Category } from "../_data";
import { Link } from "react-router-dom";

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

interface Props {
  category: Category;
  rootProps?: BoxProps;
}

export const CategoryCard = (props: Props) => {
  const { category, rootProps } = props;
  return (
    <Box
      position="relative"
      key={category.name}
      borderRadius="none"
      overflow="hidden"
      {...rootProps}
    >
      <Link to={category.url}>
        <AspectRatio ratio={1 / 1}>
          <Image
            src={category.imageUrl}
            alt={category.name}
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, transparent 60%, gray.900)"
          boxSize="full"
        />
        <Box position="absolute" bottom="6" width="full" textAlign="center">
          <Text color="white" fontSize="lg" fontWeight="semibold">
            {category.name}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
