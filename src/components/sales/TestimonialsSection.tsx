import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Helena",
    age: 58,
    location: "São Paulo, SP",
    text: "Faz 3 anos que descobri o diabetes e desde então não comia pão. Com essas receitas, voltei a tomar café da manhã com a família. Minha glicemia continua controlada e eu estou muito mais feliz!",
    rating: 5,
  },
  {
    name: "José Carlos",
    age: 62,
    location: "Belo Horizonte, MG",
    text: "Minha esposa fez o pão de forma e eu jurei que era pão normal de padaria. Não acreditei quando ela disse que era low carb. Sabor incrível e minha glicose não subiu nada depois de comer.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    age: 45,
    location: "Curitiba, PR",
    text: "Eu não sabia cozinhar nada! Mas as receitas são tão bem explicadas que consegui fazer de primeira. O pão de queijo ficou perfeito e meus filhos nem perceberam a diferença.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    age: 67,
    location: "Rio de Janeiro, RJ",
    text: "Tenho diabetes tipo 2 há 10 anos. Já tinha desistido de comer pão até encontrar esse ebook. Agora como pão todo dia no café e no lanche. Meu médico até elogiou meus exames!",
    rating: 5,
  },
  {
    name: "Francisca Oliveira",
    age: 54,
    location: "Fortaleza, CE",
    text: "O que mais gostei foram os bônus! A lista de compras me economiza muito tempo no mercado. E o cardápio semanal me ajudou a organizar melhor minha alimentação.",
    rating: 5,
  },
  {
    name: "Antônio Ferreira",
    age: 71,
    location: "Porto Alegre, RS",
    text: "Comprei com medo de não conseguir fazer, mas as fotos do passo a passo ajudam muito. Até eu que nunca cozinhei na vida consegui fazer um pão delicioso!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Veja o Que Nossos Clientes{" "}
            <span className="text-primary">Estão Dizendo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de pessoas que transformaram sua alimentação 
            e voltaram a comer pão com prazer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-golden transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.age} anos • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
