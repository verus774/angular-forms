export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  level: string;
  skills: string[];
  isReadyToRelocate: boolean;
  areasToRelocate: string[];
}
