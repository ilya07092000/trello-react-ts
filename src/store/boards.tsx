import { makeAutoObservable } from 'mobx';
import { boards } from '../mock/boards';
import { IBoard } from '../types';

class Boards {
  boards = boards;

  constructor() {
    makeAutoObservable(this);
  }

  addBoard(board: IBoard) {
    const newBoard = {
      ...board,
      columns: []
    }
    this.boards.push(newBoard);
  }

  editBoard(id: number, title: string) {
    const currBoard: any = this.boards.find((b) => b.id === id);
    currBoard.title = title;
  }

  deleteBoard(id: number) {
    this.boards = this.boards.filter((b) => b.id !== id);
  }

  getBoardById(id: number) {
    return this.boards.find((b) => b.id === id);
  } 

  addNewTask(boardId: number, columnId: number, task: object) {
    const boardById = this.getBoardById(boardId);
    const gg = boardById!.columns!.find((col: any) => col.id === columnId);
    gg.list.push(task);
    console.log(gg);
     
  }
}

export default new Boards();
