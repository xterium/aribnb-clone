import { format } from "date-fns";

const useDateFormatter = (date) => {
  return format(new Date(date), "dd MMMM yyyy");
};

export default useDateFormatter;
