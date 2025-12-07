const FooterSection = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm mb-4">
          © {new Date().getFullYear()} Pães Sem Culpa. Todos os direitos reservados.
        </p>

        <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          <strong>Aviso Legal:</strong> Este ebook contém receitas de pães com ingredientes 
          de baixo índice glicêmico, desenvolvidas para auxiliar em uma alimentação equilibrada. 
          As informações aqui apresentadas não substituem orientação médica ou nutricional 
          profissional. Consulte sempre seu médico ou nutricionista antes de fazer alterações 
          significativas em sua dieta. Resultados podem variar de pessoa para pessoa.
        </p>

        <div className="flex justify-center gap-6 mt-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
