import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RatingContextProvider } from "./contexts/RatingsContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ColabContextProvider } from "./contexts/ColabContext";
import { ClassesContextProvider } from "./contexts/ClassesContext";

import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { RatingsPage } from "./pages/RatingsPage";
import { FormPage } from "./pages/FormPage";
import { ClassesPage } from "./pages/ClassesPage";
import { AddClassPage } from "./pages/AddClassPage";
import { RatingPage } from "./pages/RatingPage";
import { ClassPage } from "./pages/ClassPage";
import { EditClassPage } from "./pages/EditClassPage";

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
          path="/avaliacoes"
          element={
            <AuthContextProvider>
              <ColabContextProvider>
                <RatingContextProvider>
                  <RatingsPage />
                </RatingContextProvider>
              </ColabContextProvider>
            </AuthContextProvider>
          }
        />
        <Route
          path="/avaliar-aula"
          element={
            <RatingContextProvider>
              <FormPage />
            </RatingContextProvider>
          }
        />
        <Route
          path="/aulas"
          element={
            <AuthContextProvider>
              <ClassesContextProvider>
                <ClassesPage />
              </ClassesContextProvider>
            </AuthContextProvider>
          }
        />
        <Route
          path="/adicionar-aula"
          element={
            <AuthContextProvider>
              <ClassesContextProvider>
                <AddClassPage />
              </ClassesContextProvider>
            </AuthContextProvider>
          }
        />
        <Route
          path="/avaliacao"
          element={
            <AuthContextProvider>
              <RatingPage />
            </AuthContextProvider>
          }
        />
        <Route
          path="/aula"
          element={
            <AuthContextProvider>
              <ClassPage />
            </AuthContextProvider>
          }
        />
        <Route
          path="/editar-aula"
          element={
            <AuthContextProvider>
              <ClassesContextProvider>
                <EditClassPage />
              </ClassesContextProvider>
            </AuthContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
