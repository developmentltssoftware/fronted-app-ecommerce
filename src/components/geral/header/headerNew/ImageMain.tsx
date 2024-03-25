import { ImageProps, Image } from "@chakra-ui/react";
import pizzaria from "../../../../assets/img/pizza-nice.jpg";
interface IImageProps extends ImageProps {
  label?: string;
}
export const ImageMain: React.FC<IImageProps> = (props: IImageProps) => {
  return (
    <Image
      borderRadius={20}
      src={`${pizzaria}`}
      alt={props.src ? props.src : "image_maranata"}
      display={{ base: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" }}
      border={"1px solid #fff"}
      w={'1200px'}
      p={1}
    />
  );
};
