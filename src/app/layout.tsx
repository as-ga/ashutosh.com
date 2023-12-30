import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashutosh Gaurav',
  description: '"Hello there! I&#x27;m Ashutosh Gaurav, a passionate developer currently studying at IIT Madras (Data Science and Application). I specialize in crafting interactive web experiences using React and Python.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
