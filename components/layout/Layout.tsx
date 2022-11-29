import Link from 'next/link'
import Image from 'next/image'
import styles from './Layout.module.css'
import itoolsPic from '../../public/img/itools.webp'

type LayoutProps = React.PropsWithChildren & {
  activeRoute: string,
  mainClassName?: string
}

const navList = [
  {
    path: '/js',
    title: 'js 工具'
  },
  {
    path: '/convert',
    title: '转换工具'
  },
  {
    path: '/css',
    title: 'css工具'
  },
  {
    path: '/ttools',
    title: '文本工具'
  }
]
export default function Layout(props: LayoutProps) {
  const node = navList.map((el, index) => {
    return (
      <Link
        key={index}
        className={`p-4 ml-6 hover:opacity-75 ${
          props.activeRoute === el.path.substring(1) && 'text-blue-600'
        }`}
        href={el.path}
      >
        {el.title}
      </Link>
    )
  })

  return (
    <div className={`${styles.layout} antialiased w-screen h-screen text-slate-500 dark:text-slate-400 bg-white dark:bg-gray-700`}>
      <header
        className={`relative text-sm ${styles.header} pt-8`}
      >
        <nav
          aria-label="Global"
          className="max-w-screen-xl mx-auto text-slate-700 dark:text-slate-200"
        >
          <div className="relative flex items-center py-[1.125rem]">
            <Link
              className="mx-auto text-4xl"
              href="/"
            >
              <Image
                alt="itools"
                src={itoolsPic}
                width={400}
                priority={true}
              ></Image>
            </Link>
            {/* <div className="hidden text-lg lg:flex lg:items-center">{node}</div>
            <div className="lg:hidden block cursor-pointer hover:opacity-75">
              <svg width="24" height="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div> */}
          </div>
        </nav>
      </header>
      <main className={`max-w-screen-xl mt-2 mx-auto ${styles.main}`}>
        {props.children}
      </main>
    </div>
  )
}
