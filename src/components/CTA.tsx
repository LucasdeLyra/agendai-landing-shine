import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-card p-8 shadow-glow lg:p-16">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-5xl">
              Não perca mais tempo com{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                agendas desorganizadas
              </span>
            </h2>
            
            <p className="mb-8 text-lg text-muted-foreground">
              Junte-se a centenas de profissionais que já economizam horas toda semana com o Agendaí. Por menos de R$ 1 por dia.
            </p>
            
            <div className="mb-10 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>30 dias grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Depois R$ 29,90/mês</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Suporte em português</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="hero" size="xl" className="group">
                Comece Seu Teste de 30 Dias
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" size="xl">
                Falar com Especialista
              </Button>
            </div>
            
            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p className="font-medium">
                Experimente grátis por 30 dias. Depois só R$ 29,90/mês.
              </p>
              <p>
                Cancele quando quiser, sem burocracia. <span className="text-primary font-medium">Menos de R$ 1 por dia</span> para nunca mais perder compromissos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
