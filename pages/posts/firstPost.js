import Head from "next/head"
import Link from "next/link"

export default function FirstPost() {
    return (
        <div>
        <Head>
            <title>First Post</title>
        </Head>
        <div>
            <h1>First Post</h1>
            <Link href="/">Back to home</Link>
        </div>        
        </div>
    )
}