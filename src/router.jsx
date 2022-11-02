import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RatingContextProvider } from "./contexts/RatingsContext";

import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { ColabPage } from "./pages/ColabPage";
import { FormPage } from "./pages/FormPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <RatingContextProvider>
              <ColabPage />
            </RatingContextProvider>
          }
        />
        <Route
          path="/avaliacao"
          element={
            <RatingContextProvider>
              <FormPage />
            </RatingContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
