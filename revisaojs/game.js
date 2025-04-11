// Declarando as variáveis da vida dos pokemons
let PikachuEnergia = 80;
let CharmanderEnergia = 80;

// Controlando a quantidade de rodadas
let rodada = 1;

// Controlando os ataques
let ataquePikachu = 0;
let ataqueCharmander = 0;

// Declarando que enquanto os pokemons estiverem vivos, haverá luta
while (PikachuEnergia >=0 && CharmanderEnergia >=0) {
    console.log(`🔁 Rodada` , rodada);

// Gerando ataques com números aleatórios
    ataquePikachu = Math.floor(Math.random() * 25);
    ataqueCharmander = Math.floor(Math.random() * 18);
// Aplicando os golpes
    PikachuEnergia = PikachuEnergia - ataqueCharmander;
    CharmanderEnergia = CharmanderEnergia - ataquePikachu;

// Exibindo o dano que cada um deu
    console.log(`Pikachu deu`, ataquePikachu, `de dano!`);
    console.log(`Charmander deu` , ataqueCharmander, `de dano!`);

// Mostrando a vida que cada pokemon ficou após o ataque
    console.log(`💛 Energia do Pikachu:`, PikachuEnergia);
    console.log(`🩻 Energia do Charmander:`, CharmanderEnergia);
    console.log(`-----------------------------------`);

// Indo para a próxima rodada
    rodada++;
}

// Calculando o resultado da batalha
if (PikachuEnergia <= 0 && CharmanderEnergia <= 0) {
    console.log(`Empate! 😯`)
 } else if (PikachuEnergia > CharmanderEnergia) {
    console.log(`Pikachu Venceu! 💛`);
 } else { 
    console.log(`Charmander Venceu! 🩻`)
}
