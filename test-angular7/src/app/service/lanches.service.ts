import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanchesService {

  public ingredientes = [
    {
      id: 'alface',
      nome: 'Alface',
      preco: 0.40,
    },
    {
      id: 'bacon',
      nome: 'Bacon',
      preco: 2.00,
    },
    {
      id: 'hamburger',
      nome: 'Hamburger de carne',
      preco: 3.00,
    },
    {
      id: 'ovo',
      nome: 'Ovo',
      preco: 0.80,
    },
    {
      id: 'queijo',
      nome: 'Queijo',
      preco: 1.50,
    }
  ];

  public lanches = [
    {
      id: 'xbacon',
      nome: 'X-Bacon',
      ingredientes: ['bacon', 'hamburger', 'queijo'],
    },
    {
      id: 'xburger',
      nome: 'X-Burger',
      ingredientes: ['hamburger', 'queijo'],
    },
    {
      id: 'xegg',
      nome: 'X-Egg',
      ingredientes: ['ovo', 'hamburger', 'queijo'],
    },
    {
      id: 'xeggbacon',
      nome: 'X-Egg Bacon',
      ingredientes: ['bacon', 'ovo', 'hamburger', 'queijo'],
    }
  ];

  constructor() { }
}
