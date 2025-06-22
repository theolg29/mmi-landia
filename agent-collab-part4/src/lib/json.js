export function extractJSXString(text = '') {
  console.log('JSON FILE', text)
  text = text.replace(/<think>[\s\S]*?<\/think>/gi, '')
  text = text.replace(/import .*;\s*/, '')
  text = text.replaceAll('useEffect(', 'React.useEffect(')
  text = text.replaceAll('useState(', 'React.useState(')
  text = text.replaceAll('useRef(', 'React.useRef(')
  text = text.replaceAll('useLayoutEffect(', 'React.useLayoutEffect(')
  text = text.replaceAll('useCallback(', 'React.useCallback(')

  let compName
  text.replace(/export default (.*);/, (match, group) => {
    console.log('text replace', match, group)
    compName = group
    return ''
  })

  text = text.replace(/export default .*;/, '')

  const markdownJsonPattern = /```(?:jsx)?\s*([\s\S]*?)\s*```/
  const match = text.match(markdownJsonPattern)
  const jsxStr = match ? match[1].trim() : text.trim()

  console.log('text replace compName', compName)

  return `${jsxStr} \n render(<${compName} />)` //
}
