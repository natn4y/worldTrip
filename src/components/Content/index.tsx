import { Grid, Text } from "@chakra-ui/react";
import { Infos } from "../../components/Content/Infos";

export function Content() {
  return (
    <Grid
      templateColumns={[
        "1fr",
        "1fr",
        "1fr 1fr",
        "1.2fr, 1fr",
      ]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        A Europa é, por convenção, um dos seis continentes
        do mundo. Compreendendo a península ocidental da
        Eurásia. o Cáucaso, e o mar a sudeste
      </Text>
      <Infos />
    </Grid>
  );
}
