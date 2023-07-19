import game from "../hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={1} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
