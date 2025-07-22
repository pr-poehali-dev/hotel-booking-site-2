import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    roomType: ''
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  const content = {
    ru: {
      hero: {
        title: 'Роскошь без компромиссов',
        subtitle: 'Откройте для себя мир элегантности в нашем премиальном отеле',
        checkIn: 'Заезд',
        checkOut: 'Выезд',
        guests: 'Гости',
        book: 'Забронировать'
      },
      rooms: {
        title: 'Наши Номера',
        subtitle: 'Выберите идеальное место для незабываемого отдыха',
        deluxe: 'Делюкс',
        suite: 'Сюит',
        presidential: 'Президентский',
        from: 'от'
      },
      services: {
        title: 'Услуги',
        subtitle: 'Мы заботимся о каждой детали вашего пребывания',
        spa: 'СПА центр',
        restaurant: 'Ресторан',
        concierge: 'Консьерж',
        transport: 'Трансфер'
      },
      gallery: {
        title: 'Галерея',
        subtitle: 'Погрузитесь в атмосферу роскоши'
      },
      reviews: {
        title: 'Отзывы гостей',
        subtitle: 'Что говорят о нас наши гости'
      },
      booking: {
        title: 'Бронирование номера',
        name: 'Имя',
        email: 'Email',
        phone: 'Телефон',
        roomType: 'Тип номера',
        confirm: 'Подтвердить бронирование',
        success: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
        close: 'Закрыть'
      }
    },
    en: {
      hero: {
        title: 'Luxury without compromise',
        subtitle: 'Discover a world of elegance in our premium hotel',
        checkIn: 'Check-in',
        checkOut: 'Check-out',
        guests: 'Guests',
        book: 'Book Now'
      },
      rooms: {
        title: 'Our Rooms',
        subtitle: 'Choose the perfect place for an unforgettable stay',
        deluxe: 'Deluxe',
        suite: 'Suite',
        presidential: 'Presidential',
        from: 'from'
      },
      services: {
        title: 'Services',
        subtitle: 'We take care of every detail of your stay',
        spa: 'SPA Center',
        restaurant: 'Restaurant',
        concierge: 'Concierge',
        transport: 'Transfer'
      },
      gallery: {
        title: 'Gallery',
        subtitle: 'Immerse yourself in the atmosphere of luxury'
      },
      reviews: {
        title: 'Guest Reviews',
        subtitle: 'What our guests say about us'
      },
      booking: {
        title: 'Room Booking',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        roomType: 'Room Type',
        confirm: 'Confirm Booking',
        success: 'Booking request sent! We will contact you shortly.',
        close: 'Close'
      }
    }
  };

  const t = content[language];

  const rooms = [
    {
      title: t.rooms.deluxe,
      price: '25,000',
      image: '/img/743fd91c-1207-4110-98bb-bde1861d5a8c.jpg',
      features: ['50 м²', 'Вид на море', 'Мини-бар', 'Балкон']
    },
    {
      title: t.rooms.suite,
      price: '45,000',
      image: '/img/0123d1fd-9637-40cb-a1a1-6a76068c16e8.jpg',
      features: ['80 м²', 'Гостиная', 'Джакузи', 'Терраса']
    },
    {
      title: t.rooms.presidential,
      price: '85,000',
      image: '/img/8300f1e8-1a94-49e1-b11b-12092700f958.jpg',
      features: ['150 м²', 'Панорамный вид', 'Кухня', 'Личный дворецкий']
    }
  ];

  const services = [
    { 
      icon: 'Sparkles', 
      title: t.services.spa, 
      description: language === 'ru' ? 'Профессиональные процедуры для души и тела' : 'Professional treatments for body and soul'
    },
    { 
      icon: 'ChefHat', 
      title: t.services.restaurant, 
      description: language === 'ru' ? 'Изысканная кухня от лучших шеф-поваров' : 'Exquisite cuisine from the best chefs'
    },
    { 
      icon: 'Bell', 
      title: t.services.concierge, 
      description: language === 'ru' ? 'Персональный помощник 24/7' : 'Personal assistant 24/7'
    },
    { 
      icon: 'Car', 
      title: t.services.transport, 
      description: language === 'ru' ? 'Трансфер на премиальных автомобилях' : 'Transfer in premium vehicles'
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const bookingInfo = {
      ...bookingData,
      timestamp: new Date().toLocaleString('ru-RU'),
      roomPrice: bookingData.roomType === 'Делюкс' || bookingData.roomType === 'Deluxe' ? '25,000' : 
                 bookingData.roomType === 'Сюит' || bookingData.roomType === 'Suite' ? '45,000' : '85,000'
    };

    console.log('Данные для отправки на почту:', bookingInfo);
    
    toast({
      title: language === 'ru' ? "Заявка принята!" : "Booking request received!",
      description: t.booking.success,
    });
    
    setIsBookingOpen(false);
    setBookingData({
      checkIn: '',
      checkOut: '',
      guests: 2,
      name: '',
      email: '',
      phone: '',
      roomType: ''
    });
  };

  const reviews = [
    {
      name: 'Анна Петрова',
      text: language === 'ru' ? 'Невероятное место! Сервис на высшем уровне, номера роскошные.' : 'Incredible place! Top-level service, luxurious rooms.',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      text: language === 'ru' ? 'Лучший отель в городе. Обязательно вернемся!' : 'The best hotel in the city. We will definitely return!',
      rating: 5
    },
    {
      name: 'Мария Козлова',
      text: language === 'ru' ? 'Идеальное место для романтического отдыха. Рекомендую!' : 'Perfect place for a romantic getaway. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-deepBlack/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Crown" className="text-gold mr-2" size={32} />
              <h1 className="text-gold text-xl font-cormorant font-bold">LUXE HOTEL</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#rooms" className="text-cream hover:text-gold transition-colors">{t.rooms.title}</a>
              <a href="#services" className="text-cream hover:text-gold transition-colors">{t.services.title}</a>
              <a href="#gallery" className="text-cream hover:text-gold transition-colors">{t.gallery.title}</a>
              <a href="#reviews" className="text-cream hover:text-gold transition-colors">{t.reviews.title}</a>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                className="border-gold text-gold hover:bg-gold hover:text-deepBlack"
              >
                {language === 'ru' ? 'EN' : 'RU'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-deepBlack/80 to-deepBlack/40">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/img/743fd91c-1207-4110-98bb-bde1861d5a8c.jpg)' }}
        />
        <div className="absolute inset-0 bg-deepBlack/50" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-cormorant font-light text-cream mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-12 font-light">
            {t.hero.subtitle}
          </p>
          
          {/* Booking Form */}
          <Card className="bg-cream/95 backdrop-blur-sm border-gold/20 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-deepBlack mb-2">
                    {t.hero.checkIn}
                  </label>
                  <Input 
                    type="date" 
                    className="border-gold/30"
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deepBlack mb-2">
                    {t.hero.checkOut}
                  </label>
                  <Input 
                    type="date" 
                    className="border-gold/30"
                    value={bookingData.checkOut}
                    onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deepBlack mb-2">
                    {t.hero.guests}
                  </label>
                  <Input 
                    type="number" 
                    min="1" 
                    className="border-gold/30"
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                  />
                </div>
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gold hover:bg-gold-dark text-deepBlack font-semibold h-10">
                      {t.hero.book}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-cormorant text-2xl text-deepBlack">
                        {t.booking.title}
                      </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">{t.booking.name} *</Label>
                        <Input
                          id="name"
                          required
                          value={bookingData.name}
                          onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                          className="border-gold/30"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t.booking.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={bookingData.email}
                          onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                          className="border-gold/30"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t.booking.phone} *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                          className="border-gold/30"
                        />
                      </div>
                      <div>
                        <Label htmlFor="roomType">{t.booking.roomType} *</Label>
                        <select
                          id="roomType"
                          required
                          value={bookingData.roomType}
                          onChange={(e) => setBookingData({...bookingData, roomType: e.target.value})}
                          className="w-full p-2 border border-gold/30 rounded-md"
                        >
                          <option value="">{language === 'ru' ? 'Выберите номер' : 'Choose room'}</option>
                          <option value={t.rooms.deluxe}>{t.rooms.deluxe}</option>
                          <option value={t.rooms.suite}>{t.rooms.suite}</option>
                          <option value={t.rooms.presidential}>{t.rooms.presidential}</option>
                        </select>
                      </div>
                      <div className="flex gap-3">
                        <Button type="submit" className="flex-1 bg-gold hover:bg-gold-dark text-deepBlack">
                          {t.booking.confirm}
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setIsBookingOpen(false)}
                          className="border-gold/30"
                        >
                          {t.booking.close}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-cormorant font-light text-deepBlack mb-4">
              {t.rooms.title}
            </h2>
            <p className="text-lg text-bronze max-w-2xl mx-auto">
              {t.rooms.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-gold/20">
                <div className="relative overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-gold text-deepBlack">
                    {t.rooms.from} ₽{room.price}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-cormorant text-deepBlack">
                    {room.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="border-gold/30 text-bronze">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gold hover:bg-gold-dark text-deepBlack"
                        onClick={() => setBookingData({...bookingData, roomType: room.title})}
                      >
                        {t.hero.book}
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-deepBlack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-cormorant font-light text-cream mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-gold max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-cream/5 border-gold/20 hover:bg-cream/10 transition-colors">
                <CardContent className="p-6 text-center">
                  <Icon name={service.icon} className="text-gold mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-cormorant text-cream mb-3">
                    {service.title}
                  </h3>
                  <p className="text-cream/80">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-cormorant font-light text-deepBlack mb-4">
              {t.gallery.title}
            </h2>
            <p className="text-lg text-bronze max-w-2xl mx-auto">
              {t.gallery.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <img 
                src="/img/743fd91c-1207-4110-98bb-bde1861d5a8c.jpg" 
                alt="Hotel Interior"
                className="w-full h-96 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="/img/0123d1fd-9637-40cb-a1a1-6a76068c16e8.jpg" 
                alt="Spa"
                className="w-full h-44 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="/img/8300f1e8-1a94-49e1-b11b-12092700f958.jpg" 
                alt="Restaurant"
                className="w-full h-44 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-deepBlack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-cormorant font-light text-cream mb-4">
              {t.reviews.title}
            </h2>
            <p className="text-lg text-gold max-w-2xl mx-auto">
              {t.reviews.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-cream/5 border-gold/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-cream/90 mb-4 italic">
                    "{review.text}"
                  </p>
                  <p className="text-gold font-medium">
                    {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deepBlack/90 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Crown" className="text-gold mr-2" size={32} />
              <h3 className="text-gold text-2xl font-cormorant font-bold">LUXE HOTEL</h3>
            </div>
            <p className="text-cream/80">
              {language === 'ru' 
                ? 'Роскошь, которую вы заслуживаете' 
                : 'The luxury you deserve'
              }
            </p>
            <div className="flex justify-center items-center mt-6 space-x-6">
              <Icon name="Phone" className="text-gold" size={20} />
              <span className="text-cream">+7 (495) 123-45-67</span>
              <Icon name="Mail" className="text-gold" size={20} />
              <span className="text-cream">info@luxehotel.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;