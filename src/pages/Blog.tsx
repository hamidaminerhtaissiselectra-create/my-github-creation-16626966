import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, ChevronRight, BookOpen, Phone, Wrench, Zap, GlassWater, Cpu, LayoutGrid, Shield, Star, Quote, MapPin, FileText, ClipboardCheck, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import { fadeUp, staggerItem, hoverLift } from "@/lib/animations";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/blogArticles";
import blogHeroImg from "@/assets/paris-saint-germain-blog.webp";

// Map categories to colored badge variants and icons
const categoryStyle: Record<string, { variant: "serviceBlue" | "serviceOrange" | "serviceEmerald" | "serviceRose" | "serviceViolet" | "serviceCyan" | "accent"; icon: typeof Wrench }> = {
  "Entretien": { variant: "serviceBlue", icon: Wrench },
  "Réparation": { variant: "serviceOrange", icon: Zap },
  "Motorisation": { variant: "serviceViolet", icon: Cpu },
  "Installation": { variant: "serviceCyan", icon: LayoutGrid },
  "Vitrerie": { variant: "serviceEmerald", icon: GlassWater },
  "Énergie": { variant: "serviceRose", icon: Shield },
  "Comparatif": { variant: "serviceViolet", icon: Cpu },
  "Sécurité": { variant: "serviceOrange", icon: Shield },
  "Domotique": { variant: "serviceCyan", icon: Cpu },
};

const getCategoryStyle = (category: string) => categoryStyle[category] || { variant: "accent" as const, icon: BookOpen };

const BlogPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useSEO({
    title: "Blog Expert Volets & Vitrerie | Conseils, Guides & Comparatifs | Répar'Action Volets",
    description: "Conseils professionnels, guides d'entretien, comparatifs de marques et actualités sur les volets roulants et la vitrerie. Articles rédigés par nos experts.",
    keywords: "blog volet roulant, entretien volet, guide motorisation, comparatif Somfy Bubendorff, conseils vitrerie",
    canonicalUrl: "https://reparaction-volets.fr/blog",
  });

  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://reparaction-volets.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog Expert", "item": "https://reparaction-volets.fr/blog" }
      ]
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, []);

  const categories = [...new Set(blogArticles.map((a) => a.category))];
  const featuredArticle = blogArticles[0];
  const featuredStyle = getCategoryStyle(featuredArticle.category);

  return (
    <main id="main-content" className="relative">
      <Navbar />
      
      {/* Hero - gradient riche comme la page d'accueil */}
      <section ref={heroRef} className="relative pt-24 pb-20 min-h-[65vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={blogHeroImg} alt="Boulevard Saint-Germain à Paris — Blog expert volets et vitrerie Répar'Action" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/20" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary-foreground">Blog Expert</span>
            </div>
            <Badge variant="accent" className="gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm shadow-lg">
              <BookOpen className="h-4 w-4" /> Conseils & Guides d'Experts
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-primary-foreground">
              Blog Expert <span className="text-accent">Volets & Vitrerie</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Conseils professionnels, guides d'entretien, comparatifs de marques et actualités du secteur. <strong>{blogArticles.length} articles</strong> pour tout savoir sur vos volets roulants et votre vitrerie.
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const style = getCategoryStyle(cat);
                return (
                  <Badge key={cat} variant={style.variant} className="px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm shadow-sm">
                    <style.icon className="h-3 w-3 mr-1" />
                    {cat}
                  </Badge>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article - avec couleurs vives */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="accent" className="gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4">
              ⭐ Article à la une
            </Badge>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Notre dernier article recommandé
            </h2>
          </motion.div>
          <motion.div {...fadeUp}
            className="max-w-5xl mx-auto bg-card rounded-2xl overflow-hidden border border-accent/20 card-shadow hover:card-shadow-hover transition-all group">
            <div className="grid md:grid-cols-2">
              {featuredArticle.image && (
                <div className="h-64 md:h-full overflow-hidden relative">
                  <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg`}>
                    <featuredStyle.icon className="h-6 w-6 text-accent-foreground" strokeWidth={2} />
                  </div>
                </div>
              )}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Badge variant={featuredStyle.variant} className="px-3 py-1.5 rounded-full text-xs font-bold mb-4 w-fit">
                  <featuredStyle.icon className="h-3 w-3 mr-1" />
                  {featuredArticle.category}
                </Badge>
                <h3 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">{featuredArticle.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                  <div className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-accent" /> {featuredArticle.date}</div>
                  <div className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-accent" /> {featuredArticle.author}</div>
                </div>
                <Button variant="accent" asChild className="rounded-full w-fit px-6 shadow-lg">
                  <Link to={`/blog/${featuredArticle.slug}`} className="flex items-center gap-2">
                    Lire l'article <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles Grid - avec badges colorés par catégorie */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <BookOpen className="h-3.5 w-3.5" /> Bibliothèque Complète
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Tous nos articles</h2>
            <p className="text-muted-foreground">Explorez nos guides, comparatifs et conseils pour l'entretien de vos volets roulants.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogArticles.slice(1).map((article, i) => {
              const style = getCategoryStyle(article.category);
              return (
                <motion.div
                  key={article.id}
                  {...staggerItem(i)}
                  {...hoverLift}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 card-shadow hover:card-shadow-hover transition-all duration-500"
                >
                  {article.image && (
                    <div className="h-52 overflow-hidden relative">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                      <Badge className={`absolute top-4 right-4 text-xs font-bold shadow-md backdrop-blur-sm ${
                        style.variant === 'serviceBlue' ? 'bg-service-blue/90 text-white border-service-blue' :
                        style.variant === 'serviceOrange' ? 'bg-service-orange/90 text-white border-service-orange' :
                        style.variant === 'serviceViolet' ? 'bg-service-violet/90 text-white border-service-violet' :
                        style.variant === 'serviceCyan' ? 'bg-service-cyan/90 text-white border-service-cyan' :
                        style.variant === 'serviceEmerald' ? 'bg-service-emerald/90 text-white border-service-emerald' :
                        style.variant === 'serviceRose' ? 'bg-service-rose/90 text-white border-service-rose' :
                        'bg-accent/90 text-white border-accent'
                      }`}>
                        {article.category}
                      </Badge>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-accent" /> {article.date}</div>
                      <div className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-accent" /> {article.author}</div>
                    </div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-all font-bold text-sm group-hover:gap-3 duration-300"
                    >
                      Lire l'article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA + Maillage interne - style riche comme accueil */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Besoin d'une intervention ?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto">
              Nos experts sont disponibles pour vous conseiller et intervenir rapidement. Contactez-nous dès maintenant.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" variant="secondary" className="px-8 py-7 text-lg font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <a href="/#devis" className="flex items-center gap-2">Demander un Devis <ArrowRight className="h-5 w-5" /></a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 px-8 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105" asChild>
                <a href="tel:0603205967" className="flex items-center gap-2"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
            {/* Service links - Maillage interne */}
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {[
                { label: "Réparation de volets", href: "/services/reparation-volets-roulants", icon: Wrench },
                { label: "Dépannage express", href: "/services/depannage-express", icon: Zap },
                { label: "Installation & Remplacement", href: "/services/installation-remplacement-volets", icon: LayoutGrid },
                { label: "Motorisation & Domotique", href: "/services/motorisation-domotique", icon: Cpu },
                { label: "Vitrerie & Vitrage", href: "/services/vitrerie-remplacement-vitrage", icon: GlassWater },
              ].map((s) => (
                <Link key={s.href} to={s.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-foreground/20 bg-accent-foreground/5 text-sm font-semibold text-accent-foreground hover:bg-accent-foreground/15 hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <s.icon className="h-3.5 w-3.5" />
                  {s.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
