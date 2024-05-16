const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require('readline');
const express = require('express'); // Importe o Express
const app = express(); // Crie uma instância do Express
app.use(express.static('.')); // '.' indica a pasta atual

const genAI = new GoogleGenerativeAI('AIzaSyCpHcjWSt4qs7RehpDRdHGYAKcYKOBcAHs');

// ... (função obterMensagemUsuario() - você pode removê-la, pois não será mais necessária) ...

async function processarPrompt(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text(); 
}

// Rota para receber mensagens do front-end
app.use(express.json()); // Middleware para analisar JSON no corpo da requisição
app.post('/mensagem', async (req, res) => {
  const prompt = req.body.prompt;
  const resposta = await processarPrompt(prompt);
  res.json({ resposta }); // Envia a resposta de volta para o front-end
});

// Inicia o servidor Express na porta 3000
const PORT = 3001; // Mudando para a porta 3001
app.listen(PORT, () => { 
  console.log(`Servidor rodando na porta ${PORT}`); 
});