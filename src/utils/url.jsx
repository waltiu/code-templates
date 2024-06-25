export const getUrlParams = (url, key) => {
    const paramsRegex = /[?&]+([^=&]+)=([^&]*)/gi;
    let params = {} ;
    let match;
    while ((match = paramsRegex.exec(url))) {
        params[match[1]] = match[2];
    }
    if (key) {
        return params[key];
    } else {
        return params;
    }
};


export const getUrlPath=()=>{
    return window.location.pathname;
}