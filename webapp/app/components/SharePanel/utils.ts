function createInput (text: string) {
  const body = document.body
  const input = document.createElement('input')
  input.style.height = '0px'
  input.value = text

  return {
    init: () => {
      body.appendChild(input)
      return input
    },
    destory: () => body.removeChild(input)
  }
}

function selectCopy(text: string, resolve, reject) {
  const { init, destory } = createInput(text)
  const input = init()

  try {
    input.select()
    const selected = document.execCommand('copy')
    return selected ? resolve() : reject()
  } catch (error) {
    reject(error)
  }

  destory()
}

export function copyTextToClipboard (text: string, resolve, reject) {
  if (!navigator.clipboard) {
    return selectCopy(text, resolve, reject)
  }
  return navigator.clipboard.writeText(text).then(resolve, reject)
}
