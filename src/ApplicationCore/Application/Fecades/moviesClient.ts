import Http from "@/Infrastructure/Api/client-http";

class moviesClient
{
  public async GetMovies(search: string)
  {
    const resp =  await Http.get('',
    {
      params:
      {
        s: search
      }
    })

    return resp.data.Search
  }

  public async GetById(movieId: string)
  {
    const resp =  await Http.get('',
    {
      params:
      {
        i: movieId
      }
    })

    return resp.data
  }
}

export default new moviesClient()