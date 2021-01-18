import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  incomeValue = 150000;
  expenseValue = 0;
  constructor() { }

  ngOnInit(): void {
  }

  incomeValueChanged(e) {
    console.log('e', e);
    this.incomeValue = e;
  }

  expenseValueChanged(e) 
    {
      console.log('e', e);
      this.expenseValue = e;
    }
  

}
