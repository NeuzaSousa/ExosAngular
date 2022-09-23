import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  name ='';
  fonts = ['Times New Roman', 'monospace', 'sans-serif'];
  aligns = ['left', 'center', 'right'];

  textForm = this.formBuilder.group({
    name: '',
    font: '',
    size: 24,
    align: ''
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  h1(){
    return {
      fontFamily: this.textForm.value.font,
      fontSize: this.textForm.value.size+"px",
      textAlign: this.textForm.value.align
    }
  }

}
