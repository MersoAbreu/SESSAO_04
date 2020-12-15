import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string ='/assets/coracao-vazio.png';
  public coracaoCheio: string ='/assets/coracao-cheio.png';

  constructor() { }

  ngOnInit(): void {
  }

}
