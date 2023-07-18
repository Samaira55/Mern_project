import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserCredentials from '../Screen/UserCredentials';
import DashBaord from '../Screen/DashBoard';
import { useEffect } from 'react';
import { Fetchdata, GetAuthenication } from '../ServerMethod/Servermethods';
import Defaultlayout from '../AppLayout/Layout';


export default function AppRouting() {
    const urlParams = new URLSearchParams(window.location.search);
    useEffect(
        ()=>{
            if(urlParams.get('id') !== null){
                GetAuthenication(urlParams.get('id'))
                //Fetchdata();
            }
        }
    ,[])
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<UserCredentials/>} />
                    </Route>
                    <Route path="/user/Dashbaord" element={<Defaultlayout/>}>
                    <Route index element={<DashBaord/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


// Home page
// http://localhost:3002/Dashbaord