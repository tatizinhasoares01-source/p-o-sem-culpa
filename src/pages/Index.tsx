import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sales/HeroSection";
import StorySection from "@/components/sales/StorySection";
import BenefitsSection from "@/components/sales/BenefitsSection";
import ContentSection from "@/components/sales/ContentSection";
import DifferentialsSection from "@/components/sales/DifferentialsSection";
import TestimonialsSection from "@/components/sales/TestimonialsSection";
import ObjectionsSection from "@/components/sales/ObjectionsSection";
import GuaranteeSection from "@/components/sales/GuaranteeSection";
import OfferSection from "@/components/sales/OfferSection";
import FinalCTASection from "@/components/sales/FinalCTASection";
import FooterSection from "@/components/sales/FooterSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pães Sem Culpa | 27 Receitas de Pães para Diabéticos</title>
        <meta
          name="description"
          content="Descubra 27 receitas exclusivas de pães caseiros desenvolvidas para diabéticos. Sabor de verdade, baixo índice glicêmico e ingredientes acessíveis."
        />
        <meta
          name="keywords"
          content="pães para diabéticos, receitas low carb, pão sem açúcar, diabetes, alimentação saudável"
        />
        <link rel="canonical" href="https://paessemculpa.com.br" />
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <StorySection />
        <BenefitsSection />
        <ContentSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <ObjectionsSection />
        <GuaranteeSection />
        <OfferSection />
        <FinalCTASection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
