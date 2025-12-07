import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const objections = [
  {
    question: "Eu não sei cozinhar. Vou conseguir fazer as receitas?",
    answer: "Com certeza! As receitas foram criadas pensando em iniciantes. Cada passo vem com explicações detalhadas e fotos ilustrativas. Se você consegue seguir uma receita de bolo de caixinha, você consegue fazer nossos pães. Muitos clientes que nunca tinham pisado na cozinha hoje fazem pães deliciosos!",
  },
  {
    question: "Serve para diabetes tipo 1 e tipo 2?",
    answer: "Sim! As receitas são adequadas tanto para diabetes tipo 1 quanto tipo 2. Todas utilizam ingredientes de baixo índice glicêmico e vêm com informação nutricional completa para você fazer seus ajustes conforme orientação do seu médico ou nutricionista.",
  },
  {
    question: "Os ingredientes são caros ou difíceis de encontrar?",
    answer: "Não! Usamos apenas ingredientes que você encontra em qualquer supermercado comum. Nada de farinha especial importada ou produtos de lojas especializadas. Você vai gastar menos do que comprando pães \"diet\" prontos.",
  },
  {
    question: "Os pães realmente ficam gostosos ou têm gosto de \"diet\"?",
    answer: "Essa é a nossa maior preocupação! Desenvolvemos cada receita até chegar em um sabor que a família toda aprova. Muitos clientes nos contam que servem para visitas e ninguém percebe que é um pão \"especial\". Você não vai comer um pão apenas por necessidade — vai comer porque é delicioso!",
  },
  {
    question: "Preciso de forno especial ou equipamentos caros?",
    answer: "Não precisa de nada além do que você provavelmente já tem: forno comum, formas básicas e utensílios de cozinha simples. Algumas receitas podem até ser feitas no micro-ondas ou na frigideira!",
  },
  {
    question: "Quanto tempo leva para fazer cada pão?",
    answer: "A maioria das receitas fica pronta em 40 minutos a 1 hora, incluindo o tempo de forno. Temos opções mais rápidas de 20 minutos para dias corridos. E você pode preparar a massa na noite anterior para agilizar ainda mais!",
  },
  {
    question: "E se eu não gostar ou não funcionar para mim?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso — porque temos certeza de que você vai amar!",
  },
];

const ObjectionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Ainda Tem Alguma{" "}
            <span className="text-primary">Dúvida</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Respondemos as perguntas mais frequentes para você decidir com segurança
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {objections.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 shadow-card border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
