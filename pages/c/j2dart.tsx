import HeadMeta from '../../components/common/HeadMeta'
import ConvertLayout from '../../components/layout/ConvertLayout'
import { getWorker, Wrapper } from '@utils/workerWrap'
import { json } from '@codemirror/lang-json'
import { dart } from '@codemirror/legacy-modes/mode/clike'
import { StreamLanguage } from '@codemirror/language'

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
  const resultValue = `class Root {
    Root({
        this.id,
        this.data,
        this.children,
    });

    int id;
    String data;
    List<Root> children;
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
      lang: 'Dart'
    })
    return _value
  }
  return (
    <>
      <div className={`h-screen flex flex-col bg-slate-50`}>
        <HeadMeta>
          <title>Json to Dart</title>
          <meta property="og:title" content="Json to Dart" />
          <meta property="og:description" content="在线工具 - Json to Dart" />
          <meta name="title" content="在线工具 - Json to Dart" />
          <meta name="keywords" content="在线工具 - Json to Dart" />
          <meta name="description" content="在线工具 - Json to Dart" />
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
            title: 'Dart',
            defaultValue: resultValue,
            hasCopy: true,
            editable: false,
            langExt: [StreamLanguage.define(dart)]
          }}
          transformer={transformer}
        />
      </div>
    </>
  )
}
