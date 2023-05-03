import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import client from '@/graphql/client'
import { GET_FOOTER } from '@/graphql/queries'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DALO - MDU',
  description: 'Datalogerna på MDU',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const { data } = await client.query({ query: GET_FOOTER })
  const FooterItems: any[] = data.footer.data.attributes.items;
  return (
    <html lang="en">
      <head>
        {/*favicon*/}
        <link rel="icon" href="/uploads/favicon.ico" />
        </head>
      <body className="dark:bg-neutral-950 dark:text-white bg-yellow-50 text-neutral-950 " >
        <main className=" p-10 md:p-24 md:pt-32 pt-32  min-h-screen h-full flex flex-col">
        <Header/>
          {children}
        </main>

          <Footer items={FooterItems} />

      </body>
      
    </html>
  )
}
