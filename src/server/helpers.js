import moment from "moment";

moment.locale("es");

const timeAgo = (timestamp) => {
  return moment(timestamp).startOf("minute").fromNow();
};

export const helpers = () => {
  return {
    timeAgo,
  };
};
