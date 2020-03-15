import React, {Component} from "react";


export const withScroll = (Component) => {

    function RedirectComponent({from, to}) {
        if (!props.isLogin) return <Redirect to='/login'/>
        return <Component {...props}/>
    }


    return RedirectComponent;
}