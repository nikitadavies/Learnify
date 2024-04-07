import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InstructorDashboard from './pages/InstructorDashboard/InstructorDashboard';
import LeftNavigation from './pages/LeftNavigation/LeftNavigation';
import Header from './pages/Header/Header';
import CreateSubject from './pages/Subject/CreateSubject/CreateSubject';
import CreateAssignment from './pages/Assignment/CreateAssignment';
import GetSubject from './pages/Subject/GetSubject/GetSubject';
import GetAssignment from './pages/Assignment/GetAssignment';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import GetAssignmentById from './pages/Assignment/GetAssignmentById';
import EditAssignment from './pages/Assignment/EditAssignment';

function App() {
  return (
     <Router>
      <div className="App">
        <ToastContainer />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/instructor/*" element={<ProtectedInstructorRoutes />} />
            <Route path="/student/*" element={<ProtectedStudentRoutes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function ProtectedInstructorRoutes() {
  return (
    <>
     <Header />
      <div className="main">
        <LeftNavigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<InstructorDashboard />} />
            <Route path="/create-subject" element={<CreateSubject/>} />
            <Route path="/create-assignment" element={<CreateAssignment/>} />
            <Route path="/subjects" element={<GetSubject/>} />
            <Route path="/assignments" element={<GetAssignment />} />
            <Route path="/assignments/:id" element={<GetAssignmentById />} />
            <Route path="/assignment/edit/:id" element={<EditAssignment />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

function ProtectedStudentRoutes() {
  return (
    <>
     <Header />
      <div className="main">
        <LeftNavigation />
        <div className="content">
          <Routes>
            <Route path="/subjects" element={<GetSubject/>} />
            <Route path="/assignments" element={<GetAssignment />} />
            <Route path="/assignments/:id" element={<GetAssignmentById />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
