import HeadMeta from '../../components/common/HeadMeta'

export default function ColorPicker() {
  return (
    <div className={`h-screen flex flex-col bg-slate-50`}>
      <HeadMeta>
        <title>取色器</title>
        <meta property="og:title" content="取色器" />
        <meta property="og:description" content="在线工具 - 取色器" />
        <meta name="title" content="在线工具 - 取色器" />
        <meta name="keywords" content="在线工具 - 取色器" />
        <meta name="description" content="在线工具 - 取色器" />
      </HeadMeta>
      <div className="flex h-12 no-print p-2 justify-around lg:justify-end">
        {/* <span>取色器</span>
        <input type="color" /> */}
        404
      </div>
      <div className="lg:flex flex-1 w-full overflow-auto"></div>
    </div>
  )
}
