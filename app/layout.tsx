import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Nextjsv13 Fullstack Course + Authentication',
  description: 'Nextjsv13 Fullstack Course + Authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-200 text-black'>
        {children}
      </body>
    </html>
  )
}
