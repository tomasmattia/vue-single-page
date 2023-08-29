import '@/app/globals.css'
import { Providers } from '@/app/components/Provider'

export const metadata = {
  title: 'Template',
}
 
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        {/* Wrapping the children prop */}
        <Providers>{children}</Providers> 
      </body>
    </html>
  )
}