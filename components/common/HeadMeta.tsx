import Head from 'next/head'
import Script from 'next/script'

export default function HeadMeta(props: React.PropsWithChildren) {
  return (
    <>
      <Head>
        {/* <link
        rel="search"
        type="application/opensearchdescription+xml"
        title="在线工具"
        href="https://tool.lu/opensearch.xml"
      /> */}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"
        />
        <meta name="author" content="lauhoi" />
        <meta property="og:locale" content="zh_CN" />
        {/* <meta property="og:locale:alternate" content="en_US" /> */}

        <meta property="og:site_name" content="在线工具" />
        {/* <meta property="og:description" content="在线工具 - 排行榜" /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="//qn11.tool.lu/202111/23/135406hUyR4KvpgePlGuTh_1200x630.png"
        />
        <meta property="og:url" content="https://tool.lu/top/" />
        {/* <meta name="keywords" content="在线工具,排行榜" /> */}
        {/* <meta name="description" content="在线工具 - 排行榜" /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="在线工具" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="pink" />
        {props.children}
      </Head>
      <Script
        id="996"
        src="https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js"
        onLoad={() => {
          /* @ts-ignore */
          new Aegis({
            id: '0G0aPFz66RGgxodD53',
            reportApiSpeed: true,
            reportAssetSpeed: true,
            spa: true
          })
        }}
      ></Script>
    </>
  )
}
