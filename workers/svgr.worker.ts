/* @ts-ignore */
import { transform } from '@svgr/core'
// import {} from '@svgr/plugin-jsx'
import svgrjsx from '@svgr/plugin-jsx'
import { prettify } from '@utils/prettify'

const _self: any = self
_self.onmessage = async ({ data }: any) => {
  const { payload, id } = data
  const { value } = payload
  try {
    const result = await transform(value, {
      plugins: [svgrjsx],
      svgo: false
    })
    const res = await prettify('babel', result)
    _self.postMessage({
      payload: res,
      id
    })
  } catch (e: any) {
    _self.postMessage({
      id,
      err: e.message
    })
  }
}
