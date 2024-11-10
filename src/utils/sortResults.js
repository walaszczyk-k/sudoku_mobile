/**
 * Function sort results (level, time, username)
 * @returns {Array} - sorted results
 */

import timeToSeconds from "./timeToSeconds";

function sortResults(results) {
  const levelOrder = {
    inhuman: 1,
    insane: 2,
    "very-hard": 3,
    hard: 4,
    medium: 5,
    easy: 6,
  };

  let sortedResults = results.sort((a, b) => {
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
  return sortedResults;
}

export default sortResults;
