import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
// when wrap like [key: string ], define index signature
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
