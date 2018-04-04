let KeyObj = {
  key1: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgyODUyNTMsImlzcyI6Imh0dHBzOi8vd3d3LnN5bWJvbGFiLmNvbSJ9.GvJLzgOBEAraTrpsB6VaybyJ31z-_tX6OjrCd2byyyo",
  key2: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgxMjEwMzYsImlzcyI6Imh0dHBzOi8vd3d3LnN5bWJvbGFiLmNvbSJ9.AQn1kG_onvVH0YyUQCAHGvzT3cxPIm9T2DUpygyRt_A",
  key3: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTg2Mjg4OTcsImlzcyI6Imh0dHBzOi8vd3d3LnN5bWJvbGFiLmNvbSJ9.twIFbAleBtFsQIHIWaPhKYll3tbbhzxz2s4YnzqNNAA",
  key4: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjE2NDg0MzcsImlzcyI6Imh0dHBzOi8vd3d3LnN5bWJvbGFiLmNvbSJ9.rghXeuoPVEKbGOawGrDYmycQXCSc_nymxYCCFDL7xbk"
};
function urlWithParams(url, params){
  let rv = url;
  let pCount = 0;
  for(let ind in params){
    rv += (pCount > 0 ? "&" : "?") + ind + "=" + (ind=="query" ? encodeURI(params[ind]) : params[ind]);
    pCount++;
  }
  return rv;
}
function getStuff(_query, outputTo) {
  var myParams = {
  	language: "en",
  	query: _query,
  	subscribed: false,
  	userId: "fe"
  };
  let newUrl = urlWithParams("https://www.symbolab.com/api/steps", myParams);
}
