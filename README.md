# Teste Clínica - Gabriel Rossa

Teste realizado para admissão na vaga de Desenvolvedor na empresa Somos Valor

## Fazendo o código funcionar:

1. Clone este repositório.
2. No terminal dentro do repositório use o comando `npm install`.
3. Para rodar o servidor local com a aplicação, use o comando `npm run dev` no terminal.
4. Abra seu computador na porta indicada quando o servidor estiver rodando.

## Especificações do teste:
### Tarefa 1: Página de Listagem de Pacientes

Descrição: Criar uma página que liste os pacientes de uma clínica. Os dados podem ser estáticos (hardcoded) para simplificar.

Requisitos: Uma tabela que mostra o nome, idade, e última consulta de cada paciente.
Botões para editar e deletar pacientes (não precisam funcionar).
Botão para adicionar novos pacientes que leva a um formulário (pode ser numa nova página ou modal).

### Tarefa 2: Formulário de Cadastro de Pacientes

Descrição: Implementar um formulário para adicionar novos pacientes.

Requisitos: Campos para nome, idade, data da última consulta e um histórico médico breve.
Validações básicas no frontend para verificar se todos os campos foram preenchidos antes de "submeter" o formulário.
Design responsivo e acessível.

### Tarefa 3: Interação com APIs
Descrição: Simular a interação com uma API para buscar e enviar dados.

Requisitos: Usar fetch para simular o envio do formulário (POST) e a obtenção dos dados dos pacientes (GET).

#### Explicação sobre a tarefa 3

Criei os Fetchs como requisitado, mas utilizei o catch da requisição para apresentar os dados, já que em uma situação normal, os mesmos viriam pelo try, dentro do corpo de um arquivo `.JSON`
