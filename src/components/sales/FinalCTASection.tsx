import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const FinalCTASection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brown via-brown-light to-accent text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Heart className="w-12 h-12 mx-auto mb-6 text-golden-light" />

        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 max-w-3xl mx-auto">
          Você Merece Voltar a Sentir o{" "}
          <span className="text-golden-light">Prazer de Comer Pão</span>
        </h2>

        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Não deixe a diabetes tirar mais esse prazer simples da sua vida. 
          Com as receitas certas, você pode comer pão fresquinho todos os dias 
          — cuidando da saúde e alimentando a alma.
        </p>

        <Button
          variant="hero"
          size="xl"
          onClick={scrollToOffer}
          className="bg-golden-light text-brown hover:bg-golden hover:text-brown-light"
        >
          Sim, Eu Quero Comer Pão Sem Culpa!
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-sm text-primary-foreground/70 mt-6">
          Acesso imediato • Garantia de 7 dias • Pagamento 100% seguro
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
