import moment from "moment";
import { Range } from "react-date-range";

export enum FormatDateEnum {
  DD_MM_YYYY_HH_MM_a = "DD/MM/YYYY HH:MM a",
  DD_MM_YYYY = "DD/MM/YYYY",
  DD_MM_YYYY_HH_MM_SS_A = "DD/MM/YYYY h:mm:ss a",
  dd_MM_yyyy = "dd/MM/yyyy",
}

export const formatMiliSecondsToDate = (
  timestamp: number,
  format: FormatDateEnum
) => {
  return moment.unix(timestamp / 1000).format(format);
};

export const dateToTimeStampMilisenconds = (date: Date) => {
  return (moment(date).unix() * 1000).toString();
};

export const dateToTimeStamp = (date: Date) => {
  return moment(date).unix() * 1000;
};

export const timeStampToDate = (timestamp: number) => {
  return new Date(timestamp);
};

const getXDayFromDate = (xDay: number, from?: Date) => {
  const momentTime = from ? moment(from).utc() : moment().utc();
  return momentTime.startOf("day").subtract(xDay, "days").toDate();
};
const toUtcString = (timeStamp: string | number | Date, format: string) => {
  return moment(timeStamp).utc().format(format);
};
const toString = (timeStamp: string | number | Date, format: string) => {
  return moment(timeStamp).format(format);
};

const dateRangeToString = (range: Range, format = "DD MMM YYYY") => {
  if (range?.startDate && range?.endDate) {
    return `${toString(range.startDate, format)} - ${toString(
      range.endDate,
      format
    )}`;
  }
  return undefined;
};
const getDate = (date: Date) => {
  return moment(date).toDate();
};

const dateType = {
  toString,
  getXDayFromDate,
  dateRangeToString,
  toUtcString,
  getDate,
};

export default dateType;
