import react, { Children } from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import { getApiUrl } from "../../utils/common.util";

function RouterLinkService(){
    let storageRouterLink;

    const getRouterLink = async () => {
        try {
            const response = await axios.get(getApiUrl('/router-link'));
            // storageRouterLink = response.data;
            storageRouterLink = [
                {
                    idRouterLink: 1,
                    path: '/',
                    name: 'Home',
                    label: 'Home',
                    icon: 'fa-solid fa-house',
                    children: [],
                    
                    isActive: true,
                    isAdmin: false,
                    isUser: true,
                    isGuest: false,
                    isLogin: true,
                }
            ]
            return storageRouterLink;
        }
        catch(error){
            console.error('Error fetching router link:', error);
        }
    }


}