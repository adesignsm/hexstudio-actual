import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(children);
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
