import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AssetDetail from './pages/AssetDetail';
import Marketplace from './pages/Marketplace';
import Blog from './pages/Blog';
import AddAsset from './pages/AddAsset';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="assets/:category" element={<AssetDetail />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="blog" element={<Blog />} />
        <Route path="add-asset" element={<AddAsset />} />
      </Route>
    </Routes>
  );
}

export default App;