import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

interface Genres{
    id: number;
    name: string;
}
 
interface FetchGenresResponse{
    count : number;
    results: Genres[];

}

const useGenres = ()=>{

    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState("");4
    const[isloading, setLoading] = useState(false);
  
    useEffect(() => {

        const controller = new AbortController();
        setLoading(true);

      apiClient
        .get<FetchGenresResponse>("/genres", {signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
          } );

        return()=>controller.abort();
    },[]);

    return{ genres, error, isloading};}

export default useGenres;