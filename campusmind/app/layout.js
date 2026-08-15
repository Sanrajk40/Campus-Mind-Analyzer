import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import MainWrapper from '@/components/MainWrapper';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Campus Mind Portal',
  description: 'A student journaling portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MainWrapper>
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center p-4">
              {children}
            </main>
            <Footer />
          </MainWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
