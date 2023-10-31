export const dynamic = "force-dynamic";
import Results from "./components/Results";

const API_KEY = process.env.API_KEY
{/*This is the way we can get information from the environmental variable. and our API_KEY will be protected */}


{/*We cannot use search params here because this is server side component
We can get the search params in argument in function*/
/*we made this component as server side by adding async to its function name. 
We can do this in next.js 13 and above not in react for making component as server side  
The searchParams in the code might be referring to the query parameters or URL parameters
*/}
export default async function Home({searchParams}) {
  {/*If there is no genre then use fetchTending/fetchTopRated */}

  {/*The url will be dynamic because we want to fetch trending or topRated 
  depending on genre we want to change the url. 
  But the Base url will be this below one, which is inside fetch(" ")*/}

  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(`https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {next: {revalidate: 10000}} 
    );

    if(!res.ok)
    {
      throw new Error("Failed to fetch data");
    {/*this will be caught by the error page and passed to the page as props*/}
    }
    const data = await res.json();
    const results = data.results;

    //console.log(results);

  return (
    <div><Results results={results} /></div>
  );
}
