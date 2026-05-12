import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeSections } from "@/components/sections/home-sections";
import { getEvents, getGallery, getNews, getStats, getTestimonials } from "@/lib/supabase/queries";

export default async function HomePage() {
  const [stats, events, news, gallery, testimonials] = await Promise.all([
    getStats(),
    getEvents(),
    getNews(),
    getGallery(),
    getTestimonials(),
  ]);

  return (
    <div className="min-h-screen bg-[#f7f0e6] text-stone-900 transition-colors dark:bg-stone-950 dark:text-stone-100">
      <Navbar />
      <main>
        <HeroSection />
        <HomeSections
          stats={stats}
          events={events}
          news={news}
          gallery={gallery}
          testimonials={testimonials}
        />
      </main>
      <Footer />
    </div>
  );
}
