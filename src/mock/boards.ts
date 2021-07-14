import { IBoard } from '../types';

export const boards: Array<IBoard> = JSON.parse(
  localStorage.getItem('trelloBoards') || '[]'
);
