function getStuff(_query, outputTo) {
  myParams = {
  	language: "en",
  	subscribed: false,
  	userId: "fe",
  	query: _query
  };
//console.log(SYMBOLAB.params,"\n",readCookie("sy.pub.token"))
  $.ajax({
    type: "GET",
    async: true,
    url: "/api/steps",
    beforeSend: function(b) {
      b.setRequestHeader("Authorization", "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgxMjEwMzYsImlzcyI6Imh0dHBzOi8vd3d3LnN5bWJvbGFiLmNvbSJ9.AQn1kG_onvVH0YyUQCAHGvzT3cxPIm9T2DUpygyRt_A")
    },
    data: myParams,
    error: function(b) {
	    console.log("Page machine broke")
    },
    success: function(e) {
	    window.MyStuff = e;
	    outputTo = e;
	    return e;
    }
  });
};
