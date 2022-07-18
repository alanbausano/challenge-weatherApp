import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { WeatherLocation } from './components/features/current'
import { theme } from './styles/theme'

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
      <ThemeProvider theme={theme}>
        <WeatherLocation />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
