import { Check, Gift, BookOpen } from "lucide-react";

const ebookContent = [
  "27 receitas exclusivas de pães caseiros",
  "Pão de forma integral low carb",
  "Pão francês para diabéticos",
  "Focaccia com ervas frescas",
  "Bisnaguinha fit para o lanche",
  "Pão de queijo sem culpa",
  "Pão de alho para o churrasco",
  "Pão de hambúrguer artesanal",
  "Pão doce para ocasiões especiais",
  "Tabela nutricional de cada receita",
  "Dicas de substituição de ingredientes",
  "Modo de preparo passo a passo com fotos",
];

const bonuses = [
  {
    title: "Guia de Farinhas Alternativas",
    description: "Aprenda a escolher as melhores farinhas low carb e onde encontrá-las por menos.",
  },
  {
    title: "Cardápio Semanal",
    description: "7 dias de sugestões de café da manhã equilibrado usando as receitas do ebook.",
  },
  {
    title: "Lista de Compras Inteligente",
    description: "Lista organizada por seção do supermercado para economizar tempo e dinheiro.",
  },
];

const ContentSection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Veja Tudo Que Você Vai Receber{" "}
            <span className="text-primary">Hoje</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um conteúdo completo e prático que vai transformar suas manhãs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Ebook content */}
          <div className="bg-card p-8 rounded-3xl shadow-card">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Ebook Pães Sem Culpa
                </h3>
                <p className="text-muted-foreground">Conteúdo principal</p>
              </div>
            </div>

            <ul className="space-y-4">
              {ebookContent.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-secondary" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bonuses */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-display font-bold text-foreground">
                Bônus Exclusivos
              </h3>
            </div>

            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-card border-2 border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {bonus.title}
                    </h4>
                    <p className="text-muted-foreground">{bonus.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-primary/10 to-golden-light/10 p-6 rounded-2xl border-2 border-dashed border-primary/30">
              <p className="text-center text-foreground font-medium">
                🎁 <strong>Bônus disponíveis apenas para quem comprar hoje!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
