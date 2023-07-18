import AppsIcon from '@mui/icons-material/Apps';
import { Outlet} from 'react-router-dom'
export default function Defaultlayout(){
    return(
        <div>
            <div><GitHubNavBar/></div>
            <div><Outlet /></div>
        </div>
    )
}

export function GitHubNavBar(){
    return(
        <div className="GitHubNavBar">
            <div className='GitHubNavBarF'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='GitHubNavBarS'>Second</div>
        </div>
    )
}