import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FitnessProvider } from './context/FitnessContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import Exercise from './pages/Exercise';
import Nutrition from './pages/Nutrition';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <FitnessProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </FitnessProvider>
  );
}
export default App;
