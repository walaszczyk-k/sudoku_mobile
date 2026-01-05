import timeToSeconds from "./timeToSeconds";

const levelOrder = {
  inhuman: 1,
  insane: 2,
  "very-hard": 3,
  hard: 4,
  medium: 5,
  easy: 6,
};

function sortResults(results) {
  return results.sort((a, b) => {
    const levelDiff = levelOrder[a.difficulty_level] - levelOrder[b.difficulty_level];
    const timeDiff = timeToSeconds(a.time) - timeToSeconds(b.time);

    return levelDiff || timeDiff || a.username.localeCompare(b.username);
  });
}

export default sortResults;
