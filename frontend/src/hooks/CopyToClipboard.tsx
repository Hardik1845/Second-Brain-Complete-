export function copyToClipboard(text:string) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text successfully copied!');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}