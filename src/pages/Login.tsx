import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticating, professionals } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const result = login(email, password);
    if (!result.success) {
      setError(result.error ?? "Não foi possível autenticar");
      return;
    }

    navigate("/dashboard", { replace: true });
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col lg:flex-row">
        <section className="flex-1 bg-slate-50 px-8 py-10 lg:flex lg:flex-col lg:justify-between">
          <div className="mx-auto w-full max-w-md space-y-10">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">Bem-vindo ao Agendaí</p>
              <h1 className="text-3xl font-bold text-slate-900">Entre na sua conta</h1>
              <p className="text-sm text-slate-600">
                Organize e compartilhe sua disponibilidade de forma inteligente.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Senha
                </label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <div className="text-right text-sm">
                  <Link to="#" className="text-primary hover:underline">
                    Esqueci minha senha
                  </Link>
                </div>
              </div>

              {error && <p className="text-sm font-medium text-destructive">{error}</p>}

              <Button type="submit" className="h-12 w-full text-base font-semibold" disabled={isAuthenticating}>
                {isAuthenticating ? "Entrando..." : "Entrar"}
              </Button>
            </form>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-px flex-1 bg-slate-200" />
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">ou</span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="flex justify-center">
                <GoogleButton
                  type="light"
                  onClick={() => {
                    // Placeholder: fluxo real não implementado
                  }}
                />
              </div>
            </div>

            <p className="text-sm text-slate-600">
              Não tem uma conta?
              <Link to="#" className="ml-2 font-semibold text-primary hover:underline">
                Criar conta
              </Link>
            </p>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h2 className="mb-2 text-sm font-semibold text-slate-800">Credenciais de demonstração</h2>
              <ul className="space-y-2 text-xs text-slate-600">
                {professionals.map((professional) => (
                  <li key={professional.id} className="flex items-center justify-between gap-2">
                    <span className="font-medium text-slate-700">{professional.nome}</span>
                    <span className="rounded bg-slate-100 px-2 py-1 font-mono">{professional.email}</span>
                    <span className="rounded bg-slate-100 px-2 py-1 font-mono">123456</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <aside className="flex-1 bg-slate-900 px-8 py-10 text-white">
          <div className="mx-auto flex h-full max-w-md flex-col justify-between space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                Acesso profissional exclusivo
              </div>
              <h2 className="text-3xl font-bold leading-snug">
                Tenha controle total sobre sua agenda, alinhe expectativa com clientes e feche compromissos mais rápido.
              </h2>
            </div>

            <div className="space-y-5 text-sm text-white/80">
              <p>
                "Agendaí me ajuda a reduzir o vai-e-volta com clientes e a ganhar tempo de verdade. Em poucos cliques, meus horários estão sincronizados."
              </p>
              <div>
                <p className="font-semibold text-white">Carolina Torres</p>
                <p>Fisioterapeuta esportiva</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-white/60">
              <Link to="#" className="hover:text-white">Termos</Link>
              <Link to="#" className="hover:text-white">Privacidade</Link>
              <p className="text-white/40">© {new Date().getFullYear()} Agendaí</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Login;
