const { create } = require('venom-bot');

create({
  session: 'bot-session',
  multidevice: true,
  headless: true,
  useChrome: false,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-infobars',
    '--window-size=1920,1080',
    '--single-process'
  ]
}).then((client) => {
  console.log('✅ Bot conectado com sucesso!');

  client.onMessage((message) => {
    console.log('📨 Mensagem recebida!');
    console.log('🆔 De:', message.from);
    console.log('💬 Texto:', message.body);

    const texto = message.body?.toLowerCase();
    if (!texto || message.fromMe) return;

    if (texto === 'qual o treino') {
      client.sendText(message.from, '🏃‍♂️ Hoje temos treino às 19h30 na Praia da Enseada!');
    } else if (texto === 'confirmo') {
      client.sendText(message.from, '✅ Presença confirmada!');
    } else if (texto === 'quem vai hoje') {
      client.sendText(message.from, '📋 Confirmados até agora: João, Larissa, Bruno.');
    } else {
      client.sendText(message.from, '🤖 Comando não reconhecido.');
    }
  });
}).catch((error) => {
  console.error('❌ Erro ao iniciar o bot:', error);
});