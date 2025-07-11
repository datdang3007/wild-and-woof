import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  currentLanguage: 'en' | 'vi';
}

const Footer = ({ currentLanguage }: FooterProps) => {
  const text = {
    en: {
      description: "Discover the world's incredible wildlife and join our mission to protect and preserve nature for future generations.",
      quickLinks: "Quick Links",
      explore: "Explore",
      support: "Support",
      contact: "Contact Us",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      newsletterDesc: "Stay updated with the latest wildlife discoveries and conservation news.",
      subscribe: "Subscribe",
      copyright: "© 2024 Wildlife Explorer. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      links: {
        home: "Home",
        animals: "Animals",
        classification: "Classification",
        conservation: "Conservation",
        news: "News",
        about: "About",
        donate: "Donate",
        volunteer: "Volunteer",
        adopt: "Adopt an Animal",
        contact: "Contact",
        careers: "Careers",
        partnership: "Partnership"
      }
    },
    vi: {
      description: "Khám phá thế giới động vật hoang dã tuyệt vời và tham gia sứ mệnh bảo vệ thiên nhiên cho các thế hệ tương lai.",
      quickLinks: "Liên kết nhanh",
      explore: "Khám phá",
      support: "Hỗ trợ",
      contact: "Liên hệ",
      followUs: "Theo dõi chúng tôi",
      newsletter: "Bản tin",
      newsletterDesc: "Cập nhật những khám phá mới nhất về động vật hoang dã và tin tức bảo tồn.",
      subscribe: "Đăng ký",
      copyright: "© 2024 Wildlife Explorer. Tất cả quyền được bảo lưu.",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản dịch vụ",
      links: {
        home: "Trang chủ",
        animals: "Động vật",
        classification: "Phân loại",
        conservation: "Bảo tồn",
        news: "Tin tức",
        about: "Giới thiệu",
        donate: "Quyên góp",
        volunteer: "Tình nguyện",
        adopt: "Nhận nuôi động vật",
        contact: "Liên hệ",
        careers: "Tuyển dụng",
        partnership: "Hợp tác"
      }
    }
  };

  const currentText = text[currentLanguage];
  const baseUrl = currentLanguage === 'vi' ? '/vi' : '';

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-nature">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <span className="text-xl font-bold">🦁</span>
              </div>
              <h3 className="text-xl font-display font-bold">Wildlife Explorer</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              {currentText.description}
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">{currentText.followUs}</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{currentText.explore}</h4>
            <ul className="space-y-2">
              <li>
                <Link to={`${baseUrl}/`} className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.home}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/animals`} className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.animals}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/classification`} className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.classification}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/conservation`} className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.conservation}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/news`} className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.news}
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/about`} className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="font-semibold mb-4">{currentText.support}</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.donate}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.volunteer}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.adopt}
                </a>
              </li>
              <li>
                <Link to={`${baseUrl}/contact`} className="text-primary-foreground/80 hover:text-white transition-colors">
                  {currentText.links.contact}
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@wildlifeexplorer.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Conservation Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              {currentText.copyright}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to={`${baseUrl}/privacy`} className="text-primary-foreground/80 hover:text-white transition-colors">
                {currentText.privacy}
              </Link>
              <Link to={`${baseUrl}/terms`} className="text-primary-foreground/80 hover:text-white transition-colors">
                {currentText.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;