export default function onEvent(type, listener) {
  document.addEventListener(type, listener, false)
}
