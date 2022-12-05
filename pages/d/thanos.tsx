import { useEffect, useRef, useState } from 'react'
import HeadMeta from '../../components/common/HeadMeta'
import Image from 'next/image'
import styles from './thanos.module.css'
import { isMobile } from '../../utils/browserUtils'
import Link from 'next/link'

const ThanosSnap = 'https://img.imliuk.com/thanos_snap.png'
const ThanosTime = 'https://img.imliuk.com/thanos_time.png'
// function
const offset = {
  x: 28 * 2,
  y: 40 * 2,
  deg: 20 * 2
}
function randomParams(total: number) {
  const xSet = new Set<number>()
  while (xSet.size < total) {
    xSet.add(Math.floor(Math.random() * offset.x))
  }
  const ySet = new Set<number>()
  while (ySet.size < total) {
    ySet.add(Math.floor(Math.random() * offset.y))
  }
  const degSet = new Set<number>()
  while (degSet.size < total) {
    degSet.add(Math.floor(Math.random() * offset.deg))
  }
  return [Array.from(xSet), Array.from(ySet), Array.from(degSet)]
}

function randomImageData(
  img: HTMLImageElement,
  total: number,
  width: number,
  height: number
) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  ctx?.drawImage(img, 0, 0, width, height)
  const imgData = ctx?.getImageData(0, 0, width, height, {
    colorSpace: 'srgb'
  })
  const res: number[][] = []
  if (!imgData) return res
  const len = imgData?.data.length || 0
  const qLen = len / 4
  for (let i = 0; i < total; i++) {
    res.push(Array(len).fill(0))
  }
  for (let j = 0; j < qLen; j++) {
    const idx = Math.floor(Math.random() * total)
    res[idx][j * 4] = imgData.data[j * 4]
    res[idx][j * 4 + 1] = imgData.data[j * 4 + 1]
    res[idx][j * 4 + 2] = imgData.data[j * 4 + 2]
    res[idx][j * 4 + 3] = imgData.data[j * 4 + 3]
  }
  return res
}

