import { IBoard } from '../types';

export const boards: Array<IBoard> = [
  {
    id: 1,
    title: 'Board 1',
    date: '01.07.2021',
    columns: [
      {
        id: 1,
        title: 'Column 1',
        list: [
          {
            id: 1,
            text: 'Todo smth 1',
          },
          {
            id: 2,
            text: 'Todo smth 2',
          },
        ],
      },
      {
        id: 2,
        title: 'Column 2',
        list: [
          {
            id: 1,
            text: 'Todo smth 1',
          },
          {
            id: 2,
            text: 'Todo smth 2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Board 2',
    date: '01.07.2021',
    columns: [
      {
        id: 1,
        title: 'Column 1',
        list: [
          {
            id: 1,
            text: 'Todo smth 1',
          },
          {
            id: 2,
            text: 'Todo smth 2',
          },
        ],
      },
      {
        id: 2,
        title: 'Column 2',
        list: [
          {
            id: 1,
            text: 'Todo smth 1',
          },
          {
            id: 2,
            text: 'Todo smth 2',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Board 3',
    date: '01.07.2021',
    columns: [
      {
        id: 1,
        title: 'Column 1',
        list: [
          {
            id: 1,
            text: 'Todo smth 1',
          },
          {
            id: 2,
            text: 'Todo smth 2',
          },
        ],
      },
      {
        id: 2,
        title: 'Column 2',
        list: [
          {
            id: 1,
            text: 'Todo smth 1',
          },
          {
            id: 2,
            text: 'Todo smth 2',
          },
        ],
      },
    ],
  },
];
