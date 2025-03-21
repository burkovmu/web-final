import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import { stolzl } from './fonts';

export const metadata = {
  title: 'Web Studio',
  description: 'Modern web development studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={stolzl.variable}>
      <body>
        <Navigation />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
