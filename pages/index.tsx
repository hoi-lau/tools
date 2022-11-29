import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HeadMeta from '../components/common/HeadMeta'
import Layout from '../components/layout/Layout'
// import thanosPic from '../public/img/thanos.jpeg'
import colorPickerPic from '../public/img/cpicker.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadMeta>
        <title>开发工具</title>
        <meta property="og:title" content="排行榜" />
        <meta property="og:description" content="在线工具 - 开发工具" />
        <meta name="title" content="在线工具 - 开发工具" />
        <meta name="keywords" content="在线工具 - 开发工具" />
        <meta name="description" content="在线工具 - 开发工具" />
      </HeadMeta>

      <Layout activeRoute="/">
        <div className="text-center">开发小工具, 提高效率, 不造轮子</div>
        <div className="grid mt-6 tool-list">
          <Link href={'/c/md2pdf'} target="_blank">
            <div className="card items-center">
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 6.5V6H2v.5h.5Zm4 0V6H6v.5h.5Zm0 4H6v.5h.5v-.5Zm7-7h.5v-.207l-.146-.147-.354.354Zm-3-3 .354-.354L10.707 0H10.5v.5ZM2.5 7h1V6h-1v1Zm.5 4V8.5H2V11h1Zm0-2.5v-2H2v2h1Zm.5-.5h-1v1h1V8Zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5H4ZM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6v1ZM6 6.5v4h1v-4H6Zm.5 4.5h1v-1h-1v1ZM9 9.5v-2H8v2h1ZM7.5 6h-1v1h1V6ZM9 7.5A1.5 1.5 0 0 0 7.5 6v1a.5.5 0 0 1 .5.5h1ZM7.5 11A1.5 1.5 0 0 0 9 9.5H8a.5.5 0 0 1-.5.5v1ZM10 6v5h1V6h-1Zm.5 1H13V6h-2.5v1Zm0 2H12V8h-1.5v1ZM2 5V1.5H1V5h1Zm11-1.5V5h1V3.5h-1ZM2.5 1h8V0h-8v1Zm7.646-.146 3 3 .708-.708-3-3-.708.708ZM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5h1ZM1 12v1.5h1V12H1Zm1.5 3h10v-1h-10v1ZM14 13.5V12h-1v1.5h1ZM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1ZM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5H1Z"
                  fill="#0c70e6"
                />
              </svg>
              <span className="ml-4 text-base">markdown 导出 pdf</span>
            </div>
          </Link>
          <Link href={'/c/svg2jsx'} target="_blank">
            <div className="card items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-filetype-jsx"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.075 14.841a1.13 1.13 0 0 0 .401.823c.13.108.288.192.478.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.776.15-.225.099-.4.24-.528.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM0 14.791c0 .165.027.32.082.466.055.147.136.277.243.39.11.113.245.202.407.267.164.062.354.093.569.093.42 0 .748-.115.984-.346.238-.23.358-.565.358-1.004v-2.725h-.791v2.745c0 .201-.046.357-.138.466-.092.11-.233.164-.422.164a.499.499 0 0 1-.454-.246.576.576 0 0 1-.073-.27H0Zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z"
                />
              </svg>
              <span className="ml-4 text-base">svg 转 JSX</span>
            </div>
          </Link>
          <Link href={'/c/zero_padding'} target="_blank">
            <div className="card items-center">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                width="1em"
              >
                <rect
                  x={6}
                  y={6}
                  width={36}
                  height={36}
                  rx={3}
                  fill="#2F88FF"
                  stroke="#000"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x={19}
                  y={14}
                  width={10}
                  height={20}
                  rx={5}
                  fill="#2F88FF"
                  stroke="#fff"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-4 text-base">生成零宽字符</span>
            </div>
          </Link>
          <Link href={'/d/thanos'} target="_blank">
            <div className="card items-center">
              <Image
                src={'https://img.imliuk.com/thanos.jpeg'}
                alt="thanos"
                priority={true}
                width={32}
                height={32}
                className="rounded-[16px]"
              />
              <span className="ml-4 text-base">Thanos Snap</span>
            </div>
          </Link>
          <Link href={'/c/j2t'} target="_blank">
            <div className="card items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 256 256"
                height="1em"
                width="1em"
              >
                <rect width="256" height="256" fill="#007ACC" rx="60" />
                <path
                  fill="#fff"
                  d="m56.611 128.849-.081 10.484h33.32v94.679h23.57v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565-.122-.162-20.399-.244-44.983-.203l-44.739.122-.122 10.443Zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224 2.357 2.52 5.851 7.112 6.136 8.209.081.325-11.053 7.802-17.798 11.987-.244.163-1.22-.894-2.317-2.519-3.291-4.795-6.745-6.868-12.028-7.233-7.761-.529-12.759 3.535-12.718 10.321 0 1.991.284 3.169 1.097 4.795 1.706 3.535 4.876 5.648 14.832 9.955 18.326 7.884 26.168 13.085 31.045 20.48 5.445 8.249 6.664 21.415 2.966 31.208-4.063 10.646-14.141 17.879-28.323 20.277-4.388.772-14.791.65-19.504-.203-10.281-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.121-.162 1.178-.812 2.356-1.503 1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.308 19.383 3.698 24.909-1.259 2.357-2.154 3.332-4.389 3.332-7.68 0-2.967-.366-4.267-1.91-6.502-1.991-2.844-6.054-5.242-17.595-10.24-13.206-5.689-18.895-9.224-24.096-14.832-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.616-1.219-12.678-.447-16.335 2.722-12.759 12.353-21.658 26.25-24.3 4.511-.853 14.994-.528 19.424.569Z"
                />
              </svg>

              <span className="ml-4 text-base">JSON生成TypeScript类型</span>
            </div>
          </Link>
          <Link href={'/c/j2dart'} target="_blank">
            <div className="card items-center">
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                height="1em"
                width="1em"
              >
                <defs>
                  <radialGradient
                    cx="50%"
                    cy="50.002%"
                    fx="50%"
                    fy="50.002%"
                    r="50.004%"
                    gradientTransform="scale(1 .99985)"
                    id="a"
                  >
                    <stop stopColor="#FFF" stopOpacity={0.1} offset="0%" />
                    <stop stopColor="#FFF" stopOpacity={0} offset="100%" />
                  </radialGradient>
                </defs>
                <path
                  d="M52.209 203.791 8.413 159.995C3.218 154.67 0 147.141 0 139.782c0-3.407 1.92-8.733 3.369-11.782l40.427-84.204 8.413 159.995Z"
                  fill="#01579B"
                />
                <path
                  d="M202.116 52.209 158.32 8.413C154.5 4.573 146.538 0 139.8 0c-5.796 0-11.48 1.167-15.15 3.369L43.815 43.796l158.301 8.413ZM104.418 256h106.111v-45.471l-79.16-25.276-72.422 25.276z"
                  fill="#40C4FF"
                />
                <path
                  d="M43.796 180.209c0 13.513 1.694 16.826 8.413 23.582l6.738 6.738h151.582l-74.097-84.204-92.636-82.53V180.21Z"
                  fill="#29B6F6"
                />
                <path
                  d="M178.534 43.777H43.796L210.529 210.51H256V106.093L202.097 52.19c-7.566-7.585-14.285-8.413-23.563-8.413Z"
                  fill="#01579B"
                />
                <path
                  d="M53.903 205.466c-6.738-6.756-8.413-13.419-8.413-25.257V45.47l-1.675-1.675v136.413c-.02 11.838-.02 15.113 10.088 25.257l5.044 5.044-5.044-5.044Z"
                  fill="#FFF"
                  opacity={0.2}
                />
                <path
                  fill="#263238"
                  opacity={0.2}
                  d="M254.325 104.418v104.417h-45.471l1.675 1.694H256V106.093z"
                />
                <path
                  d="M202.116 52.209c-8.356-8.357-15.188-8.413-25.257-8.413H43.815l1.675 1.675h131.369c5.025 0 17.71-.847 25.257 6.738Z"
                  fill="#FFF"
                  opacity={0.2}
                />
                <path
                  d="m254.325 104.418-52.209-52.21L158.32 8.414C154.5 4.573 146.538 0 139.8 0c-5.796 0-11.48 1.167-15.15 3.369L43.815 43.796 3.388 128c-1.45 3.068-3.37 8.394-3.37 11.782 0 7.359 3.238 14.868 8.414 20.213l40.351 40.07c.96 1.185 2.09 2.39 3.426 3.726l1.675 1.675 5.044 5.044 43.796 43.796 1.675 1.675H210.49v-45.47h45.471V106.092l-1.637-1.675Z"
                  fill="url(#a)"
                  opacity={0.2}
                />
              </svg>

              <span className="ml-4 text-base">JSON生成Dart类型</span>
            </div>
          </Link>
          {/* <Link href={'/convert/md2pdf'} target="_blank">
            <div className="card items-center">
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 6.5V6H2v.5h.5Zm4 0V6H6v.5h.5Zm0 4H6v.5h.5v-.5Zm7-7h.5v-.207l-.146-.147-.354.354Zm-3-3 .354-.354L10.707 0H10.5v.5ZM2.5 7h1V6h-1v1Zm.5 4V8.5H2V11h1Zm0-2.5v-2H2v2h1Zm.5-.5h-1v1h1V8Zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5H4ZM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6v1ZM6 6.5v4h1v-4H6Zm.5 4.5h1v-1h-1v1ZM9 9.5v-2H8v2h1ZM7.5 6h-1v1h1V6ZM9 7.5A1.5 1.5 0 0 0 7.5 6v1a.5.5 0 0 1 .5.5h1ZM7.5 11A1.5 1.5 0 0 0 9 9.5H8a.5.5 0 0 1-.5.5v1ZM10 6v5h1V6h-1Zm.5 1H13V6h-2.5v1Zm0 2H12V8h-1.5v1ZM2 5V1.5H1V5h1Zm11-1.5V5h1V3.5h-1ZM2.5 1h8V0h-8v1Zm7.646-.146 3 3 .708-.708-3-3-.708.708ZM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5h1ZM1 12v1.5h1V12H1Zm1.5 3h10v-1h-10v1ZM14 13.5V12h-1v1.5h1ZM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1ZM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5H1Z"
                  fill="#000"
                />
              </svg>
              <span className="ml-4 text-base">CSS 渐变</span>
            </div>
          </Link> */}
          {/* <Link href={'/css/eye_dropper'} target="_blank">
            <div className="card items-center">
              <Image
                src={colorPickerPic}
                alt="color picker"
                priority={true}
                width={32}
              />
              <span className="ml-4 text-base">取色器eye dropper</span>
            </div>
          </Link> */}
        </div>
      </Layout>
    </div>
  )
}
