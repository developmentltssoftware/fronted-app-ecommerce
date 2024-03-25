import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  CardProps,
  Text,
} from "@chakra-ui/react";
import React from "react";
import avatar from "../../assets/img/avatar.png";
interface ICardProps extends CardProps {
  buttonLabel?: string;
  text: string;
  textHeading: string;
}

export const CardDestaque: React.FC<ICardProps> = (props: ICardProps) => {
  return (
    <Card
      direction={{
        base: "column",
        sm: "row",
      }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{
          base: "100%",
          sm: "200px",
        }}
        src={`${avatar}`}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading size="md">{props.textHeading}</Heading>
          <Text py="2">{props.text}</Text>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            {props.buttonLabel}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
