import { Button } from "@/components/ui/button";
import { Calendar, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-calendar.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Zap className="h-4 w-4" />
              <span className="font-medium">Grátis para começar</span>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
              Pare de perder tempo{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                gerenciando sua agenda
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground lg:text-xl">
              Interface intuitiva para profissionais autônomos que querem ter controle total sobre seus compromissos sem complicação.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" className="group">
                Comece Agora - É Grátis
                <Calendar className="transition-transform group-hover:scale-110" />
              </Button>
              <Button variant="outlineHero" size="xl">
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Configure em 2 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Sem cartão de crédito</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-primary opacity-20 blur-3xl"></div>
            <img
              src={heroImage}
              alt="Profissional gerenciando agenda digital de forma intuitiva"
              className="relative rounded-2xl shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
