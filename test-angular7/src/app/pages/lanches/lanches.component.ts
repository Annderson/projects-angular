import { Component, OnInit } from '@angular/core';
import { LanchesService } from './../../service/lanche/lanches.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.component.html',
  styleUrls: ['./lanches.component.scss']
})
export class LanchesComponent implements OnInit {

  public total = 0;
  public lanches: any = [];
  public ingredientes: any = [];
  public lanche: any = [];
  public nomeEscolha: string;

  constructor(
    private lanchesService: LanchesService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.lanches = lanchesService.lanches;
    this.ingredientes = lanchesService.ingredientes;
  }

  ngOnInit() {
  }

  montarLanche(id, nome, preco, qtd) {
    this.lanche.push(
      {
        id: id,
        nome: nome,
        preco: preco,
        qtd: qtd
      }
    );
  }

  escolha(lan) {
    if (lan) {
      this.nomeEscolha = lan.nome;
      this.ingredientes.filter(igr => {
        lan.ingredientes.includes(igr.id) ?
          this.montarLanche(igr.id, igr.nome, igr.preco, 1) :
          this.montarLanche(igr.id, igr.nome, igr.preco, 0);
      });
    } else {
      this.nomeEscolha = 'Monte seu lanche';
      this.ingredientes.filter(igr => {
        this.montarLanche(igr.id, igr.nome, igr.preco, 0);
      });
    }
    this.calcular();
  }

  addIngrediente(id, qtd) {
    this.lanche.forEach(el => {
      el.qtd = id === el.id ? +qtd : el.qtd;
    });
    this.calcular();
  }

  calcular() {
    this.total = 0;
    this.lanche.forEach(el => {
      this.total += el.preco * this.calcularPromocao(el);
    });

    const alf = this.lanche.find( el => el.id === 'alface');
    const bac = this.lanche.find( el => el.id === 'bacon');

    if (alf.qtd >= 1 && bac.qtd <= 0) {
      this.total = this.total - (this.total * 0.1);
    }
  }

  calcularPromocao(el): number {
    let v = el.qtd;
    if (el.id === 'queijo' && el.qtd % 3 === 0) {
      v = 2 * (el.qtd / 3 );
    }
    if (el.id === 'hamburger' && el.qtd % 3 === 0) {
      v = 2 * (el.qtd / 3 );
    }
    return v;
  }

  enviar() {
    if (this.total <= 0) {
      this.toastr.error('Não foi escolhido nenhum lanche!', 'Erro ao confirmar!');
    } else {
      this.toastr.success('Seu pedido foi enviado com sucesso!', 'Pedido confirmado!');
      this.router.navigate(['']);
    }
  }
}
