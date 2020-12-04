import React from "react";
import {Link} from 'react-router-dom';

function getUserFriendlyNameFromPath(path:string){
    if(path === '/'){
        return 'home';
    }else{
        return path.substring(1);
    }
}
function SidebarLink(props:any){
    return(
        <Link to={props.path}
              className={props.activeClass}
              onClick={()=>props.setPath(props.path)}>
            <p className={'text-capitalize'}>{getUserFriendlyNameFromPath(props.path)}</p>
        </Link>
    )
}

export default SidebarLink;