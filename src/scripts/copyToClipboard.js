export default async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text)
}
