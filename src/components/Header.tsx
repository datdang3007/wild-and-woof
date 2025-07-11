import { useState } from 'react';
import { Search, Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  currentLanguage: 'en' | 'vi';
  onLanguageChange: (lang: 'en' | 'vi') => void;
}

const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = {
    en: [
      { name: 'Home', href: '/' },
      { name: 'Animals', href: '/animals' },
      { name: 'Classification', href: '/classification' },
      { name: 'Conservation', href: '/conservation' },
      { name: 'News', href: '/news' },
      { name: 'About', href: '/about' },
    ],
    vi: [
      { name: 'Trang chủ', href: '/vi' },
      { name: 'Động vật', href: '/vi/dong-vat' },
      { name: 'Phân loại', href: '/vi/phan-loai' },
      { name: 'Bảo tồn', href: '/vi/bao-ton' },
      { name: 'Tin tức', href: '/vi/tin-tuc' },
      { name: 'Giới thiệu', href: '/vi/gioi-thieu' },
    ],
  };

  const text = {
    en: {
      search: 'Search animals...',
      language: 'Language',
    },
    vi: {
      search: 'Tìm kiếm động vật...',
      language: 'Ngôn ngữ',
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-nature">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={currentLanguage === 'vi' ? '/vi' : '/'} className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg hero-gradient">
              <span className="text-xl font-bold text-white">🦁</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-gradient">
                Wildlife Explorer
              </h1>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation[currentLanguage].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder={text[currentLanguage].search}
                className="w-64 pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm uppercase">{currentLanguage}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card">
                <DropdownMenuItem
                  onClick={() => onLanguageChange('en')}
                  className={currentLanguage === 'en' ? 'bg-muted' : ''}
                >
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onLanguageChange('vi')}
                  className={currentLanguage === 'vi' ? 'bg-muted' : ''}
                >
                  🇻🇳 Tiếng Việt
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="py-4 space-y-4">
              {/* Mobile Search */}
              <div className="px-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={text[currentLanguage].search}
                    className="w-full pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2 px-4">
                {navigation[currentLanguage].map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;