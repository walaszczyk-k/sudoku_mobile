import React from "react";

const ResultsTable = ({ tableHeaders, results }) => {
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map(
          ({ username, difficulty_level, check_number, time }, idx) => (
            <tr key={`${username}-${difficulty_level}-${time}-${idx}`}>
              <td>{username}</td>
              <td>{difficulty_level}</td>
              <td>{check_number}</td>
              <td>{time}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default React.memo(ResultsTable);
