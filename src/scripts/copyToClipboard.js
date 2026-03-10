import toast from './toast.js'

export default async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    toast.text('There was an error :(')
  }
}
