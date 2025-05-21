// Convert a list of strings into HTML
export function html(strings, ...values) {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (values[i] || '')
  })
  return str
}

export function render(str, elm) {
  elm.insertAdjacentHTML('beforeend', str)
}
