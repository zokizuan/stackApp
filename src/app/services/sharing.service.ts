import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private data: any = undefined;

  setData(data: any) {
    this.data = data;
    console.log(this.data);
  }

  getData(): any {
    console.log(this.data);
    
    return this.data;
    
  }
  constructor() { }
}
