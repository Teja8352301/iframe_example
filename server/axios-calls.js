const axios = require('axios')

export const serviceReq = async(reqUrl,reqMethod,reqPayload,reqHeaders) =>{
    let options = {
        method:reqMethod || 'GET',
        url:reqUrl || '',
        data:reqPayload || {},
        headers:reqHeaders || {}
    }
    if(reqMethod == 'GET' || reqMethod == 'get'){
        delete options['data']
    }
    try{
        let resp = await axios(options)
        return resp.data
    } catch(e){
        console.log(e);
    }
}
