import prettier from 'prettier/standalone'
import { prettierParsers, supLang, supportedLanguages } from '@utils/prettier'

const plugins = [
  require('prettier/parser-html'),
  // require('prettier/parser-postcss'),
  // require('prettier/parser-graphql'),
  require('prettier/parser-babel'),
  require('prettier/parser-markdown'),
  require('prettier/parser-typescript')
]

export async function prettify(language: supLang, value: string) {
  let result

  if (!supportedLanguages.includes(language)) return value

  if (language === 'json') {
    result = JSON.stringify(JSON.parse(value), null, 2)
  } else {
    result = prettier.format(value, {
      parser: prettierParsers[language] || language,
      plugins,
      semi: false
    })
  }

  return result
}
