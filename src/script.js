var jogadores = []
var nomesAdicionados = []


alert('Comece clicando no botão "+ Jogador" para incluir novos jogadores na tabela.')
function calculaPontos(jogador)
{
  return (jogador.vitorias + jogador.empates * 0.5)
}
function adicionarJogador()
{
  var nomeDoJogadorAdicionado = prompt("Digite o nome do jogador a ser incluído: ")
  
  if(nomeDoJogadorAdicionado != null && nomeDoJogadorAdicionado != "")
  {  
    if(!nomesAdicionados.includes(nomeDoJogadorAdicionado))
    {
      jogadores.push({
      nome: nomeDoJogadorAdicionado,
      partidas: 0,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0})
      nomesAdicionados.push(nomeDoJogadorAdicionado)
      exibirJogadoresNaTela(jogadores)  
    }
    else
      alert('Jogador "' + nomeDoJogadorAdicionado + '" já existe na tabela!')
  }
  else
  {
    alert("Inclusão de jogador não realizada.\n\nNome inválido!")
  }
}

function exibirJogadoresNaTela(jogadores)
{
  var html = ""
  for(var i = 0; i < jogadores.length; i++)
  {
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].partidas + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos.toFixed(1) + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")''>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html  
}

function adicionarVitoria(indiceJogador)
{
  var jogador = jogadores[indiceJogador]
  jogador.vitorias++
  jogador.partidas++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(indiceJogador)
{
  var jogador = jogadores[indiceJogador]
  jogador.empates++
  jogador.partidas++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(indiceJogador)
{
  var jogador = jogadores[indiceJogador]
  jogador.derrotas++
  jogador.partidas++
  exibirJogadoresNaTela(jogadores)
}