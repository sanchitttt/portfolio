import './globals.css'
import { Poppins } from 'next/font/google'

const poppin = Poppins({
  subsets: ['latin'], weight:
    ["100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700"
    ]
})

export const metadata = {
  title: 'Sanchit | Portfolio',
  description: "Checkout Sanchit's full stack developer portfolio",
}

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppin.className + ' bg-[#141414]'}>{children}</body>

    </html>
  )
}
