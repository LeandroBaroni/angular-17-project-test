import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-test-add-item',
  standalone: true,
  templateUrl: './test-add-item.component.html',
  imports: [CommonModule, FormsModule]
})
export class TestAddItemComponent implements OnInit {
  private todoService = inject(TodoService);
  titulo: string = 'Todo List';
  novoItem: string = '';
  itens: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.itens = this.todoService.obterItens();
  }

  adicionarItem() {
    this.todoService.adicionarItem(this.novoItem);
    this.itens = this.todoService.obterItens();
  }
}
