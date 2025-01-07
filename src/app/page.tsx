export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-[family-name:var(--font-geist-sans)]">
      {/* Cabeçalho */}
      <header className="w-full text-center">
        <h1 className="text-3xl font-bold">Bem-vindo à Home!</h1>
      </header>

      {/* Conteúdo principal */}
      <main className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <p className="text-center text-lg">
          Esta é a página inicial. 
        </p>
      </main>
    </div>
  );
}
