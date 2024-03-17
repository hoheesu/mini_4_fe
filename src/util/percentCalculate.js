function calculatePercentage(part, whole) {
  const percent = (part / whole) * 100;
  return percent ? Math.round(percent * 10) / 10 : 0;
}

export default calculatePercentage;
