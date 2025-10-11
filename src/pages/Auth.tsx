import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Trophy, Mail, Lock, User } from "lucide-react";
import mascote from "@/assets/mascote.jpg";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular login (remover quando integrar backend real)
    setTimeout(() => {
      toast({
        title: "Login simulado",
        description: "Funcionalidade de autenticação será integrada em breve!",
      });
      setIsLoading(false);
      navigate("/chat");
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular cadastro (remover quando integrar backend real)
    setTimeout(() => {
      toast({
        title: "Cadastro simulado",
        description: "Funcionalidade de autenticação será integrada em breve!",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
        {/* Left side - Branding */}
        <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-3 text-primary mb-4">
            <Trophy className="w-12 h-12" />
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Almanaque Bot
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
            Análise inteligente de apostas esportivas com IA
          </p>

          <div className="hidden lg:block">
            <img 
              src={mascote} 
              alt="Almanaque Bot Mascote" 
              className="w-80 h-80 object-contain mx-auto lg:mx-0 drop-shadow-2xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Análise em tempo real</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Histórico completo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Estratégias personalizadas</span>
            </div>
          </div>
        </div>

        {/* Right side - Auth forms */}
        <div className="w-full lg:w-auto lg:min-w-[450px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="text-base">Entrar</TabsTrigger>
              <TabsTrigger value="signup" className="text-base">Cadastrar</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Card className="border-2 shadow-xl backdrop-blur-sm bg-card/95">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold">Bem-vindo de volta!</CardTitle>
                  <CardDescription>
                    Entre com suas credenciais para acessar suas análises
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-base">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="seu@email.com"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-base">Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="link"
                      className="px-0 text-sm text-muted-foreground hover:text-primary"
                    >
                      Esqueceu sua senha?
                    </Button>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? "Entrando..." : "Entrar"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup">
              <Card className="border-2 shadow-xl backdrop-blur-sm bg-card/95">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold">Criar conta</CardTitle>
                  <CardDescription>
                    Cadastre-se para começar suas análises esportivas
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSignup}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name" className="text-base">Nome</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="Seu nome"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-base">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="seu@email.com"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-base">Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 h-12"
                          required
                          minLength={6}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Ao criar uma conta, você concorda com nossos Termos de Serviço e Política de Privacidade.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? "Criando conta..." : "Criar conta"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Voltar para{" "}
            <Button
              variant="link"
              className="px-1 text-primary hover:text-primary/80"
              onClick={() => navigate("/")}
            >
              página inicial
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;