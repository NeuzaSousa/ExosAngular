import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {
  transactions!: Observable<{ id: string, amount: number, balance: number, label: string, date: string }[]>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.transactions =  this.getTransactions();
    console.log(this.transactions);
  }

  getTransactions() {
    return this.http.get<{id: string, amount: number, balance: number, label: string, date: string}[]>('/assets/transactions.json');
  }

}
