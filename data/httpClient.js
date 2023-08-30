const API = "https://developer.themoviedb.org/docs/getting-started";
export function get(path){
    return fetch(API+path, {
        headers:{
            Authorization:
            ""
        }
    })
}