const { callOpenaiApi } = require("./src/openai");
callOpenaiApi(
  "me dê uma lista de 5 pares de palavras relacionados a moda, cada par de palavras separado por `-`, cada par de palavras deve seguir o padrão `<acessório> <cor`>"
).then((response) => console.log(response.split("-")));

const gptInput = [
  [
    "me dê um uma lista de 5 acessórios relacionados a moda infantil separado por `-`",
  ],
  ["me dê um alista de 5 cores, separado por `-`"],
  ["me dê uma lista de 3 estações do ano, separado por `-`"],
];

let gptOutput = [];

gptInput.forEach(async (prompt) => {
  const result = await callOpenaiApi(prompt);
  console.log(result.split(`-`));
  gptOutput.push(result.split(`-`));
});

promises = gptInput.map((item) => callOpenaiApi(item));
promises.map(async p => {
  console.log(await p)
})
