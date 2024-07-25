import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUp from '../pages/auth/signup';
import Signin from '../pages/auth/signin';
import Dashboard from '../pages/dashboard';
import Loader from "../components/common/Loader"
import { ProtectedRoute, PublicRoute } from "./custom";

const RootRouter = () => {
  const isAuthLoading = useSelector(state => state.auth.isAuthLoading);
  return (
    isAuthLoading ? <Loader /> :
     <Router>
      <Routes>
        <Route index element={<Navigate to="auth/signin" />} />
        <Route path="auth/signin" element={<PublicRoute element={<Signin />} />} />
        <Route path="auth/signup" element={<PublicRoute element={<SignUp />} />} />
        <Route path="dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="*" element={<Navigate to="auth/signin" />} />
      </Routes>
    </Router>
  );
}

export default RootRouter;
