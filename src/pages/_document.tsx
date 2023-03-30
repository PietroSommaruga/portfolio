import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'



export default function Document() {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
  setTheme(localStorage.getItem('theme'));

  }, [])

  console.log(theme)
  
    return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
