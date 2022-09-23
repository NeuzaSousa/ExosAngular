import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TableObject } from '../tableObject';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  operations = ['+', '-', '*', '/'];
  result = 0;
  requestedOperation = "";
  time = '';
  table: TableObject[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  calculatorForm = this.formBuilder.group({
    operand1: 0,
    operation: '',
    operand2: 0,
  });

  ngOnInit(): void {
  }

  onSubmit() {
    let operand1 = Number(this.calculatorForm.value.operand1);
    let operand2 = Number(this.calculatorForm.value.operand2);
    let operation = this.calculatorForm.value.operation;

    //this.calculatorForm.reset();
    if(operation == "+") {
      this.result = operand1 + operand2;
      this.requestedOperation = operand1.toString() + '+' + operand2.toString();
    } else if (operation == '-') {
      this.result = operand1 - operand2;
      this.requestedOperation = operand1.toString() + '-' + operand2.toString();
    } else if (operation == '*') {
      this.result = operand1 * operand2;
      this.requestedOperation = operand1.toString() + '*' + operand2.toString();
    } else if (operation == '/') {
      this.result = operand1 / operand2;
      this.requestedOperation = operand1.toString() + '/' + operand2.toString();
    }
    var date = new Date();
    this.time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    let newObject: TableObject = {time: this.time, requestedOperation: this.requestedOperation, result: this.result};
    this.table.push(newObject);
    return this.result;

  }

  deleteEntry(i: any){
    this.table.splice(i, 1);
  }
}
