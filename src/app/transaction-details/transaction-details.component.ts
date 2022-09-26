import { Exercise3Component } from './../exercise3/exercise3.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from "../transaction";

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  transaction!: Observable<Transaction[]>;
  date: Date = new Date();
  time: Date = new Date();

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
      setInterval(() => {
        this.time = new Date();
      }, 1);
    };

  ngOnInit(): void {

    }
  //this.transaction = this.transactions.find(this.transaction => this.transaction.id === transactionIdFromRoute);

  getTransaction(id: string) {
    return this.http.get<{id: string, amount: number, balance: number, label: string, description: string, date: string}[]>('/assets/' + id + '.json');
  }

}
