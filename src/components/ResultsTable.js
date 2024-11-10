const ResultsTable = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {props.tableHeaders.map((header, idx) => {
              return <th key={idx}>{header}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, idx) => (
            <tr key={idx}>
              <td>{result.username}</td>
              <td>{result.difficulty_level}</td>
              <td>{result.check_number}</td>
              <td>{result.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ResultsTable;
