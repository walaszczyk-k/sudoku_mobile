/**
 * Function to convert time to seconds
 * @param {string} time - format {hh:mm:ss}
 * @returns {number} - time in seconds
 */

function timeToSeconds(time) {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export default timeToSeconds;