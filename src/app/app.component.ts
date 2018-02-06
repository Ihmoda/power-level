import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numbers: number[];
  startval: number;
  powers = {
    human: 1,
    saiyan: 10,
    supersaiyan: 90,
    supersaiyantwo: 150,
    supersaiyanthree: 250,
    supersaiyanfour: 500
  }
  constructor(){
    this.numbers = this.buildarray();
  }

  buildarray(){
    let n_arr = []
    for (let i = 1; i<=100; i++){
      n_arr.push(i);
    }
    return n_arr;
  }

  calculatePowers(){
    if (!this.startval){
      this.startval = 1;
    }
    this.powers.human = 1;
    this.powers.saiyan = 10;
    this.powers.supersaiyan = 90;
    this.powers.supersaiyantwo = 150;
    this.powers.supersaiyanthree = 250;
    this.powers.supersaiyanfour = 500;
    for(let power in this.powers){
        this.powers[power] *= this.startval;
    }

    console.log(this.powers.human);
  }
}
