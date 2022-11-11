var nomeDoUsuario = prompt('Poderia me dizer o teu nome?');
var gols = prompt(`Olá, ${nomeDoUsuario}! Quantos gols tu fizeste?`);

document.getElementById('para1').innerHTML = `Olá, ${nomeDoUsuario}! Tu fizeste um total de ${gols} gols.`;
