const url ="https://smartphones-99-node.herokuapp.com/api/common/";
const url2= "https://smartphones99-node-2.herokuapp.com/api/common/" ;



export const getURL =() => {
    let date = (new Date().getUTCDate());

    const newUrl =  date <= 25 ? url2 : url
   return newUrl;
    // return "http://localhost:5000/api/common/"
}



