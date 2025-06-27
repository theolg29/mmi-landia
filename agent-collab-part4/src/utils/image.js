export const readImageAsBase64 = (blob) => {
  return new Promise((resolve) => {
    console.log('readImageAsBase64', blob)

    const reader = new FileReader()
    reader.addEventListener(
      'load',
      () => {
        resolve({
          alt: blob.name,
          src: reader.result,
        })
      },
      false,
    )
    reader.readAsDataURL(blob)
  })
}
