import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  public resultado: number | null = null
  public numero1: number = 0
  public numero2: number = 0

  calcular(x: Event): void{
    if((<HTMLInputElement>x.target).value=="Sumar"){
      this.resultado = this.numero1 + this.numero2
    } else if((<HTMLInputElement>x.target).value=="Restar"){
      this.resultado = this.numero1 - this.numero2
    }
  }
}
