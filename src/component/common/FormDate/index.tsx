import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { DateRange, DateRangeProps, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useStyles } from "./styles";
import moment from "moment";
import {
  dateToTimeStampMilisenconds,
  FormatDateEnum,
  formatMiliSecondsToDate,
} from "../../../utils/date";
import dateUtils from "../../../utils/date";

export interface FormDateProps extends DateRangeProps {
  startDateNow: number;
  endDateNow: number;
  maxDate?: any;
  minDate?: any;
  openReportByJob?: boolean;
  handleChangeParams: (startTime: number, endTime: number) => void;
  openFormReportByJob?: () => void;
  openFormApplyCvByTime?: () => void;
  openApplyCvByTime?: boolean;
  openFormCvLevel?: () => void;
  openCvLevel?: boolean;
  openApplyCvBySource?: boolean;
  openFormApplyCvBySource?: () => void;
}

export const DEFAULT_DATE_KEY = "selection";

export default function FormDate({
  maxDate,
  startDateNow,
  endDateNow,
  openFormReportByJob,
  openReportByJob,
  handleChangeParams,
  openApplyCvByTime,
  openFormApplyCvByTime,
  openFormCvLevel,
  openFormApplyCvBySource,
  openApplyCvBySource,
  openCvLevel,
  minDate,
  onChange,
}: FormDateProps) {
  const classes = useStyles();
  const defaultStateDate = useMemo(() => {
    return {
      startDate: null,
      endDate: null,
      key: DEFAULT_DATE_KEY,
    };
  }, []);
  const [state, setState] = useState<any>([defaultStateDate]);
  const [startDateDefault, setStartDateDefault] = useState<string>("");
  const [endDateDefault, setEndDateDefault] = useState<string>("");

  const convertDateToTimeStamp = useMemo(() => {
    return (value: any) => {
      const myDate = value.split("/");
      const newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
      return newDate.getTime();
    };
  }, []);

  const convertDate = useMemo(() => {
    return (startDate: any, endDate: any) => {
      const startDateMilisenconds = dateToTimeStampMilisenconds(startDate);
      const formatStartDate = formatMiliSecondsToDate(
        parseInt(startDateMilisenconds),
        FormatDateEnum.DD_MM_YYYY
      );
      const endDateMilisenconds = dateToTimeStampMilisenconds(endDate);
      const formatEndDate = formatMiliSecondsToDate(
        parseInt(endDateMilisenconds),
        FormatDateEnum.DD_MM_YYYY
      );
      return { formatStartDate, formatEndDate };
    };
  }, []);

  useEffect(() => {
    setStartDateDefault(
      formatMiliSecondsToDate(startDateNow, FormatDateEnum.DD_MM_YYYY)
    );
    setEndDateDefault(
      formatMiliSecondsToDate(endDateNow, FormatDateEnum.DD_MM_YYYY)
    );
    const data = convertDate(state[0].startDate, state[0].endDate);
    if (data.formatStartDate !== data.formatEndDate) {
      handleChangeParams(
        convertDateToTimeStamp(data.formatStartDate),
        convertDateToTimeStamp(data.formatEndDate)
      );
    }
  }, [
    handleChangeParams,
    startDateNow,
    endDateNow,
    convertDate,
    convertDateToTimeStamp,
    state,
  ]);

  const handleChange = useCallback(
    (range: any) => {
      if (onChange) {
        onChange(range);
      }
    },
    [onChange]
  );

  const onChangeValue = useCallback(
    (value: any) => {
      const range: Range | undefined = value[DEFAULT_DATE_KEY];
      if (range && range.startDate && range.endDate) {
        if (
          range.startDate &&
          minDate &&
          moment(range.startDate).isBefore(minDate)
        ) {
          range.startDate = new Date(minDate);
        }
        if (
          range.endDate &&
          maxDate &&
          moment(range.endDate).isAfter(maxDate)
        ) {
          range.endDate = new Date(maxDate);
        }
        setState([range]);
        range.startDate = dateUtils.getDate(range.startDate);
        range.endDate = dateUtils.getDate(range.endDate);
        if (moment(range.startDate).isSame(range.endDate, "day")) {
          return;
        }
        handleChange(range);
      }

      if (openReportByJob && openFormReportByJob) {
        openFormReportByJob();
      }
      if (openApplyCvByTime && openFormApplyCvByTime) {
        openFormApplyCvByTime();
      }
      if (openCvLevel && openFormCvLevel) {
        openFormCvLevel();
      }
      if (openApplyCvBySource && openFormApplyCvBySource) {
        openFormApplyCvBySource();
      }
    },
    [
      openFormReportByJob,
      openReportByJob,
      openApplyCvByTime,
      openFormApplyCvByTime,
      openCvLevel,
      openFormCvLevel,
      openApplyCvBySource,
      openFormApplyCvBySource,
      handleChange,
      maxDate,
      minDate,
    ]
  );

  const dataDate = useMemo(() => {
    if (state[0].startDate && state[0].endDate) {
      const date = convertDate(state[0].startDate, state[0].endDate);
      return `${date.formatStartDate} - ${date.formatEndDate}`;
    }
  }, [state, convertDate]);

  const dataDefault = useMemo(() => {
    return `${startDateDefault} - ${endDateDefault}`;
  }, [startDateDefault, endDateDefault]);

  return (
    <>
      <Box className={classes.box}>
        <Grid className={classes.wrapForm}>
          <Grid className={classes.wrapButton}>
            <button
              className={classes.button}
              onClick={
                openFormReportByJob ||
                openFormApplyCvByTime ||
                openFormCvLevel ||
                openFormApplyCvBySource
              }
            >
              {dataDate ? dataDate : dataDefault}
            </button>
          </Grid>
          <Grid className={classes.wrapRange}>
            {openReportByJob ||
            openApplyCvByTime ||
            openCvLevel ||
            openApplyCvBySource ? (
              <DateRange
                onChange={onChangeValue}
                moveRangeOnFirstSelection={false}
                ranges={state}
                startDatePlaceholder="From"
                endDatePlaceholder="To"
                editableDateInputs
                maxDate={maxDate}
              />
            ) : null}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
