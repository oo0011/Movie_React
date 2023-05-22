import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../css/Movie.css";

function Movie({ coverImg, title, id }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="movie_Box">
      <div
        className="image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="Movie_Img" src={coverImg} alt={title} />
        <Link to={`/movie/${id}`}>
          {isHovered && <button className="button">상세보기</button>}
        </Link>
      </div>

      <h2 className="Movie_Title">
        {title.length > 15 ? `${title.slice(0, 15)}..` : title}
      </h2>
    </div>
  );
}

export default Movie;
