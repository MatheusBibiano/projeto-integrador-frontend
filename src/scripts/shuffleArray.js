export function shuffleArray(arr) {
  /*
   * Embaralha os itens de um array
   * utilizando o algorítmo Fisher-Yates.
   */
  if (!arr) {
    return [];
  }

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
