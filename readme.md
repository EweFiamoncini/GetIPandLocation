📍 GPS & IP Tracker (Node.js)
Este é um projeto simples em Node.js que captura a localização exata via GPS e o endereço IPv4 de um usuário através de um link seguro, exibindo os dados em um mapa interativo em tempo real.

🚀 Funcionalidades
Captura de coordenadas (Latitude e Longitude) com alta precisão.

Identificação do endereço IPv4 real (mesmo atrás de proxies/Ngrok).

Visualização instantânea em mapa usando Leaflet.js.

Registro automático de acessos em um arquivo local (acessos.txt).

🛠️ Pré-requisitos
Node.js instalado.

Ngrok (para gerar o link público HTTPS).

📥 Instalação
Clone ou baixe este repositório.

Abra o terminal na pasta do projeto e instale as dependências:

Bash

npm install express
📂 Estrutura de Pastas
Plaintext

/getLocation
├── server.js          # Servidor Node.js (Backend)
├── acessos.txt        # Log onde os dados serão salvos
└── /public
    └── index.html     # Interface do usuário (Frontend)
    
📖 Como Usar
1. Iniciar o Servidor Local
No terminal, execute o comando:

Bash

node server.js
O servidor estará rodando em: http://localhost:3000

2. Tornar o Link Público (Ngrok)
Como o GPS exige uma conexão segura (HTTPS), abra outro terminal e digite:

Bash

ngrok http 3000
Copie o link gerado (ex: https://abcd-123.ngrok-free.app).

3. Capturar a Localização
Envie o link do Ngrok para o dispositivo alvo.

Ao clicar no botão "Ver Minha Localização", o dispositivo pedirá permissão de GPS.

Após a permissão, o mapa será exibido para o usuário e os dados aparecerão no seu terminal Node.js.

⚠️ Observações de Segurança
HTTPS: A geolocalização não funciona em links http:// comuns (exceto localhost). Use sempre o link https:// do Ngrok.

Permissões: O navegador sempre solicitará permissão ao usuário. Não é possível capturar o GPS sem o consentimento explícito por questões de privacidade do navegador.