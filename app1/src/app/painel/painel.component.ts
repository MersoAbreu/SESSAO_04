import { Component, OnInit } from '@angular/core';
import { Frase } from './../shared/frase.model';
import { FRASES } from './frases-mock';
import { ProgressoComponent } from './../progresso/progresso.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao:string = "Traduza a frase!"
  public frases: Frase []=FRASES
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase:Frase
  public progresso : number = 0

  constructor() {
   this.atualizaRodada()
    
  }

  ngOnInit(): void {
  }

atualizaResposta(resposta: Event):void{
  
this.resposta = (<HTMLInputElement>resposta.target).value
  

}
public verificarResposta():void{
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert("Tradução correta!")
    
    //trocar pergunta da rodada
      this.rodada++

      //progresso a cada rodada de acerto implementa 25% de acerto
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)


      //Atualiza o objeto rodadaFrase
      this.atualizaRodada()

     
    }else{
    alert("Tradução incorreta.")
    }
  }
  public atualizaRodada():void{
    //Atualiza o objeto rodadaFrase
    this.rodadaFrase = this.frases[this.rodada]
     //limpar resposta
     this.resposta=""
  }
}
