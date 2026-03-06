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

const IdFPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const { phoneNumber } = usePhoneCall();

  useSEO({
    title: "Réparation Volets Île-de-France | 7 Départements | Répar'Action Volets",
    description: "Expert en réparation de volets roulants en Île-de-France. Intervention rapide dans les départements 77, 78, 91, 92, 93, 94, 95. Dépannage express et installation.",
    keywords: "réparation volets Île-de-France, volets roulants IdF, dépannage volets 77 78 91 92 93 94 95, installation volets",
    canonicalUrl: "https://reparaction-volets.fr/zones-intervention/ile-de-france",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: "Île-de-France", url: "/zones-intervention/ile-de-france" },
  ];

  const stats = [
    { icon: MapPin, value: "7", label: "Départements", color: "text-service-blue" },
    { icon: Building2, value: "50+", label: "Villes desservies", color: "text-service-violet" },
    { icon: Users, value: "3000+", label: "Clients satisfaits", color: "text-service-emerald" },
    { icon: Clock, value: "48-72h", label: "Délai d'intervention", color: "text-service-orange" }
  ];

  const departements = [
    {
      name: "Hauts-de-Seine",
      code: "92",
      image: "/images/zones/neuilly.webp",
      badge: "Secteur Prioritaire",
      badgeVariant: "serviceOrange" as const,
      description: "Le département le plus dense d'IdF : Boulogne-Billancourt, Neuilly, La Défense, Courbevoie... Intervention rapide sur les volets roulants des immeubles résidentiels et bureaux.",
      villes: [
        { name: "Boulogne-Billancourt", slug: "reparation-volet-boulogne-billancourt", image: "/images/zones/boulogne.webp" },
        { name: "Neuilly-sur-Seine", slug: "reparation-volet-neuillysur-seine", image: "/images/zones/neuilly.webp" },
        { name: "Levallois-Perret", slug: "reparation-volet-levallois-perret", image: "/images/zones/neuilly.webp" },
        { name: "Courbevoie", slug: "reparation-volet-courbevoie", image: "/images/zones/nanterre.webp" },
        { name: "Puteaux", slug: "reparation-volet-puteaux", image: "/images/zones/nanterre.webp" },
        { name: "La Défense", slug: "reparation-volet-la-defense", image: "/images/zones/nanterre.webp" },
        { name: "Sèvres", slug: "reparation-volet-sevres", image: "/images/zones/boulogne.webp" },
        { name: "Saint-Cloud", slug: "reparation-volet-saint-cloud", image: "/images/zones/boulogne.webp" },
        { name: "Rueil-Malmaison", slug: "reparation-volet-rueil-malmaison", image: "/images/zones/nanterre.webp" },
      ]
    },
    {
      name: "Seine-Saint-Denis",
      code: "93",
      image: "/images/zones/saint-denis.webp",
      badge: "Forte Demande",
      badgeVariant: "serviceBlue" as const,
      description: "De Saint-Denis à Montreuil, nos techniciens couvrent tout le 93. Réparations de volets roulants, motorisation et dépannage express dans un secteur où la demande est forte.",
      villes: [
        { name: "Saint-Denis", slug: "reparation-volet-saint-denis", image: "/images/zones/saint-denis.webp" },
        { name: "Montreuil", slug: "reparation-volet-montreuil", image: "/images/zones/saint-denis.webp" },
        { name: "Bobigny", slug: "reparation-volet-bobigny", image: "/images/zones/saint-denis.webp" },
        { name: "Pantin", slug: "reparation-volet-pantin", image: "/images/zones/saint-denis.webp" },
        { name: "Bagnolet", slug: "reparation-volet-bagnolet", image: "/images/zones/saint-denis.webp" },
        { name: "Noisy-le-Sec", slug: "reparation-volet-noisyle-sec", image: "/images/zones/saint-denis.webp" },
        { name: "Aubervilliers", slug: "reparation-volet-aubervilliers", image: "/images/zones/saint-denis.webp" },
        { name: "Saint-Ouen", slug: "reparation-volet-saint-ouen", image: "/images/zones/saint-denis.webp" },
      ]
    },
    {
      name: "Val-de-Marne",
      code: "94",
      image: "/images/zones/creteil.webp",
      badge: "Zone Résidentielle",
      badgeVariant: "serviceEmerald" as const,
      description: "Créteil, Vincennes, Vitry-sur-Seine... Le Val-de-Marne regorge de zones résidentielles où nos services de volets roulants sont très demandés.",
      villes: [
        { name: "Créteil", slug: "reparation-volet-creteil", image: "/images/zones/creteil.webp" },
        { name: "Vitry-sur-Seine", slug: "reparation-volet-vitrysur-seine", image: "/images/zones/creteil.webp" },
        { name: "Ivry-sur-Seine", slug: "reparation-volet-ivrysur-seine", image: "/images/zones/creteil.webp" },
        { name: "Villejuif", slug: "reparation-volet-villejuif", image: "/images/zones/creteil.webp" },
        { name: "Fontenay-sous-Bois", slug: "reparation-volet-fontenaysous-bois", image: "/images/zones/saint-maur.webp" },
        { name: "Vincennes", slug: "reparation-volet-vincennes", image: "/images/zones/saint-maur.webp" },
        { name: "Saint-Mandé", slug: "reparation-volet-saint-mande", image: "/images/zones/saint-maur.webp" },
      ]
    },
    {
      name: "Yvelines",
      code: "78",
      image: "/images/zones/versailles.webp",
      badge: "Patrimoine & Prestige",
      badgeVariant: "serviceViolet" as const,
      description: "De Versailles à Saint-Germain-en-Laye, les Yvelines combinent patrimoine historique et résidences modernes. Nos techniciens interviennent sur tous types de volets roulants.",
      villes: [
        { name: "Versailles", slug: "reparation-volet-versailles", image: "/images/zones/versailles.webp" },
        { name: "Saint-Germain-en-Laye", slug: "reparation-volet-saint-germainen-laye", image: "/images/zones/versailles.webp" },
        { name: "Rambouillet", slug: "reparation-volet-rambouillet", image: "/images/zones/versailles.webp" },
        { name: "Mantes-la-Jolie", slug: "reparation-volet-mantesla-jolie", image: "/images/zones/versailles.webp" },
      ]
    },
    {
      name: "Essonne & Seine-et-Marne & Val-d'Oise",
      code: "91 · 77 · 95",
      image: "/images/zones/evry.webp",
      badge: "Grande Couronne",
      badgeVariant: "serviceCyan" as const,
      description: "Les départements de grande couronne : Évry, Melun, Cergy, Pontoise... Nous assurons une couverture complète avec des délais optimisés grâce à notre réseau de techniciens locaux.",
      villes: [
        { name: "Évry", slug: "reparation-volet-evry", image: "/images/zones/evry.webp" },
        { name: "Corbeil-Essonnes", slug: "reparation-volet-corbeil-essonnes", image: "/images/zones/evry.webp" },
        { name: "Melun", slug: "reparation-volet-melun", image: "/images/zones/evry.webp" },
        { name: "Cergy", slug: "reparation-volet-cergy", image: "/images/zones/evry.webp" },
        { name: "Pontoise", slug: "reparation-volet-pontoise", image: "/images/zones/evry.webp" },
      ]
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: "Réparation & Dépannage",
      description: "Intervention rapide sur volets bloqués ou cassés en Île-de-France. Diagnostic gratuit et réparation immédiate.",
      link: "/services/reparation-volets-roulants"
    },
    {
      icon: Settings,
      title: "Installation & Remplacement",
      description: "Pose de volets roulants neufs sur-mesure en IdF. Solutions aluminium ou PVC haute qualité.",
      link: "/services/installation-remplacement-volets"
    },
    {
      icon: Zap,
      title: "Motorisation",
      description: "Modernisez vos volets manuels en Île-de-France. Installation de moteurs Somfy, Bubendorff et solutions connectées.",
      link: "/services/motorisation-domotique"
    },
    {
      icon: Home,
      title: "Domotique",
      description: "Centralisez le contrôle de vos volets en IdF. Pilotage à distance via smartphone et scénarios intelligents.",
      link: "/services/motorisation-domotique"
    },
    {
      icon: ShieldCheck,
      title: "Sécurité Renforcée",
      description: "Installation de verrous de sécurité et volets anti-effraction en Île-de-France pour protéger votre habitat.",
      link: "/services/installation-remplacement-volets"
    },
    {
      icon: Truck,
      title: "Dépannage Express",
      description: "Service d'urgence disponible en IdF pour les pannes critiques. Intervention sous 48h garantie.",
      link: "/services/depannage-express"
    }
  ];

  const faqs = [
    {
      question: "Quel est le délai d'intervention en banlieue parisienne ?",
      answer: "En petite couronne (92, 93, 94), nous intervenons sous 24 à 48h. En grande couronne (77, 78, 91, 95), comptez 48 à 72h. Pour les urgences de sécurité (volet bloqué ouvert, effraction), nous traitons la demande en priorité quel que soit le département."
    },
    {
      question: "Y a-t-il des frais de déplacement en Île-de-France ?",
      answer: "Aucun frais de déplacement en petite couronne (92, 93, 94). En grande couronne, un forfait déplacement de 20 à 30€ s'applique selon la distance. Ce forfait est offert si vous acceptez le devis. Diagnostic toujours gratuit."
    },
    {
      question: "Couvrez-vous tous les départements de l'Île-de-France ?",
      answer: "Oui, nous couvrons les 7 départements : Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95). Plus de 50 villes desservies."
    },
    {
      question: "Intervenez-vous en résidence et en copropriété ?",
      answer: "Oui, nous intervenons aussi bien chez les particuliers que dans les copropriétés et les résidences. Nous pouvons fournir des devis conformes aux exigences des syndics et des bailleurs sociaux."
    },
    {
      question: "Quelles marques de volets roulants réparez-vous en IdF ?",
      answer: "Nos techniciens sont experts sur toutes les marques : Somfy, Bubendorff, Profalux, Franciaflex, Simu, Nice, Becker, Came, Zurflüh-Feller. Nous disposons de pièces de rechange dans nos véhicules pour les réparations au premier passage."
    },
    {
      question: "Proposez-vous des contrats de maintenance pour les copropriétés ?",
      answer: "Oui, nous proposons des contrats de maintenance préventive pour les copropriétés et les gestionnaires immobiliers. Entretien annuel de tous les volets, vérification des moteurs, lubrification des coulisses. Tarifs dégressifs selon le nombre de volets."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={ileDeFranceImg} alt="Volets roulants Île-de-France" className="w-full h-[120%] object-cover" />
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
                7 Départements — Couverture Complète
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-foreground"
            >
              Réparation de Volets en <span className="text-accent">Île-de-France</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              Répar'Action Volets intervient dans toute la région parisienne. Nos techniciens couvrent les 7 départements (77, 78, 91, 92, 93, 94, 95) pour garantir votre satisfaction. Diagnostic gratuit et garantie 3 ans.
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
                  <span>48-72h</span>
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

      {/* Départements — Blocs Image + Texte */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <Badge variant="default" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-accent/10 text-accent border border-accent/20">
                <MapPin className="h-3.5 w-3.5" /> Départements Couverts
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Les Départements d'Île-de-France</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Cliquez sur votre ville pour accéder à la page dédiée et découvrir nos services spécifiques.</p>
            </div>
          </AnimatedSection>

          {departements.map((dept, deptIndex) => (
            <AnimatedSection key={deptIndex} animation="fade-up">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${deptIndex > 0 ? 'mt-24' : ''}`}>
                <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl group ${deptIndex % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img 
                    src={dept.image} 
                    alt={`Volets roulants ${dept.name}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-2xl font-bold backdrop-blur-sm">{dept.code}</span>
                  </div>
                </div>
                <div className={deptIndex % 2 !== 0 ? 'md:order-1' : ''}>
                  <Badge variant={dept.badgeVariant} className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    <Building2 className="h-3.5 w-3.5" /> {dept.badge}
                  </Badge>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{dept.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{dept.description}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {dept.villes.map((ville, villeIdx) => {
                      const colorMap: Record<string, { bg: string; border: string; iconBg: string }> = {
                        serviceOrange: { bg: 'bg-service-orange/5', border: 'border-service-orange/20', iconBg: 'bg-service-orange text-white' },
                        serviceBlue: { bg: 'bg-service-blue/5', border: 'border-service-blue/20', iconBg: 'bg-service-blue text-white' },
                        serviceEmerald: { bg: 'bg-service-emerald/5', border: 'border-service-emerald/20', iconBg: 'bg-service-emerald text-white' },
                        serviceViolet: { bg: 'bg-service-violet/5', border: 'border-service-violet/20', iconBg: 'bg-service-violet text-white' },
                        serviceCyan: { bg: 'bg-service-cyan/5', border: 'border-service-cyan/20', iconBg: 'bg-service-cyan text-white' },
                      };
                      const colors = colorMap[dept.badgeVariant] || colorMap.serviceBlue;
                      return (
                        <motion.div
                          key={ville.slug}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: villeIdx * 0.05 }}
                          className="group/card"
                        >
                          <Link to={`/zones-intervention/${ville.slug}`} className="block">
                            <div className="relative h-32 w-full overflow-hidden rounded-t-xl">
                              <img 
                                src={ville.image} 
                                alt={`Réparation volets ${ville.name}`} 
                                className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/5 transition-colors" />
                            </div>
                            <div className={`p-4 rounded-b-xl border border-t-0 transition-all duration-300 card-shadow group-hover/card:card-shadow-hover ${colors.bg} ${colors.border}`}>
                              <div className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-sm ${colors.iconBg}`}>
                                  <MapPin className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-bold text-foreground">{ville.name}</span>
                              </div>
                              <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-accent transition-all duration-300 group-hover/card:gap-2">
                                Voir les détails <ArrowRight className="h-3 w-3" />
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-accent">{dept.villes.length}</span>
                      <span className="text-xs text-muted-foreground">Villes couvertes</span>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-accent">48h</span>
                      <span className="text-xs text-muted-foreground">Délai moyen</span>
                    </div>
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
                Nos Services en Île-de-France
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Répar'Action Volets propose une gamme complète de solutions pour vos volets roulants dans toute la région parisienne.
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
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Vos Questions sur l'Île-de-France</h2>
              <p className="text-muted-foreground">Tout ce qu'il faut savoir sur nos services dans les 7 départements.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'une réparation en Île-de-France ?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Contactez nos experts pour un diagnostic gratuit et une intervention rapide sur vos volets roulants.</p>
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

export default IdFPage;
