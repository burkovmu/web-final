import './globals.css';
import CustomCursor from '@/components/CustomCursor';
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
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
