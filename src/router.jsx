import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RatingContextProvider } from "./contexts/RatingsContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ColabContextProvider } from "./contexts/ColabContext";

import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { ColabPage } from "./pages/ColabPage";
import { FormPage } from "./pages/FormPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/login"
          element={
            <AuthContextProvider>
              <LoginPage />
            </AuthContextProvider>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthContextProvider>
              <ColabContextProvider>
                <RatingContextProvider>
                  <ColabPage />
                </RatingContextProvider>
              </ColabContextProvider>
            </AuthContextProvider>
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
