import React, { useEffect, useState } from "react";
import { getJoke } from "../../services/ChuckNorrisService";
import { Spinner } from "react-bootstrap";
import "../../styles/JokeComponent.scss";

export const JokeComponent = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState(0);
  const [noLike, setNoLike] = useState(0);
  const [likeJokes, setLikeJokes] = useState([]);

  useEffect(() => {
    obtainJoke();
  }, []);

  const obtainJoke = async () => {
    try {
      setLoading(true);
      const response = await getJoke();
      setJoke(response);
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const changeLike = () => {
    setLike(like + 1);
    pushNewJoke(joke);
    console.log("like");
  };

  const changeNoLike = () => {
    setNoLike(noLike + 1);
    console.log("no like");
  };

  const pushNewJoke = (joke) => {
    const tmp = [...likeJokes];
    tmp.push(joke);
    setLikeJokes(tmp);
  };

  return (
    <div className="text-center">
      <article className="position-relative h3" style={{ top: -50 }}>
        <h3 className="text-center fw-bold">Joke Chucknorris</h3>
        <div className="d-flex justify-content-around">
          <span className="pointer text-like">
            <span>Counter Like {like}</span>
          </span>
          <span className="pointer text-no-like">
            <span>Counter Dont Like {noLike}</span>
          </span>
        </div>
      </article>
      {loading ? (
        <Spinner />
      ) : (
        <div className="card text-dark p-3">
          <div className="d-flex justify-content-around">
            <span className="pointer icon-like" onClick={changeLike}>
              <i className="bi bi-suit-heart-fill  h1"></i>
              <span className="text-dark">like</span>
            </span>
            <span className="pointer icon-no-like" onClick={changeNoLike}>
              <i className="bi bi-shield-slash-fill h1"></i>
              <span className="text-dark">Dont like</span>
            </span>
          </div>
          <div className="card-header">Id: {joke.id}</div>
          <div className="card-body">
            <h4 className="fw-bold text-center">{joke.value}</h4>
            <img src={joke.icon_url} alt={joke.icon_url} />
          </div>
          <div>
            <button className="btn btn-primary" onClick={obtainJoke}>
              Get new joke
            </button>
          </div>
        </div>
      )}
      <div className="card mt-3 text-dark">
        <div className="card-header"><h3 className="fw-bold">Jokes Like</h3></div>
        <div className="card-body">
          {likeJokes.map((j,indx) => {
            return (
              <article key={indx} className="border border-dark rounded p-2 m-3">
                <h4 className="fw-bold text-center">{j.id}</h4>
                <h4 className="fw-bold text-center">{j.value}</h4>
                <img src={j.icon_url} alt={j.icon_url} />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
