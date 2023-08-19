import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BufferingService {

  private buffering = false;

 

  constructor() { }

 

  isBuffering(): boolean {

    return this.buffering;

  }

 

  setBuffering(value: boolean): void {

    this.buffering = value;

  }

}
