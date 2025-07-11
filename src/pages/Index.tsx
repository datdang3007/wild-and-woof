import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, Search, Globe, Shield, Camera, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface LayoutContext {
  currentLanguage: 'en' | 'vi';
  onLanguageChange: (lang: 'en' | 'vi') => void;
}

const Index = () => {
  const { currentLanguage } = useOutletContext<LayoutContext>();

  const text = {
    en: {
      hero: {
        title: "Discover the Wild",
        subtitle: "Journey into Nature's Greatest Adventures",
        description: "Explore the incredible diversity of wildlife from around the globe. Learn about conservation, behavior, and the fascinating stories of Earth's most amazing creatures.",
        cta: "Start Exploring",
        secondary: "Learn More"
      },
      features: {
        title: "Explore Wildlife Like Never Before",
        subtitle: "Immerse yourself in the natural world with our comprehensive platform",
        items: [
          {
            icon: Search,
            title: "Advanced Search",
            description: "Find any species instantly with our intelligent search and filtering system"
          },
          {
            icon: Globe,
            title: "Global Coverage",
            description: "Discover animals from every continent and habitat on Earth"
          },
          {
            icon: Shield,
            title: "Conservation Focus",
            description: "Learn about conservation status and protection efforts worldwide"
          },
          {
            icon: Camera,
            title: "Rich Media",
            description: "High-quality photos, videos, and interactive content"
          },
          {
            icon: BookOpen,
            title: "Educational Content",
            description: "Comprehensive information backed by scientific research"
          },
          {
            icon: Users,
            title: "Community Driven",
            description: "Join a community passionate about wildlife conservation"
          }
        ]
      },
      stats: {
        species: "10,000+",
        speciesLabel: "Species Documented",
        photos: "50,000+",
        photosLabel: "High-Quality Images",
        conservation: "500+",
        conservationLabel: "Conservation Projects",
        countries: "195",
        countriesLabel: "Countries Covered"
      },
      cta: {
        title: "Ready to Begin Your Wildlife Journey?",
        description: "Join thousands of nature enthusiasts discovering the wonders of our planet's incredible biodiversity.",
        button: "Explore Animals Now"
      }
    },
    vi: {
      hero: {
        title: "Khám Phá Thế Giới Hoang Dã",
        subtitle: "Hành Trình Vào Những Cuộc Phiêu Lưu Vĩ Đại Của Thiên Nhiên",
        description: "Khám phá sự đa dạng đáng kinh ngạc của động vật hoang dã từ khắp nơi trên thế giới. Tìm hiểu về bảo tồn, hành vi và những câu chuyện hấp dẫn của những sinh vật tuyệt vời nhất Trái Đất.",
        cta: "Bắt Đầu Khám Phá",
        secondary: "Tìm Hiểu Thêm"
      },
      features: {
        title: "Khám Phá Động Vật Hoang Dã Chưa Từng Có",
        subtitle: "Đắm mình trong thế giới tự nhiên với nền tảng toàn diện của chúng tôi",
        items: [
          {
            icon: Search,
            title: "Tìm Kiếm Nâng Cao",
            description: "Tìm bất kỳ loài nào ngay lập tức với hệ thống tìm kiếm và lọc thông minh"
          },
          {
            icon: Globe,
            title: "Phạm Vi Toàn Cầu",
            description: "Khám phá động vật từ mọi lục địa và môi trường sống trên Trái Đất"
          },
          {
            icon: Shield,
            title: "Tập Trung Bảo Tồn",
            description: "Tìm hiểu về tình trạng bảo tồn và những nỗ lực bảo vệ trên toàn thế giới"
          },
          {
            icon: Camera,
            title: "Nội Dung Phong Phú",
            description: "Ảnh chất lượng cao, video và nội dung tương tác"
          },
          {
            icon: BookOpen,
            title: "Nội Dung Giáo Dục",
            description: "Thông tin toàn diện được hỗ trợ bởi nghiên cứu khoa học"
          },
          {
            icon: Users,
            title: "Cộng Đồng Tham Gia",
            description: "Tham gia cộng đồng đam mê bảo tồn động vật hoang dã"
          }
        ]
      },
      stats: {
        species: "10.000+",
        speciesLabel: "Loài Đã Ghi Nhận",
        photos: "50.000+",
        photosLabel: "Hình Ảnh Chất Lượng Cao",
        conservation: "500+",
        conservationLabel: "Dự Án Bảo Tồn",
        countries: "195",
        countriesLabel: "Quốc Gia Được Bao Phủ"
      },
      cta: {
        title: "Sẵn Sàng Bắt Đầu Hành Trình Khám Phá Động Vật Hoang Dã?",
        description: "Tham gia cùng hàng nghìn người yêu thiên nhiên khám phá những kỳ quan của sự đa dạng sinh học đáng kinh ngạc trên hành tinh chúng ta.",
        button: "Khám Phá Động Vật Ngay"
      }
    }
  };

  const currentText = text[currentLanguage];
  const baseUrl = currentLanguage === 'vi' ? '/vi' : '';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-nature-pattern opacity-10" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🦅</div>
        <div className="absolute top-40 right-20 text-5xl animate-sway opacity-20">🐅</div>
        <div className="absolute bottom-32 left-1/4 text-4xl animate-float opacity-20">🦋</div>
        
        {/* Content */}
        <div className="relative z-10 container-nature text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            {currentText.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium opacity-90 animate-fade-in">
            {currentText.hero.subtitle}
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80 animate-fade-in">
            {currentText.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="nature-button">
              <Link to={`${baseUrl}/animals`}>
                {currentText.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to={`${baseUrl}/about`}>
                {currentText.hero.secondary}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container-nature">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-gradient">
              {currentText.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {currentText.features.subtitle}
            </p>
          </div>
          
          <div className="grid-nature">
            {currentText.features.items.map((feature, index) => (
              <Card key={index} className="nature-card hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg nature-gradient group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 nature-gradient text-white">
        <div className="container-nature">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-float">
              <div className="text-4xl md:text-5xl font-bold mb-2">{currentText.stats.species}</div>
              <div className="text-lg opacity-90">{currentText.stats.speciesLabel}</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{currentText.stats.photos}</div>
              <div className="text-lg opacity-90">{currentText.stats.photosLabel}</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{currentText.stats.conservation}</div>
              <div className="text-lg opacity-90">{currentText.stats.conservationLabel}</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{currentText.stats.countries}</div>
              <div className="text-lg opacity-90">{currentText.stats.countriesLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container-nature text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            {currentText.cta.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {currentText.cta.description}
          </p>
          <Button asChild size="lg" className="nature-button hover-glow">
            <Link to={`${baseUrl}/animals`}>
              {currentText.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
