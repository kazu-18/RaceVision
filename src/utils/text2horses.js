const text2horses = (text) => {
    let horses = [];
    let match;

    const regex1 = /(\d+)\s+(\d+)\s+[-◎◯▲△☆✓消]+\s+([^ ]+)/g;

    while ((match = regex1.exec(text)) !== null) {
      // console.log(match);
      horses.push({
        bracketNum: parseInt(match[1]),
        horseNum: parseInt(match[2]),
        name: match[3],
      });
    }

    if (horses.length === 0) {
      const regex2 = /(\d+)\t+(\d+)\t\t\s([^1-9 ]+)/g;

      while ((match = regex2.exec(text)) !== null) {
        // console.log(match);
        horses.push({
          bracketNum: parseInt(match[1]),
          horseNum: parseInt(match[2]),
          name: match[3],
        });
      }
    }

    return horses;
  };

  export default text2horses;