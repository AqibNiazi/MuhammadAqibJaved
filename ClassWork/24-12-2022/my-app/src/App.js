import AppRoutes from "./10-12-2022/routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import { store } from './10-12-2022/redux/store/Store'
import { Provider } from 'react-redux'
function App() {
  const client = new QueryClient();
  return (
    <Provider store={store}>
    <QueryClientProvider client={client}>
      <Toaster />
      <AppRoutes />
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
    </Provider>
  );
}
export default App;
