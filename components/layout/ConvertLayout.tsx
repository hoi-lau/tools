import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
// import routes from ''
import routes from '@utils/routes'
import EditorPanel, { EditorProps } from './EditorPanel'
import { useState } from 'react'
import { getWorker, Wrapper } from '@utils/workerWrap'

interface ConvertProps {
  preEditorProps: EditorProps
  nextEditorProps: EditorProps
  transformer: Transformer
}

export type Transformer = (value: string) => Promise<string>

let prettier: Wrapper
function ConvertLayout({
  preEditorProps,
  nextEditorProps,
  transformer
}: ConvertProps) {
  const [value, setValue] = useState(preEditorProps.defaultValue)
  const [result, setResult] = useState(nextEditorProps.defaultValue)
  const [hasError, setError] = useState(false)
  async function handleValChange(val: string) {
    // setValue(val)
    try {
      const res = await transformer(val)
      // const result = await prettierTransformer(res)
      setResult(res)
      setError(false)
    } catch (error: any) {
      setError(true)
    }
  }
  // const prettierTransformer = async (value: string) => {
  //   prettier =
  //     prettier ||
  //     getWorker(
  //       new Worker(new URL('@workers/prettier.worker.ts', import.meta.url))
  //     )
  //   let _value = value
  //   _value = await prettier.send({
  //     value: _value,
  //     language: nextEditorProps.language
  //   })
  //   if (_value.startsWith(';<')) {
  //     _value = _value.slice(1)
  //   }
  //   return _value
  // }
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <nav className="flex justify-between h-10 leading-10 pr-8 bg-[#dae3e6]">
        <Link href={'/'}>
          <Image
            src="https://img.imliuk.com/itools.webp"
            alt="i tools"
            width={120}
            height={30}
            className="inline"
            priority
          ></Image>
        </Link>
        {/* <Link
          href={'https://github.com/hoi-lau/tools'}
          className="underline"
          target={'_blank'}
        >
          Github
        </Link> */}
      </nav>
      <div className="flex flex-1 w-full h-full overflow-hidden">
        <nav className="w-60 lg:text-sm lg:leading-6 border-r border-solid border-slate-300">
          <ul className="w-60 px-2 py-4">
            {routes.map((route, key) => {
              return (
                <li key={key} className="mt-4">
                  <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                    {route.title}
                  </h5>
                  <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                    {route.children.map((link, _key) => {
                      return (
                        <li key={_key}>
                          <Link
                            href={link.href}
                            target={link.target}
                            className="block border-l pl-4 -ml-px hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                          >
                            {link.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>
        <main className="w-full flex overflow-hidden">
          <EditorPanel
            {...preEditorProps}
            defaultValue={value}
            hasError={hasError}
            onChange={handleValChange}
          />
          <EditorPanel {...nextEditorProps} defaultValue={result} />
        </main>
      </div>
    </div>
  )
}

export default React.memo(ConvertLayout)
