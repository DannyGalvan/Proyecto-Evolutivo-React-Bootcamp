import { register } from "swiper/element/bundle";
import { ControlRouter } from "./routes/ControlRouter";
import { AuthProvider } from "./hooks/ContextLogin";

function App() {
  register();

  return (
    <AuthProvider>
      <ControlRouter />
    </AuthProvider>
  );
}

export default App;
