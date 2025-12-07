const StorySection = () => {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
            Você Sente Falta de Comer um{" "}
            <span className="text-primary">Pão de Verdade</span>?
          </h2>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>
              Eu sei exatamente como é acordar de manhã, sentir aquele cheiro de pão 
              fresquinho... e lembrar que <strong className="text-foreground">"não pode"</strong>.
            </p>

            <p>
              Você vê sua família tomando café com pãozinho quentinho, e precisa se 
              contentar com opções sem graça, industrializadas, ou simplesmente 
              <em> pular o pão</em> — como se isso fosse fácil.
            </p>

            <p className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary italic">
              "Eu me sentia excluída nas refeições. Todo mundo comia normal e eu 
              ficava ali, olhando, com inveja..."
            </p>

            <p>
              A verdade é que ninguém deveria ter que escolher entre 
              <strong className="text-foreground"> cuidar da saúde e ter prazer na alimentação</strong>.
            </p>

            <p>
              Foi pensando nisso que desenvolvi o <strong className="text-foreground">"Pães Sem Culpa"</strong>: 
              um ebook com 27 receitas de pães caseiros que você pode comer 
              <em> sem medo de disparar a glicemia</em>.
            </p>

            <p className="text-xl font-medium text-foreground text-center pt-4">
              Chegou a hora de você também saborear um pão quentinho no café da manhã, 
              <span className="text-primary"> sem culpa e sem preocupação</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
