import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ChapterDetailPage from "./pages/ChapterDetailPage";
import ChaptersPage from "./pages/ChaptersPage";
import CharactersPage from "./pages/CharactersPage";
import IssuesPage from "./pages/IssuesPage";
import LoginPage from "./pages/LoginPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/projects" replace />} />
      <Route element={<AppLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route
          path="/projects/:projectId/characters"
          element={<CharactersPage />}
        />
        <Route path="/projects/:projectId/chapters" element={<ChaptersPage />} />
        <Route
          path="/projects/:projectId/chapters/:chapterId"
          element={<ChapterDetailPage />}
        />
        <Route path="/projects/:projectId/issues" element={<IssuesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
