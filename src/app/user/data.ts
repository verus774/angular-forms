import {IUser} from './IUser';
import {ILevel} from './ILevel';

export const users: IUser[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@gmail.com',
    phoneNumber: '+375297777777',
    level: 'L1',
    skills: ['CSS', 'HTML'],
    areasToRelocate: ['USA', 'Spain'],
  },
  {
    id: '2',
    firstName: 'Arthur',
    lastName: 'Dent',
    email: '42@gmail.com',
    phoneNumber: '+37529424242',
    level: 'L2',
    skills: ['CSS', 'HTML', 'Git'],
    areasToRelocate: ['France', 'Poland'],
  },
  {
    id: '3',
    firstName: 'Alex',
    lastName: 'Ivanov',
    email: 'rss@epam.com',
    phoneNumber: '+375297777777',
    level: 'L3',
    skills: ['JavaScript', 'HTML', 'Git'],
    areasToRelocate: ['Japan', 'China'],
  },
];

export const levels: ILevel[] = [
  {
    id: '1',
    title: 'L1',
    skills: ['CSS', 'HTML'],
  },
  {
    id: '2',
    title: 'L2',
    skills: ['CSS', 'HTML', 'Git'],
  },
  {
    id: '3',
    title: 'L3',
    skills: ['JavaScript', 'HTML', 'Git', 'NodeJS', 'Angular'],
  },
];
