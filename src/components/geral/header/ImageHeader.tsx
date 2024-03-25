import { ImageProps, Image } from "@chakra-ui/react"
import avatar  from "../../../assets/img/avatar.png";
interface IImageProps extends ImageProps{
    label: string;
}
export const ImageHeader: React.FC<IImageProps> = (props: IImageProps) => {
    return (
      <Image
        borderRadius={20}
        boxSize={35}
        src={`${avatar}`}
        alt={props.src ? props.src : 'image_perfil'}
      />
    );
}