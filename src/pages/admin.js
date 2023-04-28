import Admin from '@/components/admin/Admin'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
export default function admin(){
    return(
        
 <div>
 <Router>
 <Routes>
   <Route path ='/admin' element={<Admin/>}/>
 </Routes>
 </Router>
 <Admin/>
</div>

    )
}