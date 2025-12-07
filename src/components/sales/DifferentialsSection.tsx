import { X, Check } from "lucide-react";

const comparisons = [
  {
    others: "Receitas genéricas da internet que não consideram a glicemia",
    ours: "Cada receita foi desenvolvida pensando especificamente em quem precisa controlar os níveis de glicose",
  },
  {
    others: "Ingredientes caros e difíceis de encontrar",
    ours: "Ingredientes acessíveis que você encontra em qualquer mercado",
  },
  {
    others: "Pães sem gosto, com textura estranha, que ninguém quer comer",
    ours: "Pães macios, saborosos, que a família toda vai adorar",
  },
  {
    others: "Receitas complicadas que exigem experiência na cozinha",
    ours: "Passo a passo simples que qualquer pessoa consegue seguir",
  },
  {
    others: "Sem informação nutricional ou orientação de consumo",
    ours: "Tabela nutricional completa e porções recomendadas para cada receita",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Por Que o "Pães Sem Culpa" é{" "}
            <span className="text-primary">Diferente</span> de Tudo no Mercado
          </h2>
          <p className="text-lg text-muted-foreground">
            Não é mais uma coletânea de receitas. É um guia completo criado por 
            quem entende as necessidades reais de quem vive com diabetes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="bg-destructive/5 p-6 rounded-xl flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </span>
                <p className="text-muted-foreground">{item.others}</p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-xl flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-secondary" />
                </span>
                <p className="text-foreground font-medium">{item.ours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
