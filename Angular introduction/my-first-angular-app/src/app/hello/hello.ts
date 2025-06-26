import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
  title = 'Hello angular! Testing my first router import'
  count: number = 0;

  increment(){
    this.count++
  }

  clear() {
    this.count = 0
  }
constructor(){

}
}
