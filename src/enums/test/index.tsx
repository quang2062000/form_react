export type Order = "asc" | "desc";

export interface Data {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

export enum ColumnData {
  Id = "id",
  Calories = "calories",
  Carbs = "carbs",
  Fat = "fat",
  Name = "name",
  Protein = "protein",
}

export function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return { id, name, calories, fat, carbs, protein };
}
export const rows = [
  createData(1, "a", 305, 3.7, 67, 4.3),
  createData(2, "b", 452, 25.0, 51, 4.9),
  createData(3, "c", 262, 16.0, 24, 6.0),
  createData(4, "d", 159, 6.0, 24, 4.0),
  createData(5, "e", 356, 16.0, 49, 3.9),
  createData(6, "f", 408, 3.2, 87, 6.5),
  createData(7, "i", 237, 9.0, 37, 4.3),
  createData(8, "k", 375, 0.0, 94, 0.0),
  createData(9, "l", 518, 26.0, 65, 7.0),
  createData(10, "m", 392, 0.2, 98, 0.0),
  createData(11, "n", 318, 0, 81, 2.0),
  createData(12, "x", 360, 19.0, 9, 37.0),
  createData(13, "y", 437, 18.0, 63, 4.0),
];

export enum ListCvTagStatusEnum {
  Apply = "APPLY",
  FailCV = "FAIL_CV",
  Test = "TEST",
  FailTest = "FAIL_TEST",
  InterviewRound1 = "INTERVIEW_ROUND1",
  InterviewRound2 = "INTERVIEW_ROUND2",
  InterviewRound3 = "INTERVIEW_ROUND3",
  InterviewRound4 = "INTERVIEW_ROUND4",
  FailInterviewRound1 = "FAIL_INTERVIEW_ROUND1",
  FailInterviewRound2 = "FAIL_INTERVIEW_ROUND2",
  FailInterviewRound3 = "FAIL_INTERVIEW_ROUND3",
  FailInterviewRound4 = "FAIL_INTERVIEW_ROUND4",
  DealOffer = "DEAL_OFFER",
  CancelOffer = "CANCEL_OFFER",
  ApplyOffer = "APPLY_OFFER",
  CancelApply = "CANCEL_APPLY",
  CustomersStopHiring = "CUSTOMERS_STOP_HIRING",
}

export enum StatusLabelEnum {
  Apply = "Ứng tuyển",
  FailCV = "Fail CV",
  Test = "Làm test",
  FailTest = "Fail test",
  InterviewRound1 = "Phỏng vấn vòng 1",
  InterviewRound2 = "Phỏng vấn vòng 2",
  InterviewRound3 = "Phỏng vấn vòng 3",
  InterviewRound4 = "Phỏng vấn vòng 4",
  FailInterviewRound1 = "Trượt phỏng vấn vòng 1",
  FailInterviewRound2 = "Trượt phỏng vấn vòng 2",
  FailInterviewRound3 = "Trượt phỏng vấn vòng 3",
  FailInterviewRound4 = "Trượt phỏng vấn vòng 4",
  DealOffer = "Deal offer",
  CancelOffer = "Cancel offer",
  ApplyOffer = "Apply Offer",
  CancelApply = "Cancel apply",
  CustomersStopHiring = "Khách hàng ngừng tuyển dụng",
}

export const statusOptions = [
  {
    label: StatusLabelEnum.Apply,
    value: ListCvTagStatusEnum.Apply,
  },
  {
    label: StatusLabelEnum.FailCV,
    value: ListCvTagStatusEnum.FailCV,
  },
  {
    label: StatusLabelEnum.Test,
    value: ListCvTagStatusEnum.Test,
  },
  {
    label: StatusLabelEnum.FailTest,
    value: ListCvTagStatusEnum.FailTest,
  },
  {
    label: StatusLabelEnum.InterviewRound1,
    value: ListCvTagStatusEnum.InterviewRound1,
  },
  {
    label: StatusLabelEnum.InterviewRound2,
    value: ListCvTagStatusEnum.InterviewRound2,
  },
  {
    label: StatusLabelEnum.InterviewRound3,
    value: ListCvTagStatusEnum.InterviewRound3,
  },
  {
    label: StatusLabelEnum.InterviewRound4,
    value: ListCvTagStatusEnum.InterviewRound4,
  },
  {
    label: StatusLabelEnum.FailInterviewRound1,
    value: ListCvTagStatusEnum.FailInterviewRound1,
  },
  {
    label: StatusLabelEnum.FailInterviewRound2,
    value: ListCvTagStatusEnum.FailInterviewRound2,
  },
  {
    label: StatusLabelEnum.FailInterviewRound3,
    value: ListCvTagStatusEnum.FailInterviewRound3,
  },
  {
    label: StatusLabelEnum.FailInterviewRound4,
    value: ListCvTagStatusEnum.FailInterviewRound4,
  },
  {
    label: StatusLabelEnum.DealOffer,
    value: ListCvTagStatusEnum.DealOffer,
  },
  {
    label: StatusLabelEnum.CancelOffer,
    value: ListCvTagStatusEnum.CancelOffer,
  },
  {
    label: StatusLabelEnum.ApplyOffer,
    value: ListCvTagStatusEnum.ApplyOffer,
  },
  {
    label: StatusLabelEnum.CancelApply,
    value: ListCvTagStatusEnum.CancelApply,
  },
  {
    label: StatusLabelEnum.CustomersStopHiring,
    value: ListCvTagStatusEnum.CustomersStopHiring,
  },
];
