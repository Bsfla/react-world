import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Footer from '@/composables/Footer';
import Header from '@/composables/Header';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        refetchOnMount: 'always',
        retryOnMount: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="flex flex-col h-screen "></main>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
