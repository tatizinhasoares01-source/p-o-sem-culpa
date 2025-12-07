import { Button } from "@/components/ui/button";
import { ArrowDown, Check } from "lucide-react";
import heroBread from "@/assets/hero-bread.jpg";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-golden-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Check className="w-4 h-4" />
              <span>Mais de 2.000 pessoas já transformaram sua alimentação</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Descubra Como Fazer{" "}
              <span className="text-gradient-golden">Pães Deliciosos</span>{" "}
              Sem Sair da Dieta e Sem Culpa
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              O único ebook com <strong className="text-foreground">27 receitas exclusivas</strong> de pães caseiros desenvolvidas especialmente para quem precisa cuidar dos níveis de glicose — e não quer abrir mão do prazer de comer um pão fresquinho.
            </p>

            {/* Quick benefits */}
            <ul className="space-y-3">
              {[
                "Receitas simples, com ingredientes acessíveis",
                "Baixo índice glicêmico comprovado",
                "Sabor de pão de verdade, sem gosto de 'diet'",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" onClick={scrollToOffer}>
                Quero Minhas Receitas Agora
                <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
              </Button>
            </div>

            {/* Social proof */}
            <p className="text-sm text-muted-foreground">
              ⭐⭐⭐⭐⭐ Avaliado com 4.9/5 por mais de 500 clientes satisfeitos
            </p>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-3" />
            <img
              src={heroBread}
              alt="Pão caseiro quentinho e saudável para diabéticos"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-golden animate-float"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-card p-4 rounded-2xl shadow-card">
              <p className="text-3xl font-display font-bold text-primary">27</p>
              <p className="text-sm text-muted-foreground">Receitas<br/>Exclusivas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
