/* eslint-disable-next-line */
export interface HeadCell<Data = any> {
  sortBy?: string;
  disablePadding?: boolean;
  label: string;
  numeric?: boolean;
  sort?: boolean;
  customBodyRender?: (value: any) => string | React.ReactNode;
  customHeaderRender?: () => React.ReactNode;
}

export interface OptionsTable<Data = any> {
  handleClickRow?: (value: Data) => void;
  isClickRow: boolean;
}

export interface BodyTableProps {
  data: any;
  page: number;
  rowsPerPage: number;
  headCells: Array<HeadCell>;
  options: OptionsTable<any>;
}
