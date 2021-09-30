import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  getStudents() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getLists() {
    return [
      {name:'Hathaway, Anne', gender:'female', age:21},
      {name:'Orevillo, Bryle Anthony', gender:'male', age:21},
      {name:'Polinar, Danne Andy Jee', gender:'male', age:22},
      {name:'Pabriga, Lord Son', gender:'male', age:21},
      {name:'Corage, R.A. Patricia', gender:'female', age:21},
      {name:'Nabuya, Rodney', gender:'male', age:22},
      {name:'Nunez, John Ed Paul', gender:'male', age:21},
      {name:'Bolanio, Christian James', gender:'male', age:21},
      {name:'Fronteras, Aldrin', gender:'male', age:21},
      {name:'Langamon, John Rene', gender:'male', age:22},
    ];
  }
}