import { TodoService } from './todo.service';

describe('TodoService', () => {
  let servico: TodoService;

  beforeEach(() => {
    servico = new TodoService();
  });

  it('deveria inicialmente retornar uma lista vazia', () => {
    expect(servico.obterItens()).toEqual([]);
  });

  it('deveria adicionar um item na lista', () => {
    const item = 'Estudar testes';

    servico.adicionarItem(item);
    expect(servico.obterItens()).toContain(item);
  });
});
