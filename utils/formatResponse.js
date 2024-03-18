const obj={
    HTTP_OK:200
}
function formatResponse({data, msg, statusCode = 200}) {
    const response = { code: statusCode };
    if (data) {
      response.data = data;
    }
    if (msg) {
      response.msg = msg;
    }
    return response;
  }
module.exports=formatResponse