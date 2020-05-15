import { Component, OnInit } from '@angular/core';
import { EstoqueService } from 'src/app/services/estoque.service';
import { ViagemService } from 'src/app/services/viagem.service';
import { observable } from 'rxjs';
import { Estoque } from 'src/app/models/estoque.model';
import { Viagem } from 'src/app/models/viagem.model';

@Component({
  selector: 'app-realizar-reserva',
  templateUrl: './realizar-reserva.page.html',
  styleUrls: ['./realizar-reserva.page.scss'],
})
export class RealizarReservaPage implements OnInit {

  estoque: Estoque;
  viagem: Viagem;
  constructor(
    private estoqueService: EstoqueService,
    private viagemService: ViagemService
  ) { }

  ngOnInit() {
    this.getEstoque();
    this.getViagem();
  }

  getEstoque() {
    this.estoqueService.getEstoque().subscribe(estoque => {
      this.estoque = estoque;
      console.log("estoque", this.estoque);
    });
  }

  getViagem() {
    this.viagemService.getViagem().subscribe(viagem => {
      this.viagem = viagem;
      console.log("this viagem", this.viagem);
    })
  }

}
