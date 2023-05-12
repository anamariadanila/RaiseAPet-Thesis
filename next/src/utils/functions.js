export const imageAvailable = (imageURL, func) => {
  const image = new Image();
  image.onload = () => func(true);
  image.onerror = () => func(false);
  image.src = imageURL;
  if (image.complete) func(true);
};

export const days = (date) => {
  const today = Date.now();
  const deadline = new Date(date).getTime();
  const diff = deadline - today;
  const daysLeft = Math.ceil(diff / (1000 * 3600 * 24));
  return daysLeft.toFixed(0);
};

export const daysLeft = (deadline) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

export const barPercentage = (goal, amonutRaised) => {
  const per = Math.round((amonutRaised * 100) / goal);
  return per;
};

export const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

export const daysRemaining = (days) => {
  const todaysDate = moment();
  days = Number((days + "000").slice(0));
  days = moment(days).format("YYYY-MM-DD");
  days = moment(days);
  days = days.diff(todaysDate, "days");
  return days == 1 ? "1 day" : days + " days";
};
