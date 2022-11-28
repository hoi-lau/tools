interface Menu {
  title: string
  children: Link[]
}

interface Link {
  title: string
  target: '_self' | '_blank' | '_parent' | '_top'
  href: string
}

const convertRoutes: Menu[] = [
  {
    title: 'Json',
    children: [
      {
        title: 'Json to TypeScript',
        href: '/c/j2t',
        target: '_self'
      },
      {
        title: 'Json to Dart',
        href: '/c/j2dart',
        target: '_self'
      }
    ]
    // children: []
  },
  {
    title: 'Markdown',
    children: [
      {
        title: 'Markdown to Pdf',
        href: '/c/md2pdf',
        target: '_blank'
      }
    ]
  },
  {
    title: 'Svg',
    children: [
      {
        title: 'Svg to JSX',
        href: '/c/svg2jsx',
        target: '_self'
      }
    ]
  },
  {
    title: 'Other',
    children: [
      {
        title: '文本转零宽字符',
        href: '/c/zero_padding',
        target: '_self'
      }
    ]
  }
]

export default convertRoutes
