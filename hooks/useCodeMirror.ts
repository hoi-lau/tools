import { useCallback, useEffect, useRef, useState } from 'react'
import { basicSetup, EditorView } from 'codemirror'
import { Extension } from '@codemirror/state'

export default function useCodeMirror(extensions: Extension[]) {
  const [element, setElement] = useState<HTMLElement>()
  const [editorGetter, setEditorGetter] = useState<EditorView>()

  const editorRef = useCallback((node: HTMLElement | null) => {
    if (!node) return
    setElement(node)
  }, [])

  useEffect(() => {
    if (!element) return
    const view = new EditorView({
      parent: element,
      extensions: [basicSetup, ...extensions]
    })
    setEditorGetter(view)
    return () => {
      view.destroy()
    }
  }, [element])
  return { editorRef, editorGetter }
}
