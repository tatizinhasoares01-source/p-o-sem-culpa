import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Clock, Gift, Shield, Zap } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="oferta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Comece Hoje a Fazer{" "}
            <span className="text-primary">Pães Deliciosos</span> Sem Culpa
          </h2>
          <p className="text-lg text-muted-foreground">
            Investimento único com acesso vitalício a todas as receitas e atualizações
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl shadow-golden overflow-hidden">
            {/* Urgency bar */}
            <div className="bg-gradient-to-r from-golden-dark to-primary px-6 py-3 text-center">
              <p className="text-primary-foreground font-semibold flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Oferta especial por tempo limitado
              </p>
            </div>

            <div className="p-8">
              {/* What's included */}
              <ul className="space-y-4 mb-8">
                {[
                  "Ebook Pães Sem Culpa (27 receitas)",
                  "Tabelas nutricionais completas",
                  "Fotos passo a passo",
                  "Guia de Farinhas Alternativas (Bônus)",
                  "Cardápio Semanal (Bônus)",
                  "Lista de Compras Inteligente (Bônus)",
                  "Atualizações gratuitas vitalícias",
                  "Garantia de 7 dias",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-secondary" />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-2">De</p>
                <p className="text-3xl text-muted-foreground line-through decoration-destructive decoration-2">
                  R$ 97,00
                </p>
                <p className="text-muted-foreground mt-4 mb-2">Por apenas</p>
                <p className="text-5xl md:text-6xl font-display font-bold text-primary">
                  R$ 19,90
                </p>
                <p className="text-muted-foreground mt-2">
                  ou em até 2x de R$ 10,45
                </p>
              </div>

              {/* CTA Button */}
              <Button
                variant="cta"
                size="xl"
                className="w-full text-lg"
                onClick={() => window.open("#", "_blank")}
              >
                Quero Meu Ebook Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-secondary" />
                  Compra segura
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Acesso imediato
                </span>
                <span className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-primary" />
                  Bônus inclusos
                </span>
              </div>
            </div>
          </div>

          {/* Scarcity */}
          <div className="mt-8 bg-primary/10 rounded-2xl p-6 text-center">
            <p className="text-foreground font-medium">
              ⚠️ <strong>Atenção:</strong> Os bônus estão disponíveis 
              <span className="text-primary font-bold"> apenas para quem comprar hoje</span>. 
              Amanhã eles podem não estar mais inclusos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
