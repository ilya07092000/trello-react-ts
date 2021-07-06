export interface IBoard {
  id: number;
  title: string;
  date: string;
  columns: any[];
};

export interface ITask {
  id: number,
  text: string;
};