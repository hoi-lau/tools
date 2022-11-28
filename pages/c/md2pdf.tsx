import { useCallback, useEffect, useRef, useState } from 'react'
import HeadMeta from '../../components/common/HeadMeta'
import * as CodeMirror from 'codemirror'
import MarkdownIt from 'markdown-it'
import { markdown } from '@codemirror/lang-markdown'
import useCodeMirror from 'hooks/useCodeMirror'
import { ViewUpdate } from '@codemirror/view'
import hljs from 'highlight.js'
import 'highlight.js/styles/dark.css'
import { debounce } from 'hooks'

export default function Md2Pdf() {
  const previewRef = useRef<HTMLDivElement>(null)
  const mdInputRef = useRef<HTMLInputElement>(null)
  const content = useRef(
    `# README\n\n## Code\n\n\`\`\`js\nconst str = 'hello world!';\n\`\`\`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`
  )
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch (__) {}
      }
      return ''
    }
  })
  const { editorRef, editorGetter } = useCodeMirror([
    CodeMirror.EditorView.updateListener.of(
      debounce<ViewUpdate>(function (e) {
        if (previewRef.current) {
          const val = e.state.doc.toString()
          if (content.current !== val || !previewRef.current.innerHTML) {
            content.current = val
            previewRef.current.innerHTML = md.render(val)
          }
        }
      })
    ),
    markdown()
  ])

  useEffect(() => {
    if (editorGetter) {
      editorGetter.dispatch({
        changes: {
          from: 0,
          to: editorGetter.state.doc.length,
          insert: content.current
        }
      })
    }
  }, [editorGetter])

  function onPrint() {
    const currentTitle = document.title
    let articleTitle = 'readme'
    if (previewRef.current) {
      articleTitle =
        previewRef.current.querySelector('h1')?.innerText || 'readme'
      document.title = articleTitle
    }
    window.requestAnimationFrame(() => {
      document.title = currentTitle
    })
    window.print()
  }

  function handleFile() {
    if (mdInputRef.current) {
      mdInputRef.current.click()
    }
  }

  function handleFileChange() {
    if (mdInputRef.current && mdInputRef.current.files) {
      if (mdInputRef.current.files.length > 0) {
        const file = mdInputRef.current.files[0]
        const fr = new FileReader()
        fr.readAsText(file, 'utf-8')
        fr.addEventListener('load', () => {
          if (!editorGetter) return
          const doc = fr.result as string
          const editor = editorGetter
          editor.dispatch({
            changes: { from: 0, to: editor.state.doc.length, insert: doc }
          })
        })
      }
    }
  }
  return (
    <div className={`h-screen flex flex-col bg-slate-50`}>
      <HeadMeta>
        <title>markdown to pdf</title>
        <meta property="og:title" content="markdown to pdf" />
        <meta property="og:description" content="在线工具 - markdown to pdf" />
        <meta name="title" content="在线工具 - markdown to pdf" />
        <meta name="keywords" content="在线工具 - markdown to pdf" />
        <meta name="description" content="在线工具 - markdown to pdf" />
      </HeadMeta>
      <div className="flex h-12 no-print p-2 justify-around lg:justify-end">
        {/* <select className="lg:ml-auto border rounded">
          <option>--choose fonts--</option>
          <option value="haha">haha</option>
        </select>
        <button
          type="button"
          className="lg:ml-8 lg:mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleFile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline icon mr-2"
            viewBox="0 0 1024 1024"
            height="1rem"
            width="1rem"
          >
            <path
              d="M854.6 288.6 639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2a12 12 0 0 0 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191-83.2-191z"
              fill="white"
            />
          </svg>
          upload fonts
          <input
            ref={mdInputRef}
            className="hidden"
            type="file"
            accept=".eot,.otf,.fon,.font,.ttf,.ttc,.woff"
            onChange={handleFileChange}
          />
        </button> */}
        <button
          type="button"
          className="lg:ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleFile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline icon mr-2"
            viewBox="0 0 1024 1024"
            height="1rem"
            width="1rem"
          >
            <path
              d="M854.6 288.6 639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2a12 12 0 0 0 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191-83.2-191z"
              fill="white"
            />
          </svg>
          choose a .md file
          <input
            ref={mdInputRef}
            className="hidden"
            type="file"
            accept=".md,.markdown"
            onChange={handleFileChange}
          />
        </button>

        <button
          type="button"
          className="lg:ml-8 lg:mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={onPrint}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            height="1rem"
            width="1rem"
            className="inline mr-2"
          >
            <path d="M7 25H2V9h28v16h-5M7 19v11h18V19ZM25 9V2H7v7m15 5h3" />
          </svg>
          print
        </button>
      </div>
      <div className="lg:flex flex-1 w-full overflow-auto">
        <div
          className="flex-1 overflow-auto lg:mr-4 border border-solid border-slate-400 no-print bg-white"
          ref={editorRef}
        ></div>
        <article
          className="flex-1 overflow-auto prose max-w-full lg:ml-4 p-4 bg-white"
          ref={previewRef}
        ></article>
      </div>
    </div>
  )
}
