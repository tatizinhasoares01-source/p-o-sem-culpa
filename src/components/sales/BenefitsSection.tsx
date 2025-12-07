import { Heart, Leaf, Clock, Smile, ShoppingBag, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Controle Glicêmico",
    description: "Receitas desenvolvidas com ingredientes de baixo índice glicêmico que ajudam a manter seus níveis estáveis.",
  },
  {
    icon: Smile,
    title: "Coma Sem Culpa",
    description: "Finalmente você pode saborear um pão quentinho no café da manhã sem aquela sensação de estar 'trapaceando'.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Naturais",
    description: "Nada de químicas ou conservantes estranhos. Apenas ingredientes que você encontra no mercado do bairro.",
  },
  {
    icon: Clock,
    title: "Receitas Práticas",
    description: "Preparo simples e rápido. A maioria fica pronta em menos de 1 hora, do início ao pão na mesa.",
  },
  {
    icon: ShoppingBag,
    title: "Ingredientes Acessíveis",
    description: "Sem ingredientes caros ou difíceis de encontrar. Economia no bolso e sabor no prato.",
  },
  {
    icon: Sparkles,
    title: "Variedade Surpreendente",
    description: "De pão de forma a focaccia, de bisnaguinha a pão de alho. 27 opções para nunca enjoar.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            O Que Você Ganha Com o{" "}
            <span className="text-primary">"Pães Sem Culpa"</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais do que receitas, você recebe a liberdade de voltar a comer o que ama, 
            cuidando da sua saúde ao mesmo tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-golden transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
