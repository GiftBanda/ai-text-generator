import '@styles/globals.css'
import Nav from '@components/nav';
import Provider from '@components/Provider';


export const metadata = {
  title: 'Ai text generator',
  description: 'Discover Ai generatored text',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
        <div className='main'>
        
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
