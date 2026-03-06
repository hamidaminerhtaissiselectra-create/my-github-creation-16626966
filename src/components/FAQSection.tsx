import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp } from "@/lib/animations";
import { useEffect } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  detail?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  { q: "Combien coûte la réparation d'un volet roulant à Paris ?", a: "Le coût d'une réparation de volet roulant à Paris varie selon le type de panne. Une réparation de sangle ou de manivelle coûte entre 60€ et 120€. Le remplacement d'un moteur Somfy ou Bubendorff se situe entre 180€ et 350€. Répar'Action Volets réalise un diagnostic gratuit et vous remet un devis détaillé avant toute intervention — sans surprise ni frais cachés." },
  { q: "Qui peut réparer mes volets roulants en urgence le week-end à Paris ?", a: "Répar'Action Volets propose un service d'urgence disponible 7 jours sur 7, y compris les week-ends et jours fériés. Nous intervenons en priorité pour les volets bloqués en position ouverte (risque de sécurité), les bris de glace et les dommages liés à une tentative d'effraction. Appelez le 06 03 20 59 67 pour une intervention rapide." },
  { q: "Quels types et marques de volets roulants réparez-vous ?", a: "Nos techniciens interviennent sur tous les types de volets roulants : manuels (sangle, manivelle, treuil), électriques (filaires, radio, solaires), ainsi que les volets en aluminium, PVC ou bois. Nous sommes experts de toutes les grandes marques : Somfy, Bubendorff, Profalux, Franciaflex, Simu, Nice, Becker, Came, Zurflüh-Feller." },
  { q: "Comment motoriser un volet roulant manuel existant ?", a: "Répar'Action Volets motorise vos volets manuels existants sans travaux de maçonnerie. Nous installons un moteur tubulaire électrique (filaire, radio ou connecté) directement dans le tube d'enroulement de votre volet actuel. L'opération dure 1 à 2 heures par volet. Votre volet devient télécommandé ou pilotable depuis votre smartphone via Somfy TaHoma, Google Home ou Amazon Alexa." },
  { q: "Quelle garantie proposez-vous sur vos interventions de réparation ?", a: "Toutes les interventions de Répar'Action Volets sont couvertes par une garantie de 3 ans sur les pièces et la main d'œuvre. Nous utilisons exclusivement des pièces d'origine des fabricants. Notre certification RGE et notre assurance décennale vous protègent en cas de problème." },
  { q: "Dans quelles villes intervenez-vous pour la réparation de volets roulants ?", a: "Répar'Action Volets intervient principalement à Paris (tous les arrondissements, du 1er au 20e) et en Île-de-France (Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Val-d'Oise). Nous couvrons également les grandes métropoles françaises : Lyon, Marseille, Toulouse, Bordeaux, Nantes, Strasbourg." },
  { q: "Comment se déroule un remplacement de vitrage en urgence ?", a: "En cas de bris de glace, Répar'Action Volets intervient en urgence pour sécuriser votre logement. Nous posons d'abord un vitrage provisoire si nécessaire, puis prenons les mesures exactes pour commander le vitrage définitif adapté (simple, double ou triple vitrage, feuilleté anti-effraction, acoustique). L'installation définitive est réalisée en 1 à 3 heures." },
  { q: "Quel est le prix moyen d'une installation de volet roulant neuf à Paris ?", a: "Le prix d'une installation de volet roulant neuf à Paris dépend du type (manuel, électrique, solaire), des dimensions et du matériau (aluminium, PVC). Comptez en moyenne entre 350€ et 900€ par volet, pose comprise. Les volets solaires Somfy ou Bubendorff se situent entre 600€ et 1 200€. Répar'Action Volets vous fournit un devis gratuit et détaillé après visite." },
  { q: "Combien de temps dure une réparation de volet roulant ?", a: "La grande majorité de nos réparations sont réalisées en 1 à 2 heures sur place, au premier passage. Nos véhicules sont équipés des pièces de rechange les plus courantes, ce qui nous permet de résoudre 95% des pannes immédiatement. Pour les cas complexes (changement de moteur, remplacement de tablier), l'intervention peut durer jusqu'à 3-4 heures." },
  { q: "Êtes-vous certifié RGE ? Puis-je bénéficier de MaPrimeRénov' ?", a: "Oui, Répar'Action Volets est certifié RGE (Reconnu Garant de l'Environnement) et Qualibat. Cette double certification vous permet de bénéficier de MaPrimeRénov', de l'éco-PTZ et du crédit d'impôt pour vos travaux d'isolation (installation de volets isolants, double vitrage). Nous vous accompagnons dans vos démarches administratives." },
  { q: "Aluminium ou PVC : quel est le meilleur matériau pour un volet roulant ?", a: "L'aluminium est le matériau de référence pour les volets roulants haut de gamme : léger, résistant, avec une excellente isolation thermique grâce à la mousse polyuréthane injectée, et une durée de vie supérieure à 20 ans. Le PVC est une solution plus économique, bien adaptée aux fenêtres de taille standard. Répar'Action Volets vous conseille sur le meilleur choix selon votre budget et vos besoins." },
  { q: "Comment connecter mes volets roulants à Google Home ou Alexa ?", a: "Répar'Action Volets installe des moteurs Somfy (protocoles RTS et io-homecontrol) et Bubendorff compatibles avec les principales plateformes domotiques : Somfy TaHoma, Google Home, Amazon Alexa, Apple HomeKit. Après l'installation du moteur, nous configurons votre application smartphone et vos scénarios automatisés (lever/coucher du soleil, programmation horaire)." },
];

const FAQSection = ({
  title = "Questions Fréquentes — Réparation & Installation de Volets Roulants à Paris",
  subtitle = "Retrouvez les réponses aux questions les plus posées sur la réparation, l'installation, la motorisation de volets roulants et la vitrerie à Paris et en Île-de-France.",
  detail = "Ces réponses sont rédigées par nos techniciens experts, forts de plus de 10 ans d'expérience terrain. Si votre question ne figure pas ici, appelez le <a href=\"tel:0603205967\" class=\"text-accent font-semibold hover:underline\">06 03 20 59 67</a> — un conseiller technique vous répond directement.",
  faqs,
}: FAQSectionProps) => {
  const displayFaqs = faqs || defaultFaqs;

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": displayFaqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.innerHTML = JSON.stringify(faqSchema);
    if (!document.getElementById('faq-schema')) {
      document.head.appendChild(script);
    }
    return () => {
      const existing = document.getElementById('faq-schema');
      if (existing) existing.remove();
    };
  }, [displayFaqs]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-section-gradient relative overflow-hidden" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4 relative">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground mb-3">{subtitle}</p>
          <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: detail }} />
        </motion.div>

        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {displayFaqs.map((f, i) => (
              <AccordionItem 
                key={i}
                value={`faq-${i}`} 
                className="bg-card rounded-2xl border border-border card-shadow hover:card-shadow-hover px-8 transition-all duration-300 group overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger className="text-left font-display font-bold text-foreground text-base hover:no-underline py-6 group-hover:text-accent transition-colors duration-300">
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-accent font-extrabold text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span itemProp="name">{f.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent 
                  className="text-muted-foreground text-sm leading-relaxed pb-6 pl-11 faq-answer"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{f.a}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
