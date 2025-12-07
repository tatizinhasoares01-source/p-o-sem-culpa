import { Button } from "@/components/ui/button";
import { ArrowDown, Check } from "lucide-react";
import heroBread from "@/assets/hero-bread.jpg";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-golden-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Badge */}
        <div className="text-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
            <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Mais de 2.000 pessoas já transformaram sua alimentação</span>
          </div>
        </div>

        {/* Headline - STRONGER HOOK */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight max-w-4xl mx-auto animate-slide-up">
          "Nunca Mais Vou Comer Pão"{" "}
          <span className="block sm:inline text-primary">— Mentira.</span>
        </h1>

        {/* Image - NOW BETWEEN HEADLINE AND REST */}
        <div className="relative max-w-3xl mx-auto my-8 sm:my-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl sm:rounded-3xl transform rotate-1" />
          <img
            src={heroBread}
            alt="Pão caseiro quentinho e saudável para diabéticos"
            className="relative z-10 w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl sm:rounded-3xl shadow-golden"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-3 left-4 sm:-bottom-4 sm:left-8 z-20 bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-card">
            <p className="text-2xl sm:text-3xl font-display font-bold text-primary">27</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Receitas<br/>Exclusivas</p>
          </div>
        </div>

        {/* Second part of headline + content */}
        <div className="max-w-3xl mx-auto text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
            Descubra os Pães Que{" "}
            <span className="text-gradient-golden">Diabéticos Podem Comer</span>{" "}
            Sem Medo
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            <strong className="text-foreground">27 receitas exclusivas</strong> de pães caseiros com baixo índice glicêmico — para você voltar a sentir o prazer de um pão fresquinho no café da manhã.
          </p>

          {/* Quick benefits */}
          <ul className="inline-flex flex-col items-start text-left space-y-2 sm:space-y-3 mb-8">
            {[
              "Ingredientes simples que você já tem em casa",
              "Glicemia estável mesmo depois de comer",
              "Sabor de pão de verdade, aprovado pela família",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-lg text-foreground">
                <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button variant="hero" size="lg" className="w-full sm:w-auto sm:text-lg sm:h-14 sm:px-10" onClick={scrollToOffer}>
              Quero Minhas Receitas Agora
              <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>

          {/* Social proof */}
          <p className="text-xs sm:text-sm text-muted-foreground">
            ⭐⭐⭐⭐⭐ Avaliado com 4.9/5 por mais de 500 clientes satisfeitos
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
