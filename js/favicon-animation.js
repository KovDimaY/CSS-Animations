const FAVICON_SIZE = 32;
const PADDING_SIZE = 4;
const TIME_INTERVAL = 300;
const COLORS = [
  { background: "#f44336", text: "white" },
  { background: "#e91e63", text: "white" },
  { background: "#9c27b0", text: "white" },
  { background: "#673ab7", text: "white" },
  { background: "#3f51b5", text: "white" },
  { background: "#2196f3", text: "white" },
  { background: "#03a9f4", text: "white" },
  { background: "#00bcd4", text: "white" },
  { background: "#009688", text: "white" },
  { background: "#4caf50", text: "black" },
  { background: "#8bc34a", text: "black" },
  { background: "#cddc39", text: "black" },
  { background: "#ffeb3b", text: "black" },
  { background: "#ffc107", text: "black" },
  { background: "#ff9800", text: "black" },
];
const TEXT = "CSSANIMATIONS";

const drawAnimation = (context, iteration) => {
  const { background, text } = COLORS[iteration % COLORS.length];

  context.fillStyle = background;
  context.fillRect(0, 0, FAVICON_SIZE, FAVICON_SIZE);

  context.font = `${FAVICON_SIZE - PADDING_SIZE * 2}px Arial`;
  context.textAlign = "center";
  context.fillStyle = text;
  context.fillText(
    TEXT[iteration % TEXT.length],
    FAVICON_SIZE / 2,
    FAVICON_SIZE - PADDING_SIZE * 2
  );
};

const windowLoadHandler = () => {
  const favicon = document.querySelector('link[rel="icon"]');
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  if (context) {
    let iteration = 0;

    drawAnimation(context, iteration);
    favicon.href = canvas.toDataURL("image/png");

    setInterval(() => {
      drawAnimation(context, iteration);
      favicon.href = canvas.toDataURL("image/png");
      iteration += 1;
    }, TIME_INTERVAL);
  }
};

window.onload = windowLoadHandler;
