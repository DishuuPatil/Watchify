import Image from "next/image";


async function getMovie(movieId){
    
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
        );
        return await response.json();
        {/*Here we returned movie to MoviePage in movie constant. */}
}

export default async function MoviePage({params}) {
    {/*For server side rendering we need to declare this function as asynchronous as we are using await inside of it.
    This params is actually movieId and we pass this id to function getMovie.*/}
    const movieId = params.id;
    const movie = await getMovie(movieId);
  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row 
        items-center content-center max-w-6xl mx-auto md:space-x-6">
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path
          }`}
            width={500} height={300}
            className="rounded-lg"
            style={
                {
                    maxWidth : "100%",
                    height: "100%",
                }
            }
            placeholder="blur" 
            blurDataURL="/Spinner.svg" 
            alt="Movie Poster"></Image>
            <div className="p-2">
                <h2 className="text-lg mb-3 font-bold ">{movie.title || movie.name}</h2>
                <p className="text-lg mb-3">
                    <span className="font-semibold mr-1">Overview:</span>
                    {movie.overview}
                </p>
                <p className="mb-3">
                    <span className="font-semibold mr-1">Date Released:</span>
                    {movie.release_date || movie.first_air_date}
                </p>
                <p className="mb-3">
                    <span className="font-semibold mr-1">Rating:</span>
                    {movie.vote_count}
                </p>
            </div>
        </div>
    </div>
  );
}
{/*using image tag we are fetching image. same as we did in Card.jsx file.
In this file we created one function called "getMovie". This function will fetch data using params i.e. movie or movieId from API url.
that results will be passed to the function MoviePage which is main function of this page. in which image or other data will be fetch using movie(return result is stored here from getMovie function) constant.
add some classes to this image display it on left side of screen for medium to large screen. adds some div's and paragraphs and span for Rating, Released date, overview and movie title.*/}
