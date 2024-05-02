const proxyServer = 'https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/';


//getData goes out and hits the REST api
//endpoint - which data I want - ex: 'about/' or 'people/'
async function getData(endpoint){
    const res = await fetch(`${proxyServer}${endpoint}`);
    return await res.json();
}


export default getData;