import { Excalidraw } from '@excalidraw/excalidraw'
import '@excalidraw/excalidraw/index.css'
import { forwardRef, useImperativeHandle, useState } from 'react'

const Exca = forwardRef((props, ref) => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null)

  useImperativeHandle(ref, () => excalidrawAPI, [excalidrawAPI])

  return (
    <div style={{ height: '500px' }}>
      <Excalidraw excalidrawAPI={(api) => setExcalidrawAPI(api)} />
    </div>
  )
})

export default Exca
