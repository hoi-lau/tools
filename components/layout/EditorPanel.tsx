import { Extension } from '@codemirror/state'
import { ViewUpdate, keymap } from '@codemirror/view'
import { indentWithTab } from '@codemirror/commands'
import * as CodeMirror from 'codemirror'
import { debounce } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import useCodeMirror from 'hooks/useCodeMirror'
import styles from './EditorPanel.module.css'
import IButton from '@components/common/IButton'
import { copy } from '@utils/browserUtils'

export interface EditorProps {
  defaultValue: string
  title: React.ReactNode
  langExt: Extension[]
  editable?: boolean
  hasCopy?: boolean
  hasError?: boolean
  onChange?: (value: string) => void
  errorMsg?: string
  hasClear?: boolean
  className?: string
  // acceptFiles?: string | string[]
}

export default function EditorPanel({
  defaultValue,
  title,
  langExt,
  editable = true,
  hasError,
  errorMsg,
  hasClear,
  hasCopy,
  onChange,
  className = ''
}: EditorProps) {
  const [content, setContent] = useState(defaultValue)
  const [copyText, setCopyText] = useState('copy')
  const { editorRef, editorGetter } = useCodeMirror([
    CodeMirror.basicSetup,
    CodeMirror.EditorView.editable.of(editable),
    keymap.of([indentWithTab]),
    CodeMirror.EditorView.updateListener.of(
      debounce<ViewUpdate>(function (e) {
        const val = e.state.doc.toString()
        setContent(val)
        onChange && onChange(val)
      })
    ),
    ...langExt
  ])

  useEffect(() => {
    if (!editorGetter) return
    editorGetter.dispatch({
      changes: {
        from: 0,
        to: editorGetter.state.doc.length,
        insert: defaultValue
      }
    })
    setContent(defaultValue)
  }, [defaultValue, editorGetter])

  function handleClear() {
    editorGetter?.dispatch({
      changes: {
        from: 0,
        to: editorGetter.state.doc.length,
        insert: ''
      }
    })
  }
  return (
    <div
      className={`relative flex flex-col flex-1 overflow-auto border-r border-b border-solid border-slate-300 ${className}`}
    >
      <div className="h-10 px-2 flex items-center tools-bar border-b border-solid border-slate-300">
        <div>{title}</div>
        <div className="ml-auto">
          {hasClear && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              className="cursor-pointer"
              onClick={handleClear}
            >
              <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" />
              <path d="M9 10h2v8H9zm4 0h2v8h-2z" />
            </svg>
          )}
          {hasCopy && (
            <IButton
              type="primary"
              size="normal"
              child={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    className="inline mr-2"
                  >
                    <path
                      fill="#fff"
                      d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"
                    />
                  </svg>
                  <span>{copyText}</span>
                </>
              }
              onClick={() => {
                if (copyText === 'copy') {
                  copy(defaultValue)
                  setCopyText('copied')
                  setTimeout(() => {
                    setCopyText('copy')
                  }, 3000)
                }
              }}
            />
          )}
        </div>
      </div>
      {hasError && (
        <div
          className="absolute bottom-0 left-0 right-0 z-10 p-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          {errorMsg}
        </div>
      )}
      <div className={`flex-1 ${styles.editorWrapper}`} ref={editorRef}></div>
    </div>
  )
}
