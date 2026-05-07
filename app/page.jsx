import Link from "next/link";
import Image from "next/image";
import { CalendarClock, MessageCircle, ShoppingBag, Star } from "lucide-react";
import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="page-transition min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="cream-bg dot-pattern min-h-[90vh] flex items-center">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
              {/* Left Side - Content */}
              <div className="flex flex-col justify-center">
                <h1 className="font-playfair font-bold text-[clamp(3rem,6vw,5rem)] leading-tight chocolate-text whitespace-nowrap">
                  Freshly Baked With Love
                </h1>
                <div className="w-20 h-1 gold-bg mt-6 mb-6"></div>
                <p className="text-xl leading-8 text-brown max-w-2xl">
                  Order custom cakes, cookies & pastries - delivered to your door
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link 
                    href="/menu" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white chocolate-bg transition-all duration-200 hover:brightness-90 cursor-pointer"
                  >
                    Browse Menu
                  </Link>
                  <a 
                    href="#how-to-order" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold chocolate-text border-2 border-chocolate-medium transition-all duration-200 hover:bg-chocolate-medium hover:text-white cursor-pointer"
                  >
                    How to Order
                  </a>
                </div>
              </div>
              
              {/* Right Side - Image Mosaic */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border-2 border-gold overflow-hidden">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80"
                      alt="Chocolate cake"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border-2 border-gold overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80"
                        alt="Fresh pastries"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="rounded-2xl border-2 border-gold overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80"
                        alt="Baked cookies"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bestsellers Section */}
        <section className="cream-light-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-5xl font-bold chocolate-text flex items-center justify-center gap-3">
                Our Bestsellers
                <span className="text-3xl">🎂</span>
              </h2>
              <p className="mt-4 text-lg text-brown">Customer favorites baked fresh for every order.</p>
            </div>
            <MenuClient featuredOnly limitCount={6} />
            <div className="text-center mt-12">
              <Link 
                href="/menu" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white chocolate-bg transition-all duration-200 hover:brightness-90 cursor-pointer"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-5xl font-bold chocolate-text">What Our Customers Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Ahmed",
                  review: "Absolutely delicious cakes! The chocolate cake was moist and perfect for my daughter's birthday.",
                  rating: 5
                },
                {
                  name: "Michael Khan", 
                  review: "Best bakery in town! Fresh ingredients and amazing custom designs. Highly recommend!",
                  rating: 5
                },
                {
                  name: "Emily Rodriguez",
                  review: "Ordered cookies for my office party and everyone loved them. Will definitely order again!",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-cream-bg rounded-2xl p-8 card-hover">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-brown mb-4 italic">"{testimonial.review}"</p>
                  <p className="font-semibold chocolate-text">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-to-order" className="chocolate-bg py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-5xl font-bold text-white">How It Works</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { 
                  icon: ShoppingBag, 
                  title: "Browse & Pick Your Item", 
                  description: "Choose from our wide selection of freshly baked goods"
                },
                { 
                  icon: CalendarClock, 
                  title: "Choose Delivery Date", 
                  description: "Schedule your delivery at least 24 hours in advance"
                },
                { 
                  icon: MessageCircle, 
                  title: "Send Order via WhatsApp", 
                  description: "Quick and easy ordering - we'll confirm your details"
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full gold-bg flex items-center justify-center">
                        <span className="text-2xl font-bold chocolate-text">{index + 1}</span>
                      </div>
                    </div>
                    <Icon className="w-12 h-12 gold-bright mx-auto mb-4" />
                    <h3 className="font-playfair text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-cream-light leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
