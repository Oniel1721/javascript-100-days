const SELECTORS = {
  count: "main",
};

const $count = document.querySelector(SELECTORS.count);

function calcFullTimeByMls(mls) {
  const days = Math.floor(mls / (1000 * 60 * 60 * 24));
  const hours = Math.floor((mls % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((mls % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((mls % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function parseTimeArgs(strings, ...args) {
  let result = "";
  strings.forEach((string, index) => {
    const arg = args[index];
    result += string;
    if (arg !== undefined) {
      result += `${arg < 10 ? `0${arg}` : arg}`;
    }
  });
  return result;
}

function renderTime(fullTime) {
  const { days, hours, minutes, seconds } = fullTime;
  $count.innerHTML = parseTimeArgs`${days} Days ${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
  const currentDate = new Date();
  const newYearDate = new Date(`1-1-${currentDate.getFullYear() + 1}`);
  const diff = newYearDate.getTime() - currentDate.getTime();
  const fullTime = calcFullTimeByMls(diff);
  renderTime(fullTime);
}, 1000);
