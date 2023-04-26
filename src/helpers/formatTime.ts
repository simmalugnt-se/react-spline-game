function formatTime(milliseconds: number) {
  // Convert milliseconds to seconds
  let totalSeconds = Math.floor(milliseconds / 1000);

  // Calculate hours, minutes, and seconds
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  let seconds = totalSeconds - hours * 3600 - minutes * 60;
  let millisecondsLeft = milliseconds - totalSeconds * 1000;

  // Format time as a string
  let formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${millisecondsLeft
    .toString()
    .padStart(2, "0")
    .substring(0, 2)}`;

  return formattedTime;
}

export default formatTime;
