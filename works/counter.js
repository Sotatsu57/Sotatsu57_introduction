let count = 0
const countUp = () => {
  count *= 2
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数: ' + count
}
const countReset = () => {
    count = 0
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' + count
  }