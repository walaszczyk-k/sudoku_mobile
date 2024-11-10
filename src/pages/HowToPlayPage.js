import Header from "../components/Header";
import ContentBox from "../components/ContentBox";

const HowToPlayPage = () => {
  const contents = [
    {
      header: "Firstly - what is Sudoku",
      content: [
        "Sudoku is a logic-based, number-placement puzzle played on a 9x9 grid divided into nine smaller 3x3 sub-grids or 'boxes.'",
        "Each puzzle begins with some numbers already filled in, known as 'givens', and the objective is to fill in the remaining empty cells so that each row, column, and 3x3 sub-grid contains all numbers from 1 to 9 exactly once.",
        "To get started, it helps to begin with the rows, columns, or 3x3 boxes that contain the most numbers. Look for the most populated areas of the grid since they offer more clues and make it easier to deduce the missing numbers. For instance, if a row already contains the numbers 1 through 7, it's easier to determine which numbers are missing and where they might fit based on the rules.",
      ],
    },
    {
      header: "How to start?",
      content: [
        "To get started, it helps to begin with the rows, columns, or 3x3 boxes that contain the most numbers. Look for the most populated areas of the grid since they offer more clues and make it easier to deduce the missing numbers. For instance, if a row already contains the numbers 1 through 7, it's easier to determine which numbers are missing and where they might fit based on the rules.",
      ],
    },
    {
      header: "Common advice and warning",
      content: [
        "Finally, while Sudoku requires patience and attention to detail, it’s important to resist guessing. Every move should be made with confidence that it’s the only option for that cell. Guessing can quickly lead to errors that are hard to trace back, complicating the puzzle. By relying on logic and consistency, you'll build a steady path toward the solution, whether you're a beginner working through the basics or an advanced player using sophisticated strategies. With practice, you'll become more adept at spotting patterns and solving even the most challenging puzzles systematically and efficiently.",
      ],
    },
    {
      header: "Set your difficult level",
      content: [
        "Remember that you can always adjust the difficulty level of the game. The default level is set to medium. Reducing the level will allow for a more enjoyable game and time to familiarize yourself with the specifics of sudoku. To change the difficulty level go to settings. Enjoy the game!",
      ],
    },
  ];
  return (
    <>
      <section className="main">
        <Header />

        <div className="main__content_container">
          <h2 className="main__content_container__header">
            How to play sudoku?
          </h2>

          {contents.map((item, idx) => {
            return (
              <div className="main__content_container__box" key={idx}>
                <ContentBox header={item.header} content={item.content} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HowToPlayPage;
