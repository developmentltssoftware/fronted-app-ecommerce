import React from "react";
import pizza from "../../../assets/img/pizza.jpg";
import { Image, ImageProps } from "@chakra-ui/react";
interface IimageModalProps extends ImageProps {

}
export const ImageModal: React.FC<IimageModalProps> = (props:IimageModalProps) => {
    return (
      <Image
        objectFit="cover"
        maxW={{
          base: "100%",
          sm: "100%",
        }}
        w={{
          base: "100%",
          sm: "100%",
          md: "270px",
          lg: "270px",
          xl: "270px",
        }}
        maxH={{
          base: "100%",
          sm: "100vh",
        }}
        src={props.src ? props.src : `${pizza}`}
        alt="Caffe Latte"
        borderRadius={15}
      />
    );
}