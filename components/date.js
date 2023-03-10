import { format, parseISO } from "date-fns";

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL dd, yyyy")}</time>;
};

export default Date;
