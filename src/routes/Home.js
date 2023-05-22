import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "../css/Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    await new Promise((resolve) => setTimeout(resolve, 1000)); //3초대기
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1 className="Loading_title">MOVIE</h1>
      ) : (
        <div>
          <h1 className="movie_Head">MOVIE</h1>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
