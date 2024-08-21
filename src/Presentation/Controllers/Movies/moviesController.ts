import { useMoviesStore } from "@/Infrastructure/Stores/movies.store"
import moviesClient from '@/ApplicationCore/Application/Fecades/moviesClient';

// const store = useMoviesStore()
// onMounted(()=> {
//   fetchMovies()
// })

// async function  fetchMovies() {
//   await store.getMovies()
// }

class moviesController
{
  private _store = useMoviesStore();
  private _moviesClient = moviesClient;

  public async GetMovies()
  {
    //Default movies search
    await this.SearchMovie("movie")
  }

  public async SearchMovie(name: string)
  {
    const resp = await this._moviesClient.GetMovies(name);

    this._store.listMovies = resp
  }

  public async GetById(movieId: string)
  {
    const resp = await this._moviesClient.GetById(movieId);

    this._store.movie = resp
    console.log(this._store.movie.Language)
    console.log(resp)
  }
}

export default new moviesController()