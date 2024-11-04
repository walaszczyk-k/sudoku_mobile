import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  let results = JSON.parse(localStorage.getItem("lsResults")) || [];
  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };
  if (results.length > 0) {
    const levelOrder = {
      inhuman: 1,
      insane: 2,
      "very-hard": 3,
      hard: 4,
      medium: 5,
      easy: 6,
    };

    results = results.sort((a, b) => {
      if (levelOrder[a.difficulty_level] !== levelOrder[b.difficulty_level]) {
        return levelOrder[a.difficulty_level] - levelOrder[b.difficulty_level];
      }
      const timeA = timeToSeconds(a.time);
      const timeB = timeToSeconds(b.time);
      if (timeA !== timeB) {
        return timeA - timeB;
      }
      return a.username.localeCompare(b.username);
    });
  }
  // [{"username":"KAROL","difficulty_level":"easy","check_number":3,"time":"00:02:14"},
  //   {"username":"KAROL","difficulty_level":"medium","check_number":3,"time":"00:02:14"},
  //   {"username":"KAROL","difficulty_level":"medium","check_number":3,"time":"00:03:14"},
  //   {"username":"KAROLA","difficulty_level":"insane","check_number":3,"time":"00:02:14"},
  //   {"username":"KAROLA","difficulty_level":"insane","check_number":3,"time":"00:02:15"},
  //   {"username":"KAROLEK","difficulty_level":"insane","check_number":3,"time":"00:02:15"}]
  return (
    <>
      <section className="home" style={{ overflow: "auto" }}>
        <div className="home__box home__box--not_main">
          <Link
            className="reset_link home__box__header home__box__header--not_main"
            to="/"
          >
            <h1 className="home__box__header__h1 home__box__header__h1--not_main">
              Sudoku
              <span className="home__box__header__span home__box__header__span--not_main">
                game
              </span>
            </h1>
          </Link>
          <article className="home__box__article">
            <h2 className="home__box__article__header">Dashboard</h2>
            <div className="home__box__article__box">
              {!results.length ? (
                <p style={{ fontSize: "1.6rem" }}>
                  Brak wyników do wyświetlenia.
                </p>
              ) : (
                <>
                  <button
                    style={{
                      fontSize: "1.6rem",
                      margin: "10px 0",
                      padding: "8px 6px",
                      background: "transparent",
                      borderRadius: "40px",
                    }}
                    onClick={() =>
                      localStorage.setItem("lsResults", JSON.stringify([]))
                    }
                  >
                    clear results
                  </button>
                  <table>
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>Difficulty level</th>
                        <th>Check Number</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, index) => (
                        <tr key={index}>
                          <td>{result.username}</td>
                          <td>{result.difficulty_level}</td>
                          <td>{result.check_number}</td>
                          <td>{result.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
