import {
  quicktype,
  InputData,
  jsonInputForTargetLanguage
} from 'quicktype-core'

const _self: any = self
_self.onmessage = async ({ data }: any) => {
  const { payload, id } = data
  const { value, lang } = payload
  try {
    const jsonInput = jsonInputForTargetLanguage(lang)
    await jsonInput.addSource({
      name: 'Root',
      samples: [value]
    })

    const inputData = new InputData()
    inputData.addInput(jsonInput)

    const result = await quicktype({
      inputData,
      lang: lang,
      rendererOptions: {
        /* @ts-ignore */
        'just-types': true
      }
    })

    _self.postMessage({
      payload: result.lines.join('\n'),
      id
    })
  } catch (e: any) {
    _self.postMessage({
      id,
      err: e.message
    })
  }
}
