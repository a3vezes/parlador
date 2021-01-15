# Parlador Ideal

##  **Setup Backend**
- npm install
- Configurar o arquivo .ENV do backend em : backend/config/.env
- Executar o comando node seeder -i (Importar os dados de usuários e posts iniciais)
- Executar o comando npm run dev, para iniciar o servidor

##  **Setup Mobile**
- npm install -g expo-cli
- npm install
- Configurar o ip da API no arquivo : mobile/src/services/api.js
- expo start, para iniciar o aplicativo
- Ler o QR Code gerado com o app do Expo

##  **Depêndencias Backend**
- bcrypt e bcryptjs para criptografar senhas
- colors para deixar o terminal mais intuitivo
- cors para habilitar o Cross-origin resource sharing
- dotenv para fornecer variáveis de ambiente para todo o projeto
- express foi o framework utilizado
- express-async-handler para fazer operações assíncronas mais potentes e seguras
- jsonwebtoken para gerar e manter tokens de autenticação dos usuários
- mongoose para utilizar o MongoDB no projeto
- nodemon para reiniciar o servidor caso aconteça um erro

##  **Depêndencias Mobile**
- react-navigation para controlar o acesso as rotas
- axios para consumir a API
- react-native-elements para UI
