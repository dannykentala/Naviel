import type { MovieDetailsDTO } from "@/ApplicationCore/Core/DTOs/Get/movie.details.model";
import type { MovieDTO } from "@/ApplicationCore/Core/DTOs/Get/movie.model";
import Http from "@/Infrastructure/Api/client-http";
import { defineStore } from "pinia";

// const defaultSearch: string = "movies";

export const useMoviesStore = defineStore('movies',
{
    /* 
        ## State
        El state es un estado reactivo, si llega a cambiar el state, entonces todos los 
        componentes asociados a el tambien lo haran
    */
    state: () => ({
        // Model mapping
        listMovies: [] as MovieDTO[],
        movie: {} as MovieDetailsDTO
    })
    // actions: {
    //     async getMovies(search:string)
    //     {
    //         const resp =  await Http.get('',
    //         {
    //             params:
    //             {
    //                 s: search
    //             }
    //         })
    //         this.listMovies = resp.data.Search;
    //     }
    // }
})