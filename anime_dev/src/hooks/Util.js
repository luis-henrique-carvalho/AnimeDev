

export const Util = () => {
  const randomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    return randomNumber
  }
  return {randomNumber}
}
