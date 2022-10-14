export const getForm = (text) => {
  switch (text) {
    case "Full time":
      return "fullDay";
    case "Half time":
      return "flexible";
    case "Part time":
      return "shift";
    default:
      return "all";
  }
};
