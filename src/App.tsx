import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
      <main>main</main>
    </QueryClientProvider>
  );
}

export default App;
