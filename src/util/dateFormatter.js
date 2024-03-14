const dateFormatter = (myDate) => {
  const happyNewYear = new Date(myDate);
  const year = happyNewYear.getFullYear();
  const month = happyNewYear.getMonth() + 1;
  const date = happyNewYear.getDate();

  return `${year}-${month >= 10 ? month : "0" + month}-${date >= 10 ? date : "0" + date}`;
};
export default dateFormatter;