async function randomHeroAnimation(
  imgDataList: number[][],
  width: number,
  height: number,
  onCreate: (el: HTMLCanvasElement) => void
) {
  const paramsList = randomParams(imgDataList.length)
  const dpr = window.devicePixelRatio || 1
  for (let i = 0; i < imgDataList.length; i++) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.classList.add('absolute')
    canvas.classList.add('inset-0')
    canvas.classList.add(styles.ashHero)

    const dataImage = ctx?.createImageData(width, height, {
      colorSpace: 'srgb'
    })
    ctx?.scale(dpr, dpr)
    dataImage?.data.set(imgDataList[i])
    if (dataImage) {
      ctx?.putImageData(dataImage, 0, 0)
      onCreate(canvas)
      const delay = i * 0.02 + 0.001
      canvas.style.transitionDelay = `${delay}s`
      canvas.style.transform = 'none'
      canvas.style.opacity = '1'
      setTimeout(() => {
        canvas.style.transform = `rotate(${
          paramsList[2][i] - offset.deg / 2
        }deg) translate(${paramsList[0][i] - offset.x / 2}px, ${
          paramsList[1][i] - offset.y / 2
        }px)`
        canvas.style.transformOrigin = `${width / 4}px ${height / 4}px`
        canvas.style.opacity = '0'
      }, 600)
    }
  }
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, imgDataList.length * 0.02 + 3500)
  })
}
const heroes = [
  { img: 'https://img.imliuk.com/CapAmerica.webp', alt: 'Captain America' },
  { img: 'https://img.imliuk.com/BlackWidow.webp', alt: 'Black Widow' },
  { img: 'https://img.imliuk.com/Thor.webp', alt: 'Thor' },
  { img: 'https://img.imliuk.com/IronMan.webp', alt: 'Iron Man' },
  { img: 'https://img.imliuk.com/AntMan.webp', alt: 'Spider Man' },
  { img: 'https://img.imliuk.com/BlackPanther.webp', alt: 'Ant Man' },
  { img: 'https://img.imliuk.com/Bucky.webp', alt: 'BlackPanther' },
  { img: 'https://img.imliuk.com/CapMarvel.webp', alt: 'Bucky' },
  { img: 'https://img.imliuk.com/Coulson.webp', alt: 'CapMarvel' },
  { img: 'https://img.imliuk.com/DeadPool.jpg', alt: 'Coulson' },
  { img: 'https://img.imliuk.com/DoctorStrange.jpg', alt: 'DeadPool' },
  { img: 'https://img.imliuk.com/Gamora.webp', alt: 'DoctorStrange' },
  { img: 'https://img.imliuk.com/Groot.webp', alt: 'Gamora' },
  { img: 'https://img.imliuk.com/Hawkeye.webp', alt: 'Groot' },
  { img: 'https://img.imliuk.com/loki.webp', alt: 'Hawkeye' },
  { img: 'https://img.imliuk.com/Nebula.webp', alt: 'loki' },
  { img: 'https://img.imliuk.com/NickFury.webp', alt: 'Nebula' },
  { img: 'https://img.imliuk.com/Rocket.webp', alt: 'NickFury' },
  { img: 'https://img.imliuk.com/SamWilson.webp', alt: 'Rocket' },
  { img: 'https://img.imliuk.com/SpiderMan.jpeg', alt: 'SamWilson' },
  { img: 'https://img.imliuk.com/StarLord.webp', alt: 'StarLord' },
  { img: 'https://img.imliuk.com/Textless.webp', alt: 'Textless' },
  { img: 'https://img.imliuk.com/Wanda.webp', alt: 'Wanda' },
  { img: 'https://img.imliuk.com/WarMachine.jpg', alt: 'WarMachine' }
]
export default function Thanos() {
  const [offset, setOffset] = useState(0)
  const [currentGauntletImg, setCurrentGauntletImg] = useState(ThanosSnap)
  const pending = useRef(false)
  const recover = useRef(false)
  const reverseRef = useRef<HTMLAudioElement>(null)
  const snapRef = useRef<HTMLAudioElement>(null)
  const thanosDust1Ref = useRef<HTMLAudioElement>(null)
  const thanosDust2Ref = useRef<HTMLAudioElement>(null)
  const thanosDust3Ref = useRef<HTMLAudioElement>(null)
  const thanosDust4Ref = useRef<HTMLAudioElement>(null)
  const thanosDust5Ref = useRef<HTMLAudioElement>(null)
  const thanosDustList = [
    thanosDust1Ref,
    thanosDust2Ref,
    thanosDust3Ref,
    thanosDust4Ref,
    thanosDust5Ref
  ]
  const heroWrapRef = useRef<HTMLDivElement>(null)
  const snapDivRef = useRef<HTMLDivElement>(null)
  const spliceSize = 28
  function handleGauntletClick() {
    if (pending.current) return
    pending.current = true
    startSnapAnimation()
    playAudio()
  }
  function startSnapAnimation() {
    const targetImg = recover.current ? ThanosTime : ThanosSnap
    setCurrentGauntletImg(targetImg)
    const cancelId = setInterval(() => {
      setOffset((offset) => {
        if (offset > -48) {
          return offset - 1
        } else {
          // pending.current = false
          startAnimation()
          clearInterval(cancelId)
        }
        return 0
      })
    }, 84)
  }
  function playAudio() {
    if (recover.current) {
      reverseRef.current?.play()
    } else {
      snapRef.current?.play()
    }
  }

  async function startAnimation() {
    const imgList = heroWrapRef.current?.querySelectorAll('img') || []
    if (recover.current) {
      Array.prototype.forEach.call(imgList, (el) => {
        el.style.opacity = '1'
        while (el.parentElement.lastElementChild instanceof HTMLCanvasElement) {
          el.parentElement.removeChild(el.parentElement.lastElementChild)
        }
      })
      pending.current = false
      recover.current = !recover.current
      return
    }
    const dpr = window.devicePixelRatio || 1
    if (imgList?.length === 0) return
    const idxSet = new Set<number>()
    const width = imgList[0].offsetWidth * dpr
    const height = imgList[0].offsetHeight * dpr
    while (idxSet.size * 2 < imgList.length) {
      idxSet.add(Math.floor(Math.random() * imgList.length))
    }
    const list = Array.from(idxSet)
    for (let i = 0; i < list.length; i++) {
      const imgDataList = randomImageData(
        imgList[list[i]],
        spliceSize,
        width,
        height
      )
      imgList[list[i]].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, 500)
      })
      if (!isMobile()) {
        setTimeout(() => {
          try {
            thanosDustList[i % 5].current?.play()
          } catch (error) {}
        }, 500)
      }
      await randomHeroAnimation(imgDataList, width, height, (el) => {
        imgList[list[i]].style.opacity = '0'
        imgList[list[i]].parentElement?.appendChild(el)
      })
    }
    if (snapDivRef.current) {
      snapDivRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
    pending.current = false
    recover.current = !recover.current
  }
  return (
    <div className={`h-screen max-w-screen-2xl mx-auto flex flex-col `}>
      {/* bg-slate-50 */}
      <HeadMeta>
        <title>Thanos Snap</title>
        <meta property="og:title" content="Thanos Snap" />
        <meta property="og:description" content="Thanos Snap" />
        <meta name="title" content="Thanos Snap" />
        <meta name="keywords" content="Thanos Snap" />
        <meta name="description" content="Thanos Snap" />
      </HeadMeta>
      <div>
        <div className="my-4">
          <div className="mb-4 text-gray-800 text-center">
            <span>模拟灰飞烟灭效果</span>
            <Link
              href={
                'https://github.com/hoi-lau/tools/blob/main/pages/d/thanos.tsx#L138'
              }
              target="_blank"
              className="underline text-blue-600 ml-2"
            >
              {/* <button className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> */}
              Show me the code
              {/* </button> */}
            </Link>
          </div>
          <audio ref={snapRef} preload="none">
            <source src="/audio/thanos_snap_sound.mp3" />
          </audio>
          <audio ref={reverseRef} preload="none">
            <source src="/audio/thanos_reverse_sound.mp3" />
          </audio>
          <audio ref={thanosDust1Ref} preload="none">
            <source src="/audio/thanos_dust_1.mp3" />
          </audio>
          <audio ref={thanosDust2Ref} preload="none">
            <source src="/audio/thanos_dust_2.mp3" />
          </audio>
          <audio ref={thanosDust3Ref} preload="none">
            <source src="/audio/thanos_dust_3.mp3" />
          </audio>
          <audio ref={thanosDust4Ref} preload="none">
            <source src="/audio/thanos_dust_4.mp3" />
          </audio>
          <audio ref={thanosDust5Ref} preload="none">
            <source src="/audio/thanos_dust_5.mp3" />
          </audio>
          <div
            className={`cursor-pointer mx-auto ${styles.gauntlet}`}
            style={{
              backgroundImage: `url(${currentGauntletImg})`,
              backgroundPositionX: `${offset * 80}px`
            }}
            onClick={handleGauntletClick}
            ref={snapDivRef}
          >
            <Image
              src={'https://img.imliuk.com/202212051630989.png'}
              alt={'elon musk'}
              width={80}
              height={50}
              className={`${styles.elonMusk}`}
            ></Image>
          </div>
        </div>
        <div ref={heroWrapRef} className={`${styles.heroList} overflow-hidden`}>
          {heroes.map((el, index) => {
            return (
              <div key={index} className={`${styles.imgWrapper} relative`}>
                <Image
                  src={el.img}
                  alt={el.alt}
                  sizes="(max-height: 264px) (max-width: 200px)"
                  fill
                  priority
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
