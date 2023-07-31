import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genres) => (
        <>
          <ListItem key={genres.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="30px"
                borderRadius={8}
                src={getCroppedImageUrl(genres.image_background)}
              ></Image>
              <Text>{genres.name}</Text>
            </HStack>
          </ListItem>
        </>
      ))}
    </List>
  );
};

export default GenreList;
