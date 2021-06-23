const url ="https://smartphones-99-node.herokuapp.com/api/common/";
const url2= "https://smartphones99-node-2.herokuapp.com/api/common/" ;


export const getURL =() => {
    const newUrl = (new Date().getUTCDate()) %2 ==0 ? url2 : url
   return newUrl;
    // return "http://localhost:5000/api/common/"
}

