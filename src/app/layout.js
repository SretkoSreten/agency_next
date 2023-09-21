import Footer from '@/constant/Footer/Footer'
import './globals.css'
import { Nunito} from 'next/font/google'
import Header from '@/constant/Navbar/Header'
import BottomBar from '@/constant/BottomBar/BottomBar'
import WhatsApp from '@/constant/FAB/WhatsApp'

const nunito = Nunito({ 
  weight: ['200','300','400','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap'
 })

export const metadata = {
  title: 'Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <Header/>
      {children}
      <BottomBar/>
      <WhatsApp/>
      <Footer/></body>
    </html>
  )
}
