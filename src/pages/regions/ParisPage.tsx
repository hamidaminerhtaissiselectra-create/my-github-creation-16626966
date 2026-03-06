import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  ArrowRight, 
  Phone, 
  Clock, 
  Award,
  Wrench,
  Settings,
  Zap,
  Building2,
  Users,
  Shield,
  HelpCircle,
  Home,
  ShieldCheck,
  Truck
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ileDeFranceImg from "@/assets/regions/ile-de-france.webp";
import { usePhoneCall } from "@/hooks/usePhoneCall";

const ParisPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const { phoneNumber } = usePhoneCall();

  useSEO({
    title: "Réparation Volets Roulants Paris | Tous les Arrondissements | Répar'Action Volets",
    description: "Expert en réparation de volets roulants à Paris. Intervention rapide dans les 20 arrondissements. Dépannage express, installation et motorisation. Devis gratuit.",
    keywords: "réparation volets Paris, volets roulants arrondissements Paris, dépannage volets Paris, installation volets 75",
    canonicalUrl: "https://reparaction-volets.fr/zones-intervention/paris",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: "Paris", url: "/zones-intervention/paris" },
  ];

  const stats = [
    { icon: Building2, value: "20", label: "Arrondissements", color: "text-service-violet" },
    { icon: Clock, value: "24-48h", label: "Délai d'intervention", color: "text-service-orange" },
    { icon: Users, value: "2000+", label: "Clients parisiens", color: "text-service-emerald" },
    { icon: Award, value: "4.9/5", label: "Note moyenne", color: "text-service-blue" }
  ];

  const arrondissementsGroups = [
    {
      title: "Rive Droite — Centre & Nord",
      subtitle: "Du 1er au 4e, 9e au 12e, 17e au 20e arrondissement",
      image: "/images/zones/paris-1.webp",
      badge: "Centre Historique",
      badgeVariant: "serviceBlue" as const,
      description: "Le cœur historique de Paris, du Marais au Louvre en passant par les Grands Boulevards. Nos techniciens interviennent sur les volets roulants des immeubles haussmanniens et modernes avec une expertise adaptée au patrimoine parisien.",
      arrondissements: [
        { name: "Paris 1er", slug: "reparation-volet-paris-1", image: "/images/zones/paris-1.webp" },
        { name: "Paris 2e", slug: "reparation-volet-paris-2", image: "/images/zones/paris-2.webp" },
        { name: "Paris 3e", slug: "reparation-volet-paris-3", image: "/images/zones/paris-3.webp" },
        { name: "Paris 4e", slug: "reparation-volet-paris-4", image: "/images/zones/paris-4.webp" },
        { name: "Paris 9e", slug: "reparation-volet-paris-9", image: "/images/zones/paris-9.webp" },
        { name: "Paris 10e", slug: "reparation-volet-paris-10", image: "/images/zones/paris-10.webp" },
        { name: "Paris 11e", slug: "reparation-volet-paris-11", image: "/images/zones/paris-11.webp" },
        { name: "Paris 12e", slug: "reparation-volet-paris-12", image: "/images/zones/paris-12.webp" },
        { name: "Paris 17e", slug: "reparation-volet-paris-17", image: "/images/zones/paris-17.webp" },
        { name: "Paris 18e", slug: "reparation-volet-paris-18", image: "/images/zones/paris-18.webp" },
        { name: "Paris 19e", slug: "reparation-volet-paris-19", image: "/images/zones/paris-19.webp" },
        { name: "Paris 20e", slug: "reparation-volet-paris-20", image: "/images/zones/paris-20.webp" },
      ]
    },
    {
      title: "Rive Gauche & Ouest",
      subtitle: "Du 5e au 8e, 13e au 16e arrondissement",
      image: "/images/zones/paris-8.webp",
      badge: "Quartiers Résidentiels",
      badgeVariant: "serviceOrange" as const,
      description: "Les quartiers résidentiels et chics de la rive gauche, de Saint-Germain-des-Prés aux Champs-Élysées. Intervention sur volets roulants de standing, motorisation Somfy et domotique connectée pour les résidences de prestige.",
      arrondissements: [
        { name: "Paris 5e", slug: "reparation-volet-paris-5", image: "/images/zones/paris-5.webp" },
        { name: "Paris 6e", slug: "reparation-volet-paris-6", image: "/images/zones/paris-6.webp" },
        { name: "Paris 7e", slug: "reparation-volet-paris-7", image: "/images/zones/paris-7.webp" },
        { name: "Paris 8e", slug: "reparation-volet-paris-8", image: "/images/zones/paris-8.webp" },
        { name: "Paris 13e", slug: "reparation-volet-paris-13", image: "/images/zones/paris-13.webp" },
        { name: "Paris 14e", slug: "reparation-volet-paris-14", image: "/images/zones/paris-14.webp" },
        { name: "Paris 15e", slug: "reparation-volet-paris-15", image: "/images/zones/paris-15.webp" },
        { name: "Paris 16e", slug: "reparation-volet-paris-16", image: "/images/zones/paris-16.webp" },
      ]
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: "Réparation & Dépannage",
      description: "Intervention rapide sur volets bloqués ou cassés à Paris. Diagnostic gratuit et réparation immédiate.",
      link: "/services/reparation-volets-roulants"
    },
    {
      icon: Settings,
      title: "Installation & Remplacement",
      description: "Pose de volets roulants neufs sur-mesure à Paris. Solutions aluminium ou PVC haute qualité.",
      link: "/services/installation-remplacement-volets"
    },
    {
      icon: Zap,
      title: "Motorisation",
      description: "Modernisez vos volets manuels à Paris. Installation de moteurs Somfy, Bubendorff et solutions connectées.",
      link: "/services/motorisation-domotique"
    },
    {
      icon: Home,
      title: "Domotique",
      description: "Centralisez le contrôle de vos volets à Paris. Pilotage à distance via smartphone et scénarios intelligents.",
      link: "/services/motorisation-domotique"
    },
    {
      icon: ShieldCheck,
      title: "Sécurité Renforcée",
      description: "Installation de verrous de sécurité et volets anti-effraction à Paris pour protéger votre habitat.",
      link: "/services/installation-remplacement-volets"
    },
    {
      icon: Truck,
      title: "Dépannage Express",
      description: "Service d'urgence disponible à Paris pour les pannes critiques. Intervention sous 24h garantie.",
      link: "/services/depannage-express"
    }
  ];

  const faqs = [
    {
      question: "Quel est le délai d'intervention pour un volet bloqué à Paris ?",
      answer: "Nous intervenons en urgence sous 24h à 48h pour tous les dépannages à Paris. Pour les volets bloqués en position ouverte représentant un risque de sécurité, nous traitons la demande en priorité et intervenons souvent le jour même. Appelez le 06 03 20 59 67."
    },
    {
      question: "Combien coûte la réparation d'un volet roulant à Paris ?",
      answer: "Le coût dépend de la panne : remplacement de sangle (60-120€), changement de moteur Somfy/Bubendorff (180-350€), remplacement de lames (80-200€). Diagnostic gratuit et devis détaillé avant toute intervention. Pas de frais de déplacement à Paris."
    },
    {
      question: "Intervenez-vous dans tous les arrondissements de Paris ?",
      answer: "Oui, nous couvrons les 20 arrondissements de Paris sans exception. Nos techniciens connaissent les spécificités de chaque quartier : immeubles haussmanniens du 7e et 16e, ateliers du Marais, résidences modernes du 13e et 15e."
    },
    {
      question: "Travaillez-vous sur les volets des immeubles haussmanniens ?",
      answer: "Oui, c'est notre spécialité à Paris. Les volets d'immeubles haussmanniens ont des contraintes spécifiques (coffres intégrés, hauteurs atypiques). Nos techniciens sont formés pour intervenir sans dégrader les éléments architecturaux protégés."
    },
    {
      question: "Proposez-vous la motorisation pour les volets manuels parisiens ?",
      answer: "Absolument. Nous motorisons vos volets manuels existants sans travaux de maçonnerie ni modification de façade. Installation de moteurs Somfy (filaires, radio ou connectés) en 1 à 2 heures par volet. Compatible Google Home, Alexa, Apple HomeKit."
    },
    {
      question: "Êtes-vous certifié RGE pour bénéficier de MaPrimeRénov' ?",
      answer: "Oui, Répar'Action Volets est certifié RGE et Qualibat. Cette certification vous permet de bénéficier de MaPrimeRénov', de l'éco-PTZ et du crédit d'impôt pour l'installation de volets isolants ou de double vitrage à Paris."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={ileDeFranceImg} alt="Volets roulants Paris" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-8 backdrop-blur-sm">
                <MapPin className="h-4 w-4" />
                20 Arrondissements — Intervention Express
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-foreground"
            >
              Réparation de Volets Roulants à <span className="text-accent">Paris</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              Répar'Action Volets est votre expert de proximité dans tous les arrondissements de Paris. Intervention rapide, diagnostic gratuit et garantie 3 ans sur toutes nos prestations.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button size="lg" variant="accent" asChild className="px-8 py-7 text-lg font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                <a href="/#devis" className="flex items-center gap-2">
                  Demander un Devis Gratuit <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="px-8 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105">
                <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> {phoneNumber}
                </a>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceBlue">
                  <Clock className="h-5 w-5" />
                  <span>24-48h</span>
                </Badge>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceOrange">
                  <Award className="h-5 w-5" />
                  <span>Certifié RGE</span>
                </Badge>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceEmerald">
                  <Shield className="h-5 w-5" />
                  <span>Garantie 3 ans</span>
                </Badge>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Arrondissements — Blocs Image + Texte */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <Badge variant="default" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-accent/10 text-accent border border-accent/20">
                <MapPin className="h-3.5 w-3.5" /> 20 Arrondissements
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Tous les Arrondissements de Paris</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Cliquez sur votre arrondissement pour accéder à la page dédiée et découvrir nos services spécifiques.</p>
            </div>
          </AnimatedSection>

          {arrondissementsGroups.map((group, groupIndex) => (
            <AnimatedSection key={groupIndex} animation="fade-up">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${groupIndex > 0 ? 'mt-24' : ''} ${groupIndex % 2 !== 0 ? '' : ''}`}>
                <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl group ${groupIndex % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img 
                    src={group.image} 
                    alt={group.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className={groupIndex % 2 !== 0 ? 'md:order-1' : ''}>
                  <Badge variant={group.badgeVariant} className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    <Building2 className="h-3.5 w-3.5" /> {group.badge}
                  </Badge>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{group.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{group.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{group.description}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {group.arrondissements.map((arr, arrIdx) => (
                      <motion.div
                        key={arr.slug}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: arrIdx * 0.05 }}
                        className="group/card"
                      >
                        <Link to={`/zones-intervention/${arr.slug}`} className="block">
                          <div className="relative h-32 w-full overflow-hidden rounded-t-xl">
                            <img 
                              src={arr.image} 
                              alt={`Réparation volets ${arr.name}`} 
                              className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/5 transition-colors" />
                          </div>
                          <div className={`p-4 rounded-b-xl border border-t-0 transition-all duration-300 card-shadow group-hover/card:card-shadow-hover ${groupIndex === 0 ? 'bg-service-blue/5 border-service-blue/20' : 'bg-service-orange/5 border-service-orange/20'}`}>
                            <div className="flex items-center gap-2">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-sm ${groupIndex === 0 ? 'bg-service-blue text-white' : 'bg-service-orange text-white'}`}>
                                <MapPin className="h-4 w-4" />
                              </div>
                              <span className="text-sm font-bold text-foreground">{arr.name}</span>
                            </div>
                            <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-accent transition-all duration-300 group-hover/card:gap-2">
                              Voir les détails <ArrowRight className="h-3 w-3" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <Badge variant="default" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-service-violet/10 text-service-violet border border-service-violet/20">
                <Wrench className="h-3.5 w-3.5" /> Nos Services
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Nos Services de Volets Roulants à Paris
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Répar'Action Volets propose une gamme complète de solutions pour vos volets roulants dans tous les arrondissements de Paris.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="hover:shadow-md transition-shadow h-full border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <Link 
                      to={service.link}
                      className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <Badge variant="default" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-accent/10 text-accent border border-accent/20">
                <HelpCircle className="h-3.5 w-3.5" /> Questions Fréquentes
              </Badge>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Vos Questions sur Paris</h2>
              <p className="text-muted-foreground">Tout ce qu'il faut savoir sur nos services dans les 20 arrondissements.</p>
            </motion.div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'une réparation à Paris ?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Contactez-nous dès maintenant pour une intervention rapide et un devis gratuit dans votre arrondissement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
              <a href="/#devis">Demander un devis gratuit</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-10" asChild>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>Appeler le {phoneNumber}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParisPage;
