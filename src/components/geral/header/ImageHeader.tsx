import { ImageProps, Image } from "@chakra-ui/react"
import metanoia  from "../../../assets/img/metanoia.jpg";
interface IImageProps extends ImageProps{
    label: string;
}
export const ImageHeader: React.FC<IImageProps> = (props: IImageProps) => {
    return (
      <Image
        borderRadius={20}
        boxSize={35}
        src={`${metanoia}`}
        alt={props.src ? props.src : 'image_perfil'}
      />
    );
}