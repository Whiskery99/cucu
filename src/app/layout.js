// import { Inter } from 'next/font/google';
import './globals.css';
import GlobalState from '@/context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Alert from '@/components/Alerts/WelcomeAlert';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fratcht Logistics | Logistics & Parcel delivery at its peak...',
  description: '',

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./logo.svg" sizes="any" />
        
      </Head>
      <body className="bg-[#111]">
        <GlobalState>
          <Navbar />

          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          {/* <Footer /> */}
        </GlobalState>
        // <script src="//code.tidio.co/xu5x80n1qpwxrypqeeochchyeh4jsqwm.js" async></script>
      </body>
    </html>
  );
}
