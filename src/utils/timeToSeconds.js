function timeToSeconds(time) {
  if (!time) return 0;
  const parts = time.split(":").map(Number);
  const [hours = 0, minutes = 0, seconds = 0] = parts;

  return hours * 3600 + minutes * 60 + seconds;
}

export default timeToSeconds;
