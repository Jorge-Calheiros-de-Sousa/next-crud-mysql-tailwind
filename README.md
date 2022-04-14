# CRUD com nextJS usando Mysql

## Requisitos
- Um banco de dados com o nome de `usuarios` no mysql 

----
## Espesificação de banco

|Nome da Coluna  |Tipo  |
|---------|---------|
|id     |int primary key auto_increment         |
|nome     |varchar(100)         |
|email     |varchar(300)         |
|idade    |int         |


## Como rodar o projeto

- execute o comando `npm i` no repositório
- renomeie o arquivo `.env` para `.env.local` e insira os valores das variveis de acordo com a configuração do seu banco de dados:


|Variavel  |Valor  |
|---------|---------|
|HOST     |localhost         |
|ROOT     |root         |
|DATABASE     |usuarios         |

- agora se quiser executar o projeto em deselvovimento execute o comando `npm run dev` ou se quiser executar o projeto em produção execute `npm run build`(isso criara um página estática no navegador, então qualquer alteração feita no código não mostrara na página)
- Abra [http://localhost:3000 ](http://localhost:3000 ) e veja o resultado 



          

