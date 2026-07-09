import { VerificationCard } from "@/components/verification-card";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-md flex flex-col gap-8">
        {/* Seção 1: Oferta */}
        <section className="text-center flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Acesso exclusivo
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-text">
            Grupo VIP de Dicas
          </h1>
          <p className="text-text-muted text-sm sm:text-base">
            Envie o comprovante do seu Pix abaixo. A confirmação é automática e
            libera seu acesso na hora.
          </p>
        </section>

        {/* Seção 2: Aviso legal */}
        <section className="rounded-lg border border-border bg-surface px-4 py-3">
          <p className="text-xs text-text-muted text-center leading-relaxed">
            Conteúdo destinado a maiores de 18 anos. Apostas envolvem risco
            financeiro. Jogue com responsabilidade. Não há promessa de ganho
            garantido.
          </p>
        </section>

        <VerificationCard />

        <footer className="text-center">
          <p className="text-xs text-text-muted">
            Dúvidas? Fale com o suporte antes de enviar seu comprovante.
          </p>
        </footer>
      </div>
    </main>
  );
}
