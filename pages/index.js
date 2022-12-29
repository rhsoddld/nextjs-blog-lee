import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/Layout'

import Link from "next/link"
import utilStyle from "../styles/utils.module.css"

const inter = Inter({ subsets: ['latin'] })

///SSG Case
import { getPostsData } from "../lib/post"

export async function getStaticProps () {
  const allPostsData = getPostsData() //id, title, date, thumbnail
  console.log(allPostsData)

  return {
    props: {
      allPostsData,
    }
  }
}

//SSR Case
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // 
//     }
//   }
// }


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
       <section className={`${utilStyle.headingMd}`}>
        <p>I am super engineer</p>
       </section>
       <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}> 
        <h2>Engineer Blog</h2>
        <div className={`${styles.grid}`}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`}
              className={styles.thumbnailImage}>
              </img>
            </Link>
            <Link href={`/posts/${id}`}>
              <p className={utilStyle.boldText}>{title}</p>
            </Link>
            <br />
            <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
       </section>

    </Layout>
  )
}
