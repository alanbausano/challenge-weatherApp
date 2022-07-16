import { QueryClient, QueryClientProvider } from 'react-query'

import { CurrentLocation } from './components/features/current'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentLocation />
    </QueryClientProvider>
  )
}

export default App
