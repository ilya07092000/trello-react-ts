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
    this.updateLocalStorage();
  }

  editBoard(id: number, title: string) {
    const currBoard: any = this.boards.find((b) => b.id === id);
    currBoard.title = title;
    this.updateLocalStorage();
  }

  deleteBoard(id: number) {
    this.boards = this.boards.filter((b) => b.id !== id);
    this.updateLocalStorage();
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
    this.updateLocalStorage();
  }

  createNewCol(boardId: number, col: any) {
    const boardById: IBoard | undefined = this.getBoardById(boardId);
    boardById?.columns.push(col);
    this.updateLocalStorage();
  }

  deleteTaskById(colIndex: number, taskIndex: number, boardId: number) {
    const currBoard = this.getBoardById(boardId);
    if (currBoard) {
      currBoard.columns[colIndex].list.splice(taskIndex, 1);
    }
    this.updateLocalStorage();
  }

  addTaskById(
    colIndex: number,
    dropIndex: number,
    task: ITask,
    boardId: number
  ) {
    const currBoard = this.getBoardById(boardId);

    if (currBoard) {
      currBoard.columns[colIndex].list.splice(dropIndex + 1, 0, task);
    }
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('trelloBoards', JSON.stringify(this.boards));
  }
}

export default new Boards();
