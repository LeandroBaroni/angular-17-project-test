import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private itens: string[] = [];

  obterItens(): string[] {
    return this.itens;
  }

  adicionarItem(item: string): void {
    this.itens.push(item);
  }
}
