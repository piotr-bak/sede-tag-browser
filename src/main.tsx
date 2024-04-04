import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.scss'

const queryClient = new QueryClient( {} );

ReactDOM.createRoot( document.querySelector( '#root' )! ).render(
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
    </QueryClientProvider>
)
