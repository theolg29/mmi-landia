import { exportToBlob } from '@excalidraw/excalidraw'
import { readImageAsBase64 } from './image'

export async function exportCanvasToBase64({ excalidrawRef }) {
  if (!excalidrawRef.current) return null

  const blob = await exportToBlob({
    elements: excalidrawRef.current.getSceneElements(),
    appState: excalidrawRef.current.getAppState(),
    files: excalidrawRef.current.getFiles(),
    mimeType: 'image/png',
    quality: 1,
    exportPadding: 10,
  })

  const base64 = await readImageAsBase64(blob)
  return base64
}
