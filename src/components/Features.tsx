import { Calendar, Clock, Smartphone, TrendingUp, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Visualize todos os seus compromissos em um só lugar com interface limpa e intuitiva.",
  },
  {
    icon: Zap,
    title: "Configuração Rápida",
    description: "Comece a usar em minutos. Sem instalações complicadas ou treinamentos longos.",
  },
  {
    icon: Smartphone,
    title: "Acesso Anywhere",
    description: "Use em qualquer dispositivo. Desktop, tablet ou celular. Seus dados sempre sincronizados.",
  },
  {
    icon: Clock,
    title: "Lembretes Automáticos",
    description: "Nunca mais perca um compromisso. Receba notificações inteligentes no momento certo.",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Mantenha informações dos clientes organizadas e acesse rapidamente quando precisar.",
  },
  {
    icon: TrendingUp,
    title: "Relatórios Simples",
    description: "Acompanhe seu desempenho com relatórios claros sobre agendamentos e produtividade.",
  },
];

const Features = () => {
  return (
    <section className="bg-muted/50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-5xl">
            Tudo que você precisa para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              organizar seu tempo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ferramentas poderosas mas simples de usar, feitas especialmente para profissionais autônomos.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-20"></div>
              
              <div className="relative space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
