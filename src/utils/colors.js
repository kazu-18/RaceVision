const getBracketColor = (bracketNum) => {
  const bracketColor = {
    1: "#ffffff",
    2: "#444444",
    3: "#e95556",
    4: "#416cba",
    5: "#e7c52c",
    6: "#45af4c",
    7: "#ee9738",
    8: "#ef8fa0",
  };
  return bracketColor[bracketNum];
};

const getTextColor = (bracketNum) => {
  if (bracketNum === 1) {
    return "#444444";
  } else {
    return "#ffffff";
  }
};

export {getBracketColor,getTextColor};