import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
