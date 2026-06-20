import { Dashboard} from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { SignIn } from "./pages/Signin";
import { SharePage } from "./pages/SharePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path ="/signup" element= {<Signup/>}></Route>
     <Route path ="/signin" element= {<SignIn/>}></Route>
      <Route path ="/dashboard" element= {<Dashboard/>}></Route>
       <Route path="/share/:shareLink" element={<SharePage />} />
  </Routes>
  </BrowserRouter>
}