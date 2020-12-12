# Carteirinha Digital do Estudante

O aplicativo móvel de identificação estudantil, com todos os dados da versão física, como nome do estudante, instituição de ensino, número de matrícula, nome do curso, entre outros. Dados sempre à mão, como a situação de matrícula, para utilização de pagamento de meia-entrada em cinemas, shows, teatros e outros eventos culturais, poderá ser emitida gratuitamente por meio de aplicativo para celulares Android e iPhone (iOS)

Foi desenvolvido usando o framework Ionic/Angular

## Instalar os módulos

```
npm install
```

## Executar

```
ionic serve -l
```

## Configurar o firebase

Usamos o Firebase para simular a instituição, então é necessário criar os alunos fictícios e configurar as chaves de acesso no arquivo ./src/environments/enviroments.ts para a API funcionar.
