import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { staggerItem } from "@/lib/animations";
import { Card as _Card, CardContent as _CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { regionsData } from "@/data/regionsData";
import { 
  MapPin, 
  ArrowRight, 
  Building2, 
  Shield, 
  Phone, 
  Clock, 
  Award, 
  Users,
  Zap,
  Smartphone,
  Gauge,
  Lightbulb,
  HelpCircle
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuoteFormSection from "@/components/QuoteFormSection";

import ileDeFranceImg from "@/assets/regions/ile-de-france.webp";
import parisCityscapeImg from "@/assets/regions/paris-cityscape.webp";

const ZonesIntervention = () => {
  
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useSEO({
    title: "Zones d'Intervention France | Réparation & Installation Volets Roulants | Répar'Action Volets",
    description: "Répar'Action Volets intervient à Paris, Île-de-France et partout en France pour la réparation, l'installation et la motorisation de vos volets roulants. Intervention express en 24-48h.",
    keywords: "réparation volets roulants France, installation volets roulants, motorisation volets, dépannage volets express, zones intervention",
    canonicalUrl: "https://reparaction-volets.fr/zones-intervention",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
  ];

  // Stats adaptées
  const stats = [
    { icon: MapPin, value: "50+", label: "Villes desservies", color: "text-service-blue" },
    { icon: Building2, value: "40", label: "Arrondissements Paris", color: "text-service-violet" },
    { icon: Users, value: "5000+", label: "Clients satisfaits", color: "text-service-emerald" },
    { icon: Clock, value: "24-48h", label: "Délai d'intervention", color: "text-service-orange" }
  ];

  // FAQ adaptée
  const faqs = [
    {
      question: "Où intervenez-vous en priorité ?",
      answer: "Répar'Action Volets intervient en priorité à Paris et en Île-de-France, avec des délais garantis de 24 à 48h. Nous couvrons également l'ensemble des grandes métropoles françaises pour vos besoins de réparation et installation."
    },
    {
      question: "Quels sont les délais d'intervention à Paris ?",
      answer: "À Paris : intervention sous 24h à 48h pour les urgences. En Île-de-France : intervention rapide sous 48h à 72h. Pour les autres zones, nous planifions l'intervention selon la disponibilité de nos techniciens locaux."
    },
    {
      question: "Proposez-vous des devis gratuits partout en France ?",
      answer: "Oui, nous proposons des devis gratuits et sans engagement pour tous vos projets de réparation ou d'installation, quelle que soit votre localisation en France métropolitaine."
    },
    {
      question: "Intervenez-vous sur toutes les marques de volets roulants ?",
      answer: "Absolument. Nos techniciens sont formés pour intervenir sur toutes les marques majeures : Somfy, Bubendorff, Simu, Nice, Profalux, etc., que vos volets soient manuels ou électriques."
    },
    {
      question: "Comment obtenir un devis rapidement ?",
      answer: "Vous pouvez demander un devis en remplissant le formulaire ci-dessous, en nous appelant au 06 03 20 59 67, ou en nous envoyant un email. Nous vous recontactons sous 24h avec votre devis personnalisé."
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Style identique à la page d'accueil */}
      <section ref={heroRef} className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={ileDeFranceImg} alt="Zones d'intervention volets roulants" className="w-full h-[120%] object-cover" />
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
                <Shield className="h-4 w-4" />
                Expert en Volets Roulants depuis 10 ans — Partout en France
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-foreground"
            >
              Nos Zones d'Intervention : <span className="text-accent">Réparation & Installation</span> partout en France
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              Basés à Fontenay-Trésigny, nous intervenons sur l'ensemble du territoire français pour garantir le bon fonctionnement de vos volets roulants. Intervention express en Île-de-France et dans les grandes métropoles. Nos techniciens utilisent la géolocalisation intelligente pour optimiser les délais d'intervention et vous proposer le meilleur service.
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
                <a href="tel:0603205967" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> 06 03 20 59 67
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
                  <Shield className="h-5 w-5" />
                  <span>Garantie 3 ans</span>
                </Badge>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceOrange">
                  <Clock className="h-5 w-5" />
                  <span>Intervention sous 48h</span>
                </Badge>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceEmerald">
                  <Award className="h-5 w-4" />
                  <span>Artisan certifié RGE</span>
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
              <motion.div key={index} {...staggerItem(index)} className="text-center">
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

      {/* Paris & IdF - Présentation par Blocs (Image + Texte) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          
          {/* Bloc Paris */}
          <AnimatedSection animation="fade-up">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={parisCityscapeImg} 
                  alt="Réparation volets Paris" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div>
                <Badge variant="default" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-service-orange/10 text-service-orange border border-service-orange/20">
                  <Zap className="h-3.5 w-3.5" /> Secteur Prioritaire
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Réparation de Volets à Paris</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Répar'Action Volets est votre expert de proximité dans tous les arrondissements de Paris. Nous intervenons en urgence pour tout dépannage de volet roulant bloqué ou moteur en panne. Grâce à notre système de géolocalisation intelligente et notre réseau de techniciens répartis stratégiquement, nous garantissons une intervention rapide et efficace, même en heures creuses.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Nos équipes maîtrisent toutes les marques du marché et disposent des pièces de rechange en stock pour une réparation immédiate. Intervention sous 24h à 48h garantie, avec diagnostic gratuit et garantie 3 ans sur nos interventions.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">20</span>
                    <span className="text-sm text-muted-foreground">Arrondissements</span>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">24h</span>
                    <span className="text-sm text-muted-foreground">Délai moyen</span>
                  </div>
                </div>
                <Button size="lg" variant="accent" asChild className="rounded-full px-8">
                  <Link to="/zones-intervention/paris">
                    Voir tous les arrondissements <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Bloc Île-de-France */}
          <AnimatedSection animation="fade-up">
            <div className="grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
              <div className="md:order-2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={ileDeFranceImg} 
                  alt="Réparation volets Île-de-France" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="md:order-1">
                <Badge variant="default" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-service-blue/10 text-service-blue border border-service-blue/20">
                  <MapPin className="h-3.5 w-3.5" /> Couverture Régionale
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Intervention en Île-de-France</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nous couvrons l'intégralité de la région parisienne avec une présence locale dans tous les départements. Nos techniciens circulent quotidiennement dans les départements 77, 78, 91, 92, 93, 94 et 95 pour assurer vos réparations et installations. Grâce à notre optimisation géographique basée sur l'IA, nous réduisons les temps de trajet et proposons des interventions plus rapides et économiques.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Que vous soyez à Versailles, Créteil, Cergy ou Melun, nous disposons de ressources locales pour intervenir rapidement. Nos équipes connaissent parfaitement chaque commune et peuvent vous proposer des solutions adaptées à votre environnement spécifique.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">7</span>
                    <span className="text-sm text-muted-foreground">Départements</span>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">50+</span>
                    <span className="text-sm text-muted-foreground">Villes desservies</span>
                  </div>
                </div>
                <Button size="lg" variant="accent" asChild className="rounded-full px-8">
                  <Link to="/zones-intervention/ile-de-france">
                    Découvrir les départements <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Section Innovation & Technologie */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <Badge variant="default" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-service-violet/10 text-service-violet border border-service-violet/20">
              <Lightbulb className="h-3.5 w-3.5" /> Innovation & Technologie
            </Badge>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Une Couverture Nationale Optimisée par l'IA et la Géolocalisation
            </h2>
            <p className="text-muted-foreground">
              Répar'Action Volets utilise des technologies avancées pour vous proposer le meilleur service, où que vous soyez en France.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Géolocalisation Intelligente",
                desc: "Notre système d'IA analyse votre position et celle de nos techniciens pour optimiser les trajets et réduire les délais d'intervention.",
                badge: "GEO",
                iconBg: "bg-service-cyan",
              },
              {
                icon: Gauge,
                title: "Optimisation des Tournées",
                desc: "Algorithmes d'optimisation qui regroupent les interventions par zone géographique pour une meilleure efficacité et des coûts réduits.",
                badge: "IA",
                iconBg: "bg-service-emerald",
              },
              {
                icon: Lightbulb,
                title: "Prédiction & Prévention",
                desc: "Nos données historiques permettent d'identifier les pannes récurrentes et de proposer des solutions préventives à nos clients.",
                badge: "Data",
                iconBg: "bg-service-orange",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 border border-border relative p-8"
              >
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <Badge variant="default" className="text-[11px] font-bold bg-accent/10 text-accent border border-accent/20">
                  {item.badge}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section villes IDF détaillées */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <Badge variant="default" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-accent/10 text-accent border border-accent/20">
              <MapPin className="h-3.5 w-3.5" /> Villes desservies
            </Badge>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Nos Villes d'Intervention en Île-de-France
            </h2>
            <p className="text-muted-foreground">
              Découvrez nos pages dédiées pour chaque ville et arrondissement. Contenu personnalisé, témoignages locaux et services adaptés.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regionsData[0].mainCities.map((city, i) => (
              <AnimatedSection key={city} animation="fade-up" delay={i * 30}>
                <Link 
                  to={`/zones-intervention/reparation-volet-paris-${i + 1}`}
                  className="block p-4 rounded-xl border border-border bg-card hover:border-accent hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="font-semibold text-foreground group-hover:text-accent transition-colors">{city}</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
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
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Vos Questions sur Nos Zones d'Intervention</h2>
              <p className="text-muted-foreground">Tout ce qu'il faut savoir sur nos services et notre couverture géographique.</p>
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

      {/* Quote Form Section */}
      <section className="py-20 bg-background">
        <QuoteFormSection />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <ArrowRight className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Un problème de volet roulant ?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Nos techniciens interviennent rapidement chez vous, partout en France. Devis gratuit et intervention garantie avec notre système de géolocalisation optimisé.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
              <Link to="#devis">Demander mon devis gratuit</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 text-lg px-10" asChild>
              <a href="tel:0603205967">Appeler le 06 03 20 59 67</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZonesIntervention;
