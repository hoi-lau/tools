import HeadMeta from '../../components/common/HeadMeta'
import ConvertLayout from '../../components/layout/ConvertLayout'
import { strToZeroWidth } from '@utils/zeroPadding'

export default function ZeroPadding() {
  const originValue = `hello zero padding!`
  const resultValue = `​​‌​‌‌‌‍​​‌‌​‌​‍​​‌​​‌‌‍​​‌​​‌‌‍​​‌​​​​‍​‌‌‌‌‌‍​​​​‌​‌‍​​‌‌​‌​‍​​​‌‌​‌‍​​‌​​​​‍​‌‌‌‌‌‍​​​‌‌‌‌‍​​‌‌‌‌​‍​​‌‌​‌‌‍​​‌‌​‌‌‍​​‌​‌‌​‍​​‌​​​‌‍​​‌‌​​​‍​‌‌‌‌​`
  const transformer = async (value: string) => {
    return strToZeroWidth(value)
  }
  return (
    <>
      <div className={`h-screen flex flex-col bg-slate-50`}>
        <HeadMeta>
          <title>Zero Padding</title>
          <meta property="og:title" content="Zero Padding" />
          <meta property="og:description" content="在线工具 - Zero Padding" />
          <meta name="title" content="在线工具 - Zero Padding" />
          <meta name="keywords" content="在线工具 - Zero Padding" />
          <meta name="description" content="在线工具 - Zero Padding" />
        </HeadMeta>
        <ConvertLayout
          preEditorProps={{
            title: '文本',
            defaultValue: originValue,
            hasClear: true,
            langExt: []
          }}
          nextEditorProps={{
            title: '',
            defaultValue: resultValue,
            hasCopy: true,
            editable: false,
            langExt: []
          }}
          transformer={transformer}
        />
      </div>
    </>
  )
}
