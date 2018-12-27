import {IUser} from './models/IUser';
import {ILevel} from './models/ILevel';
import {IArea} from './models/IArea';

export const users: IUser[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@gmail.com',
    phoneNumber: '+37529-777-77-77',
    level: 'L1',
    skills: ['CSS', 'HTML'],
    isReadyToRelocate: false,
    areasToRelocate: [],
  },
  {
    id: '2',
    firstName: 'Arthur',
    lastName: 'Dent',
    email: '42@gmail.com',
    phoneNumber: '+37529-424-42-42',
    level: 'L2',
    skills: ['CSS', 'Git'],
    isReadyToRelocate: true,
    areasToRelocate: ['France', 'Poland'],
  },
  {
    id: '3',
    firstName: 'Alex',
    lastName: 'Ivanov',
    email: 'rss@epam.com',
    phoneNumber: '+37529-777-77-77',
    level: 'L3',
    skills: ['JavaScript', 'HTML', 'Angular'],
    isReadyToRelocate: false,
    areasToRelocate: [],
  },
  {
    id: '4',
    firstName: 'Robert',
    lastName: 'Smith',
    email: 'rss@epam.com',
    phoneNumber: '+37529-777-77-77',
    level: 'L3',
    skills: ['JavaScript', 'HTML', 'Git'],
    isReadyToRelocate: true,
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
    skills: ['JavaScript', 'Git', 'NodeJS', 'Angular', 'HTML'],
  },
];

export const areas: IArea[] = [
  {
    id: '1',
    title: 'USA',
  },
  {
    id: '2',
    title: 'Spain',
  },
  {
    id: '3',
    title: 'France',
  },
  {
    id: '4',
    title: 'Poland',
  },
  {
    id: '5',
    title: 'Japan',
  },
  {
    id: '6',
    title: 'China',
  },
];
