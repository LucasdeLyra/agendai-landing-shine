const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Agendaí
            </h3>
            <p className="text-sm text-muted-foreground">
              Controle total da sua agenda com facilidade.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Funcionalidades</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Preços</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Demonstração</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Sobre Nós</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Blog</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Privacidade</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Agendaí. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
