import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ejmeplo1',
  templateUrl: './ejmeplo1.component.html',
  styleUrl: './ejmeplo1.component.css'
})
export class Ejmeplo1Component implements OnInit{
  formulario!:FormGroup;
  resultado!:number;

  constructor() { }
  ngOnInit(): void {
    this.formulario=new FormGroup({
      numero1: new FormControl('',Validators.required),
      numero2: new FormControl('',Validators.required)
    })
  }
  sumarNumeros():void{
    const n1=this.formulario.get('numero1')?.value;
    const n2=this.formulario.get('numero2')?.value;
    this.resultado=n1+n2;
  }
}
