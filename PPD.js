function ComeçaJogo() {console.log(
"Olá, esse é o pedra, papel, tesoura, lagarto, spock."
+ "\n" +"o jogo segue as seguintes regras:"
+ "\n" +"- Tesoura corta papel"
+ "\n" +"- Papel cobre pedra"
+ "\n" +"- Pedra esmaga lagarto"
+ "\n" +"- Lagarto envenena Spock"
+ "\n" +"- Spock esmaga (ou derrete) tesoura"
+ "\n" +"- Tesoura decapita lagarto"
+ "\n" +"- Lagarto come papel"
+ "\n" +"- Papel refuta Spock"
+ "\n" +"- Spock vaporiza pedra"
+ "\n" +"- Pedra quebra tesoura"
+ "\n" +'ESCOLHA ALGUM usando Escolho."opção que escolher"'
);
};

function Escolha(pedra, papel, tesoura, lagarto, spock) {
  this.pedra = pedra;
  this.papel = papel;
  this.tesoura = tesoura;
  this.lagarto = lagarto;
  this.spock = spock;
};
var opcoes = ["pedra", "papel", "tesoura", "lagarto", "spock"];
var pcescolha = opcoes[Math.floor(Math.random()*opcoes.length)];

var Pedra = ((pcescolha == opcoes[0])? "O computador também escolheu " + pcescolha + ", e foi empate." + "\n" + 'Para jogar novamente use "Recomeçar.agora"': ((pcescolha == opcoes[2] || pcescolha == opcoes[3]) ? "O computador escolheu " + pcescolha + ", e você ganhou." + "\n" + 'Para jogar novamente use "Recomeçar.agora"' : "O computador escolheu " + pcescolha + ", e você perdeu." + "\n" + 'Para jogar novamente use "Recomeçar.agora"'));
var Papel = ((pcescolha == opcoes[1])? "O computador também escolheu " + pcescolha + ", e foi empate." + "\n" + 'Para jogar novamente use "Recomeçar.agora"': ((pcescolha == opcoes[0] || pcescolha == opcoes[4]) ? "O computador escolheu " + pcescolha + ", e você ganhou." + "\n" + 'Para jogar novamente use "Recomeçar.agora"' : "O computador escolheu " + pcescolha + ", e você perdeu. " + "\n" + 'Para jogar novamente use "Recomeçar.agora"'));
var Tesoura = ((pcescolha == opcoes[2])? "O computador também escolheu " + pcescolha + ", e foi empate." + "\n" + 'Para jogar novamente use "Recomeçar.agora"': ((pcescolha == opcoes[1] || pcescolha == opcoes[3]) ? "O computador escolheu " + pcescolha + ", e você ganhou." + "\n" + 'Para jogar novamente use "Recomeçar.agora"' : "O computador escolheu " + pcescolha + ", e você perdeu. " + "\n" + 'Para jogar novamente use "Recomeçar.agora"'));
var Lagarto = ((pcescolha == opcoes[3])? "O computador também escolheu " + pcescolha + ", e foi empate." + "\n" + 'Para jogar novamente use "Recomeçar.agora"': ((pcescolha == opcoes[1] || pcescolha == opcoes[4]) ? "O computador escolheu " + pcescolha + ", e você ganhou." + "\n" + 'Para jogar novamente use "Recomeçar.agora"' : "O computador escolheu " + pcescolha + ", e você perdeu. " + "\n" + 'Para jogar novamente use "Recomeçar.agora"'));
var Spock = ((pcescolha == opcoes[4])? "O computador também escolheu " + pcescolha + ", e foi empate." + "\n" + 'Para jogar novamente use "Recomeçar.agora"': ((pcescolha == opcoes[0] || pcescolha == opcoes[2]) ? "O computador escolheu " + pcescolha + ", e você ganhou." + "\n" + 'Para jogar novamente use "Recomeçar.agora"' : "O computador escolheu " + pcescolha + ", e você perdeu. " + "\n" + 'Para jogar novamente use "Recomeçar.agora"'));
var Escolho = new Escolha(Pedra, Papel, Tesoura, Lagarto, Spock);

var Recomeçar = { rec : function (){document.location.reload(true)}};
Object.defineProperty(Recomeçar, "agora", { get: function () { Recomeçar.rec()}});
//Substituir a merda toda por getters e fazer o resultado do math random recarregar
console.log(ComeçaJogo());
