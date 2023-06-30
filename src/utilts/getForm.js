export const getForm = (text) => {
  switch (text) {
    case "Full time":
      return "full";
    case "Half time":
      return "half";
    case "Part time":
      return "part";
    default:
      return "all";
  }
};
