import { Shield, ArrowRight } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-6">
              <Shield className="w-10 h-10 text-secondary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Garantia Incondicional de{" "}
              <span className="text-secondary">7 Dias</span>
            </h2>

            <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                A gente confia tanto no "Pães Sem Culpa" que oferece uma garantia 
                <strong className="text-foreground"> sem nenhum risco para você</strong>.
              </p>

              <p>
                Se dentro de 7 dias você não ficar completamente satisfeito com as 
                receitas, com os resultados, ou por <em>qualquer outro motivo</em>...
              </p>

              <p className="text-xl font-semibold text-foreground">
                Basta enviar um e-mail e devolvemos 100% do seu investimento.
              </p>

              <p className="text-muted-foreground">
                Sem perguntas. Sem burocracia. Sem letras miúdas.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-secondary font-medium">
              <ArrowRight className="w-5 h-5" />
              <span>O risco é todo nosso. A decisão é toda sua.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
