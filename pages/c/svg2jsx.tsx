import HeadMeta from '../../components/common/HeadMeta'
import ConvertLayout from '../../components/layout/ConvertLayout'
import { getWorker, Wrapper } from '@utils/workerWrap'
import { html } from '@codemirror/lang-html'
import { javascript } from '@codemirror/lang-javascript'

let svgr: Wrapper
export default function SVG2JSX() {
  const svgDefaultValue = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
`
  const svgResultValue = `import * as React from "react"
const SvgComponent = (props) => (
  <svg width={300} height={200} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100%" height="100%" fill="red" />
    <circle cx={150} cy={100} r={80} fill="green" />
    <text x={150} y={125} fontSize={60} textAnchor="middle" fill="#fff">
      {"SVG"}
    </text>
  </svg>
)
export default SvgComponent
  `
  const transformer = async (value: string) => {
    svgr =
      svgr ||
      getWorker(new Worker(new URL('@workers/svgr.worker.ts', import.meta.url)))
    let _value = value
    _value = await svgr.send({
      value: _value
    })
    return _value
  }
  return (
    <>
      <div className={`h-screen flex flex-col bg-slate-50`}>
        <HeadMeta>
          <title>Svg to JSXElement</title>
          <meta property="og:title" content="Svg to JSXElement" />
          <meta
            property="og:description"
            content="在线工具 - Svg to JSXElement"
          />
          <meta name="title" content="在线工具 - Svg to JSXElement" />
          <meta name="keywords" content="在线工具 - Svg to JSXElement" />
          <meta name="description" content="在线工具 - Svg to JSXElement" />
        </HeadMeta>
        <ConvertLayout
          preEditorProps={{
            title: 'SVG',
            defaultValue: svgDefaultValue,
            hasClear: true,
            errorMsg: 'Invalid SVG!',
            langExt: [html()]
          }}
          nextEditorProps={{
            title: 'JSX',
            defaultValue: svgResultValue,
            hasCopy: true,
            editable: false,
            langExt: [javascript({ jsx: true })]
          }}
          transformer={transformer}
        />
      </div>
    </>
  )
}
