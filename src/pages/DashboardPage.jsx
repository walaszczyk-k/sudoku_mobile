import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import sortResults from "../utils/sortResults";
import ResultsTable from "../components/ResultsTable.jsx";

const DashboardPage = () => {
  const [results, setResults] = useState([]);
  // [{"username":"KAROL","difficulty_level":"easy","check_number":3,"time":"00:02:14"},
  //   {"username":"KAROL","difficulty_level":"medium","check_number":3,"time":"00:02:14"},
  //   {"username":"KAROL","difficulty_level":"medium","check_number":3,"time":"00:03:14"},
  //   {"username":"KAROLA","difficulty_level":"insane","check_number":3,"time":"00:02:14"},
  //   {"username":"KAROLA","difficulty_level":"insane","check_number":3,"time":"00:02:15"},
  //   {"username":"KAROLEK","difficulty_level":"insane","check_number":3,"time":"00:02:15"}]
  const loadResults = () => {
    const stored = JSON.parse(localStorage.getItem("lsResults")) || [];
    return stored.length ? sortResults(stored) : [];
  };

  useEffect(() => {
    setResults(loadResults());
  }, []);

  const clearResults = () => {
    localStorage.setItem("lsResults", JSON.stringify([]));
    setResults([]);
  };

  const tableHeaders = ["Username", "Difficulty level", "Check Number", "Time"];

  return (
    <section className="main" style={{ overflow: "hidden", height: "100dvh" }}>
      <Header />
      <div className="main__content_container">
        <h2 className="main__content_container__header">Dashboard</h2>
        <div className="main__content_container__box">
          {results.length === 0 ? (
            <h3 className="main__content_container__box__header">
              No results.
            </h3>
          ) : (
            <>
              <button className="button" onClick={clearResults}>
                Clear results
              </button>
              <ResultsTable tableHeaders={tableHeaders} results={results} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
