import './globals.css'
import { Inter, Archivo,Josefin_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Josefin_Sans',
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata = {
  title: 'VeekDesigns',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${archivo.variable} ${josefin.variable}`}>{children}</body>
    </html>
  )
}
