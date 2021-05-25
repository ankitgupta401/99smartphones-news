
import * as urls from "./pages/api.json";



export const getURL =() => {
    return (new Date().getDate())%2 ==0? urls.url : urls.url2;
}

