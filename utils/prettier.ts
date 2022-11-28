export const prettierParsers: Record<string, string> = {
  css: 'postcss',
  javascript: 'babel',
  jsx: 'babel',
  svg: 'html',
  xml: 'html',
  typescript: 'typescript'
} as const

export const supportedLanguages = [
  'json',
  'babel',
  'html',
  'postcss',
  'graphql',
  'markdown',
  'yaml',
  'typescript',
  'flow'
] as const

export type supLang = typeof supportedLanguages[number]
