export const imageAvailable = (imageURL, func) => {
  const image = new Image();
  image.onload = () => func(true);
  image.onerror = () => func(false);
  image.src = imageURL;
  if (image.complete) func(true);
};

export const days = (date) => {
  const today = new Date().now();
  const deadline = new Date(date).getTime();
  const diff = deadline - today;
  const daysLeft = Math.ceil(diff / (1000 * 3600 * 24));
  return daysLeft.toFixed(0);
};

export const barPercentage = (goal, amonutRaised) => {
  const per = Math.round((amonutRaised * 100) / goal);
  return per;
};
