import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProxyBeacon from "./pages/ProxyBeacon";
import ProxySphere from "./pages/ProxySphere";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proxybeacon" element={<ProxyBeacon />} />
          <Route path="/proxysphere" element={<ProxySphere />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
