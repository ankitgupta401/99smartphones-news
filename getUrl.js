const url ="https://smartphones-99-node.herokuapp.com/api/common/";
const url2= "https://smartphones99-node-2.herokuapp.com/api/common/" ;


export const getURL =() => {
    return (new Date().getDate())%2 ==0? url : url2;
    // return "http://localhost:5000/api/common/"
}

