import { Flex, Image, useBreakpointValue, Text, List, ListItem } from "@chakra-ui/react";

type CaracteristicaProps = {
  icon: string;
  text: string;
};

export function Caracteristica({ icon, text }: CaracteristicaProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <>
          <Image
            src={`/assets/${icon}.svg`}
            alt="icone"
            w="82px"
            h="82px"
            mb="6"
          />
          <Text
            fontWeight="600"
            color="gray.700"
            fontSize={["md", "xl", "2xl"]}
          >
            {text}
          </Text>
        </>
      ) : (
        <>
          <List>
            <ListItem
              fontWeight="600"
              color="gray.700"
              fontSize={["md", "xl", "2xl"]}
              _before={{
                content: '"\u2022"',
                position: "relative",
                top: "1",
                mr: "2",
                fontSize: "2xl",
                color: "yellow.400",
              }}
            >
              {text}
            </ListItem>
          </List>
        </>
      )}
    </Flex>
  );
}
