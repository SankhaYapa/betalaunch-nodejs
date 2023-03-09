import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddEmployees } from "./pages/addEmployees/AddEmployees";
import { Dashboard } from "./pages/dashboard/Dashboard";
import EditEmployees from "./pages/editEmployees/EditEmployees";




function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Dashboard></Dashboard>} />
    <Route path="/editEmployee/:id" element={<EditEmployees></EditEmployees>}></Route>
    
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
