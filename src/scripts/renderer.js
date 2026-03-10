// Convert a list of strings into HTML
export function html(strings, ...values) {
  // Initialize an empty string to build the final HTML
  let str = ''
  // Loop through all string parts of the template literal
  strings.forEach((string, i) => {
    // Append the string part and the corresponding value (if it exists)
    str += string + (values[i] || '')
  })
  // Return the final combined string
  return str
}

// Render HTML into a DOM element
export function render(str, elm) {
  // Insert the HTML string into the element at the end
  elm.insertAdjacentHTML('beforeend', str)
}
