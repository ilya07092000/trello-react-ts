import { makeAutoObservable } from 'mobx';
import { boards } from '../mock/boards';

class Boards {
  boards = boards;

  constructor() {
    makeAutoObservable(this);
  }

  addBoard(board: any) {
    this.boards.push(board);
  }
};

export default new Boards();