import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-6 block">
              Web Studio
            </Link>
            <p className="text-gray-400 max-w-md">
              Мы создаем инновационные цифровые решения, которые помогают бизнесу 
              достигать новых высот в современном мире технологий.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@webstudio.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@webstudio.com
                </a>
              </li>
              <li>
                <a href="tel:+79999999999" className="text-gray-400 hover:text-white transition-colors">
                  +7 (999) 999-99-99
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Web Studio. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 