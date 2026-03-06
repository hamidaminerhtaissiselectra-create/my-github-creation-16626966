import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, ChevronRight, BookOpen, Phone } from "lucide-react";
import { fadeUp, staggerItem, hoverLift } from "@/lib/animations";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/blogArticles";
import blogHeroImg from "@/assets/paris-saint-germain-blog.webp";

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

  // Get unique categories
  const categories = [...new Set(blogArticles.map((a) => a.category))];

  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={blogHeroImg} alt="Boulevard Saint-Germain à Paris — Blog expert volets et vitrerie Répar'Action" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Blog Expert</span>
            </div>
            <Badge variant="accent" className="gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <BookOpen className="h-3.5 w-3.5" /> Conseils & Guides
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Blog Expert Volets & Vitrerie
            </h1>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Conseils professionnels, guides d'entretien, comparatifs de marques et actualités du secteur. {blogArticles.length} articles pour tout savoir sur vos volets roulants et votre vitrerie.
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Badge key={cat} variant="outline" className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-foreground border border-foreground/20">
                  {cat}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp}
            className="max-w-4xl mx-auto bg-card rounded-2xl overflow-hidden border border-accent/10 card-shadow hover:card-shadow-hover transition-all">
            {blogArticles[0].image && (
              <div className="h-64 md:h-80 overflow-hidden relative">
                <img src={blogArticles[0].image} alt={blogArticles[0].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60"></div>
              </div>
            )}
            <div className="p-8 md:p-10 relative">
              <Badge variant="accent" className="px-3 py-1 rounded-full text-xs font-semibold mb-4">
                ⭐ Article à la une — {blogArticles[0].category}
              </Badge>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">{blogArticles[0].title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{blogArticles[0].excerpt}</p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {blogArticles[0].date}</div>
                  <div className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {blogArticles[0].author}</div>
                </div>
                <Link to={`/blog/${blogArticles[0].slug}`} className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors">
                  Lire l'article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Tous nos articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogArticles.slice(1).map((article, i) => (
              <motion.div
                key={article.id}
                {...staggerItem(i)}
                {...hoverLift}
                className="bg-card rounded-xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all"
              >
                {article.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <Badge variant="accent" className="px-2.5 py-1 rounded-full text-xs font-semibold mb-3">
                    {article.category}
                  </Badge>
                  <h3 className="font-display font-bold text-foreground text-lg mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {article.date}</div>
                  </div>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold text-sm"
                  >
                    Lire l'article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Maillage interne */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">Nos Services</span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Besoin d'une intervention ?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Nos experts sont disponibles pour vous conseiller et intervenir rapidement. Contactez-nous dès maintenant.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Button size="lg" variant="accent" asChild className="px-8 py-7 text-lg font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                <a href="/#devis" className="flex items-center gap-2">Demander un Devis <ArrowRight className="h-5 w-5" /></a>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="px-8 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105">
                <a href="tel:0603205967" className="flex items-center gap-2"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
            {/* Service links - Maillage interne */}
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {[
                { label: "Réparation de volets", href: "/services/reparation-volets-roulants" },
                { label: "Dépannage express", href: "/services/depannage-express" },
                { label: "Installation & Remplacement", href: "/services/installation-remplacement-volets" },
                { label: "Motorisation & Domotique", href: "/services/motorisation-domotique" },
                { label: "Vitrerie & Vitrage", href: "/services/vitrerie-remplacement-vitrage" },
              ].map((s) => (
                <Link key={s.href} to={s.href} className="px-4 py-2 rounded-full border border-border bg-card text-sm font-semibold text-accent hover:border-accent hover:shadow-md transition-all duration-300">
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
