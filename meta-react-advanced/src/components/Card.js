import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" rounded="lg" align="start">
      <Image src={imageSrc} alt={title} rounded="lg"/>
      <VStack bg="white" rounded="lg" align="start" p={4}>
        <Heading as="h3" size="sm" color="black">
          {title}
        </Heading>
        <Text color="gray.600" py={4}>{description}</Text>

        <HStack pt={2} spacing={2} color="gray.800" cursor="pointer">
          <Text fontSize="xs">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
