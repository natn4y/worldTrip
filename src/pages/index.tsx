import { Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner/index";
import { Caracteristicas } from "../components/Caracteristicas";
import { Separator } from "../components/Separator";
import { Slider } from "../components/Slider";

const Home: NextPage = () => {
  return (
    <>
      <Flex>
        <Header />
      </Flex>
      <Banner />
      <Caracteristicas />

      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", 14]}
        fontSize={["lg", "3xl", "4x1"]}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </>
  );
};

export default Home;
