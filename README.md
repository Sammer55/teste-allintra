## Observações gerais:

O projeto foi desenvolvido com Expo Bare Workflow pela facilidade na execução do server do Expo e ainda sim abrindo a possibilidade de executa-lo nativamente pelo xcode ou Android Studio.

Para executar o projeto de forma fácil:
- npx expo install (para instalar as dependências)
- npx expo start (para startar o server do expo)

ou

- yarn (para instalar as dependências)
- npx react-native start (para startar o server do react-native, rodando o projeto nativamente)

Para trazer os dados dinamicamente via WebSocket e Rest:

Foi utilizado a biblioteca [react-native-binance-api](https://github.com/gkoychev/binance-api-react-native) que é uma adaptação para React Native da binance-api-node, sendo necessário somente importar o módulo e criar o client com a apiKey e apiSecret. Deixei no .env a minha ;)
Nessa biblioteca é possível fazer as chamadas Rest e com Websocket usando o próprio Client.

Foi utilizado como referência o Design de dois Apps que achei no Behance:

https://www.behance.net/gallery/194345115/Taurus-App-Mobile-App-Website-UI-UX-Design?tracking_source=search_projects|crypto+app&l=20

https://www.behance.net/gallery/195360903/D-Wallet-Payment-ecosystem-UXUI?tracking_source=search_projects|finance+&l=35

Observações finais:

A parte mais difícil da implementação foi o gráfico de velas, pois o retorno do WebSocket era um pouco diferente do data de exemplo da Lib de gráficos. Sobre o restante: Trabalhar com o que se ama sempre é bom demais.

---

## Resumo do Teste em Imagens e Gifs, pra facilitar a visualização geral:

![allintra-logo-small](https://github.com/Sammer55/teste-allintra/assets/80492895/c2924b98-c7da-4b15-b30d-3ba115a9ee3a)

Para representar o teste foi criado a logomarca fictícia "Teste Allintra".

## Tarefas:

Desenvolver ícone da aplicação para área de trabalho do app

![Captura de Tela 2024-05-12 às 22 32 15](https://github.com/Sammer55/teste-allintra/assets/80492895/38bb00d8-7fde-4e69-97a3-40f5a192214c)

---

Desenvolver uma splash screen criativa e com animações e transição para a primeira etapa do app

<img src="https://github.com/Sammer55/teste-allintra/assets/80492895/2cd657af-e4d4-4036-b324-e8c38b4ee6fb" width="150"/>

---

Desenvolver uma home page contendo bottom tabs com ícones e texto e animação agradável ao clicar em cada uma das bottom tabs
Bottom tab deve possuir animação / transição, utilizar a criatividade
Bottom tab deve possui entre 3 a 5 tabs, porém apenas 1 terá conteúdo
Também será avaliada a criatividade na criação do layout / aparência da bottom tab.

![SimulatorScreenRecording-iPhone15ProMax-2024-05-12at22 38 59-ezgif com-video-to-gif-converter](https://github.com/Sammer55/teste-allintra/assets/80492895/2f7dbd58-7ec8-40d0-a6e8-daeba3f0f456)

---

Utilizar a criatividade para construir uma única página: Home

A página inicial deverá ser uma espécie de dashboard contendo diferentes tipos de gráficos que sejam dinamicamente alimentados / atualizados em tempo real. Deve conter:

Um grafico de linha/área alimentado em tempo real via websocket
Animação/transição no grafico no momento de atualização de seus valores é um diferencial.

![SimulatorScreenRecording-iPhone15ProMax-2024-05-12at22 42 50-ezgif com-video-to-gif-converter](https://github.com/Sammer55/teste-allintra/assets/80492895/efe2c76b-b7b4-4259-a08d-deb20b356e66)

Um grafico de velas (Candlestick / Candles) alimentado em tempo real via websocket
Animação/transição no grafico no momento de atualização de seus valores é um diferencial.

![SimulatorScreenRecording-iPhone15ProMax-2024-05-12at22 45 57-ezgif com-video-to-gif-converter](https://github.com/Sammer55/teste-allintra/assets/80492895/2438169a-90e3-4e83-8390-4c8a7730c42f)

Caso acrescente mais algum grafico, desde que não seja estático (podendo ser alimentado via randomização) pode ser considerado como um diferencial do seu teste.

---

Demais páginas:

As demais páginas linkadas nas bottom tabs devem apenas printar “Hello word, esta é a pagina X”, para que seja possível testarmos a transição entre paginas que foi criada, pois uma transição agradável entre a navegação das páginas também será avaliada.

<img src="https://github.com/Sammer55/teste-allintra/assets/80492895/f043296d-5cd6-4dc6-9ecc-f7e92b5842fe" width="150"/>

A ideia é que seja um teste pequeno e rápido de ser desenvolvido, porém, caso desejar demonstrar mais algo além do mínimo solicitado pelo teste:

Qualquer outro componente, ou design, ou pagina, adicional ao mínimo solicitado, poderá ser considerado um diferencial do seu teste.

<img src="https://github.com/Sammer55/teste-allintra/assets/80492895/d555f848-c040-421d-a71a-61e63c7422f4" width="150"/>

### Resolução:

Foi criado uma tela adicional de Preços, onde é feito uma requisição (sem WebSocket) para a API da Binance, trazendo cerca de 2.000 itens em uma FlatList performática.

---

Observações:

- Utilize um gerenciamento de estado eficiente
- Aparência é importante e será avaliado em todo teste
- Criatividade é importante e será avaliada em todo teste
- Projete e implemente uma interface de usuário visualmente atraente
- Garanta responsividade em diferentes tamanhos e orientações de tela de dispositivos.
- Incorpore animações ou transições para aprimorar a experiência do usuário quando apropriado.

<img src="https://github.com/Sammer55/teste-allintra/assets/80492895/e72cd6f3-c202-4216-b2a9-e4f18fb533eb" width="400"/>

Testado em iPad Pro (12.9-inch)

---

Critérios de Avaliação:

- Qualidade do código, legibilidade e adesão às melhores práticas do React Native.
- Funcionalidade e completude dos recursos implementados.
- Manipulação de casos especiais, cenários de erro e validação de entrada.
- Técnicas de otimização de desempenho e escalabilidade da solução.
- Compreensão do ecossistema React Native, incluindo bibliotecas, ferramentas e APIs.

Testado em:
Android, Galaxy M12

iPhone XS Max

iPhone 12

iPad 9 (10 polegadas)

Simuladores: (iPhone 15 Pro Max, iPad Pro (12.9-inch) 6th generation)

<img src="https://github.com/Sammer55/teste-allintra/assets/80492895/d51b320d-053d-4b50-a904-40fe0b7b1716" width="500"/>


