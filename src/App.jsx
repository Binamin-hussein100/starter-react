import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/studentList';
import StudentForm from './components/studentForm';

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<StudentForm />} />
          <Route path="/edit/:id" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
