import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";
import { Flag } from "./Flag";

export function Cities() {
  return (
    <>
      <Heading
        fontWeight="500"
        fontSize={["2xl", "4xl"]}
        mb="10"
      >
        Cidades +100
      </Heading>

      <Grid
        templateColumns={[
          "1fr",
          "1fr 1fr",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", 0]}
      >
        <City
          name="Amsterdam"
          country="Holanda"
          src="/assets/cities/Amsterdam.png"
          alt="Cidade Amsterdam"
        >
          <Flag
            src="/assets/cities/flags/Holanda.png"
            alt="Holanda"
          />
        </City>
        <City
          name="Londres"
          country="Reino Unido"
          src="/assets/cities/Londres.png"
          alt="Fotografia de Londres"
        >
          <Flag
            src="/assets/cities/flags/Reino-unido.png"
            alt="Fotografia do Reino Unido"
          />
        </City>
        <City
          name="Paris"
          country="França"
          src="/assets/cities/Paris.png"
          alt="Fotografia de Paris"
        >
          <Flag
            src="/assets/cities/flags/Italia.png"
            alt="Fotografia da Italia"
          />
        </City>
        <City
          name="Praga"
          country="República Tcheca"
          src="/assets/cities/Praga.png"
          alt="Fotografia da República Tcheca"
        >
          <Flag
            src="/assets/cities/flags/Republica-Tcheca.png"
            alt="Fotografia da Holanda"
          />
        </City>
        <City
          name="Roma"
          country="Itália"
          src="/assets/cities/Roma.png"
          alt="Fotografia de Roma"
        >
          <Flag
            src="/assets/cities/flags/Roma.png"
            alt="Fotografia de Roma"
          />
        </City>
      </Grid>
    </>
  );
}
