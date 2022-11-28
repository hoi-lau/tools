import HeadMeta from '../../components/common/HeadMeta'
import ConvertLayout from '../../components/layout/ConvertLayout'
import { getWorker, Wrapper } from '@utils/workerWrap'
import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'

let quicktype: Wrapper
export default function J2T() {
  const jsonDefaultValue = `{
  "id": 1,
  "data": "root",
  "children": [{
    "id": 2,
    "data": "child",
    "children": []
  }]
}
`
  const typeResultValue = `export interface Root {
    id:       number;
    data:     string;
    children: Root[];
}

`
  const transformer = async (value: string) => {
    quicktype =
      quicktype ||
      getWorker(
        new Worker(new URL('@workers/quicktype.worker.ts', import.meta.url))
      )
    let _value = value
    _value = await quicktype.send({
      value: _value,
      lang: 'TypeScript'
    })
    return _value
  }
  return (
    <>
      <div className={`h-screen flex flex-col bg-slate-50`}>
        <HeadMeta>
          <title>Json to TypeScript</title>
          <meta property="og:title" content="Json to TypeScript" />
          <meta
            property="og:description"
            content="在线工具 - Json to TypeScript"
          />
          <meta name="title" content="在线工具 - Json to TypeScript" />
          <meta name="keywords" content="在线工具 - Json to TypeScript" />
          <meta name="description" content="在线工具 - Json to TypeScript" />
        </HeadMeta>
        <ConvertLayout
          preEditorProps={{
            title: 'Json',
            defaultValue: jsonDefaultValue,
            hasClear: true,
            errorMsg: 'Invalid Json!',
            langExt: [json()]
          }}
          nextEditorProps={{
            title: 'TypeScript',
            defaultValue: typeResultValue,
            hasCopy: true,
            editable: false,
            langExt: [javascript({ typescript: true })]
          }}
          transformer={transformer}
        />
      </div>
    </>
  )
}
