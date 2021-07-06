import { makeAutoObservable } from 'mobx';
import { boards } from '../mock/boards';
import { IBoard, ITask } from '../types';

class Boards {
  boards = boards;

  constructor() {
    makeAutoObservable(this);
  }

  addBoard(board: IBoard) {
    this.boards.push(board);
  }

  editBoard(id: number, title: string) {
    const currBoard: any = this.boards.find((b) => b.id === id);
    currBoard.title = title;
  }

  deleteBoard(id: number) {
    this.boards = this.boards.filter((b) => b.id !== id);
  }

  getBoardById(id: number): IBoard | undefined {
    return this.boards.find((b) => b.id === id);
  }

  addNewTask(boardId: number, columnId: number, task: ITask) {
    const boardById: IBoard | undefined = this.getBoardById(boardId);

    if (boardById) {
      const col = boardById.columns.find((col: any) => col.id === columnId);
      col.list.push(task);
    }
  }
}

export default new Boards();
