import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashutosh Gaurav',
  description: '"Hello there! I&#x27;m Ashutosh Gaurav, a passionate developer currently studying at IIT Madras (Data Science and Application). I specialize in crafting interactive web experiences using React and Python.',
}
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body >{children}</body>
//     </html>
//   )
// }