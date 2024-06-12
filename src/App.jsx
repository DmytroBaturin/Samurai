import { HomePage } from "./pages/home/index.js";
import { Header } from "./widgets/header/index.jsx";
import { PageLayout } from "./shared/layout/page/index.jsx";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/not-found/index.js";
import FadeIn from "./shared/ui/Fadein/index.jsx";
import { AboutPage } from "./pages/about/index.js";

function App() {
  return (
    <PageLayout>
      <FadeIn delay={500}>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/about" element={<AboutPage />} />
          <Route index path="*" element={<NotFoundPage />} />
        </Routes>
      </FadeIn>
    </PageLayout>
  );
}

export default App;
