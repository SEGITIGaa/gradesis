import { Router, Routes, Route, Dashboard, Smester, Login, List } from "./pages/exporter";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/smester" element={<Smester />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
