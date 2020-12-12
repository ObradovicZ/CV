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
              className={props.activeClass + ' w-100'}
              onClick={()=>props.setPath(props.path)}>
            <p className={'text-capitalize px-4 py-2 mb-0 sidebar-link-p'}>{getUserFriendlyNameFromPath(props.path)}</p>
        </Link>
    )
}

export default SidebarLink;