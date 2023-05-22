import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import "../css/Detail.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      console.log(json);
      setMovie(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1 className="Loading_title">MOVIE</h1>
      ) : (
        <div>
          <div className="Color_Box"></div>
          <div className="Detail_BackImg_Box">
            {movie && (
              <img
                className="Detail_BackImg"
                src={movie.background_image}
                alt={movie.title}
              />
            )}
          </div>

          <div className="Dashboard">
            <div className="div22">
              <span className="span1">영화 상세보기</span>

              <Link to={`/movie_react`}>
                <button className="button2">
                  <AiOutlineHome />
                </button>
              </Link>
            </div>

            {movie && (
              <img
                className="Detail_Img"
                src={movie.medium_cover_image}
                alt={movie.title}
              />
            )}
            <div className="Detail_TRGD">
              <h2 className="Detail_Title">
                {movie && <div>{movie.title}</div>}
              </h2>
              <p className="Detail_Rating">평점 : {movie && movie.rating}점</p>
              <p className="Detail_Genres">장르 : {movie && movie.genres}</p>
              <span className="Detail_Description">
                {movie && movie.description_full}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
