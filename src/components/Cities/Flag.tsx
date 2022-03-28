import { Image } from "@chakra-ui/react";

interface FlagProps {
  src: string;
  alt?: string;
}

export function Flag({ src, alt }: FlagProps) {
  return (
    <>
      <Image
        alt={alt}
        src={src}
        w="30px"
        objectFit="cover"
      />
    </>
  );
}
