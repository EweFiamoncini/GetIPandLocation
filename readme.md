# 📍 Real-Time Location & IP Tracker

Este é um projeto simples utilizando **Node.js** e **Leaflet.js** para capturar a localização geográfica (GPS) e o endereço IPv4 de um usuário através de um link seguro.

## 🚀 Funcionalidades

* **Geolocalização de Alta Precisão:** Captura Latitude e Longitude via API do Navegador.
* **Mapa Interativo:** Exibe a posição exata do usuário em um mapa usando Leaflet e OpenStreetMap.
* **Captura de IPv4:** Identifica o endereço IP real do visitante (com suporte a headers de proxy/Ngrok).
* **Log de Acessos:** Salva automaticamente os dados capturados em um arquivo `acessos.txt` no servidor.

## 🛠️ Tecnologias Utilizadas

* [Node.js](https://nodejs.org/) - Ambiente de execução Javascript.
* [Express](https://expressjs.com/) - Framework web para o servidor.
* [Leaflet.js](https://leafletjs.com/) - Biblioteca para mapas interativos.
* [Ngrok](https://ngrok.com/) - Para expor o servidor local para a internet (HTTPS).

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/download/)
* [NPM](https://www.npmjs.com/) (instalado automaticamente com o Node)