// Login
import Login from "../pages/Login";
// Interviewer
import Interviewer from "../pages/Interviewer";
import {LPPdp} from "../components/liverpool/static-page/lp-pdp"
 

export const routes = [
    {
        path:["/","/login"],
        component:Login,
        exact:true,
        isProtected:false
    },
    {
        path:"/interviewer",
        component:Interviewer,
        exact:true,
        isProtected:true
    },
    {
    path:"/lppdp",
    component:LPPdp,
    exact:true,
    isProtected:false
}
];
