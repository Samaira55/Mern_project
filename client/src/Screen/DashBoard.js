import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateForward, faCompressArrowsAlt, faExpand } from '@fortawesome/free-solid-svg-icons';
export default function DashBaord() {
    return (
        <div className="dashboard">
            <h3 className="dashboadH3">DashBaord</h3>
            <div className="dashboardmaindiv" >
                <div className="dashboardmaindivF">
                    <div className="dashboardmaindivFSubA"><HeaderDIV headername={"Introduction"} /></div>
                    <div className="dashboardmaindivFSubB"><HeaderDIV headername={"Projects"} /></div>
                </div>
                <div className="dashboardmaindivS">
                    <div className="dashboardmaindivSSubA"><HeaderDIV headername={"Assign to me"} /></div>
                    <div className="dashboardmaindivSSubB"><HeaderDIV headername={"Activity Streams"} /></div>
                </div>
            </div>
        </div>
    )
}

export function HeaderDIV(props) {
    return (
        <div>
            <div><NavComp headername={props.headername} mini={<FontAwesomeIcon icon={faCompressArrowsAlt} />} extend={<FontAwesomeIcon icon={faExpand} />} refresh={<FontAwesomeIcon icon={faRotateForward} />} /></div>
            <div>Data here</div>
        </div>
    )
}

export function NavComp(props) {
    return (
        <div className="NavCom">
            <div><h5 className="h5">{props.headername}</h5></div>
            <div className="NavS">
                <div className="NacIcon">{props.extend}</div>
                {
                    (props.headername === "Projects" ? null : <div className="NacIcon">{props.mini}</div>)
                }
                <div className="NacIcon">{props.refresh}</div>
            </div>
        </div>
    )
}

export function ProjectComp(){
    return(
        <div>

        </div>
    )
}
