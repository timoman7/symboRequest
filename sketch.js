function setup(){

}
let KeyObj = {
  key1: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgyODUyNTMsImlzcyI6Imh0dHBzOi8vd3d3LnN5bWJvbGFiLmNvbSJ9.GvJLzgOBEAraTrpsB6VaybyJ31z-_tX6OjrCd2byyyo",
  key2: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgxMjEwMzYsImlzcyI6Imh0dHBzOi8vd3d3LnN5bWJvbGFiLmNvbSJ9.AQn1kG_onvVH0YyUQCAHGvzT3cxPIm9T2DUpygyRt_A",
  key3: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTg2Mjg4OTcsImlzcyI6Imh0dHBzOi8vd3d3LnN5bWJvbGFiLmNvbSJ9.twIFbAleBtFsQIHIWaPhKYll3tbbhzxz2s4YnzqNNAA",
  key4: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjE2NDg0MzcsImlzcyI6Imh0dHBzOi8vd3d3LnN5bWJvbGFiLmNvbSJ9.rghXeuoPVEKbGOawGrDYmycQXCSc_nymxYCCFDL7xbk"
};
function cb(e){
  console.log(e)
}
function bossify(str){
  let escapeValues = {
    '%': '25',
    '/': '2F',
    '?': '3F',
    '&': '26',
    ';': '3B',
    ':': '3A',
    '@': '40',
    ',': '2C',
    '$': '24',
    '=': '3D',
    ' ': '20',
    '"': '22',
    '+': '2B',
    '#': '23',
    '*': '2A',
    '<': '3C',
    '>': '3E',
    '{': '7B',
    '}': '7D',
    '|': '7C',
    '[': '5B',
    ']': '5D',
    '^': '5E',
    '\\': '5C',
    '`': '60',
    '(': '28',
    ')': '29'
  };
  let newStr="";
  newStr=str;
  for(let evKey in escapeValues){
    let ev = escapeValues[evKey];
    newStr=newStr.replace(new RegExp('\\'+evKey,'g'),'%'+ev);
  }
  return newStr;
}
$.ajaxSetup({
  // url:"https://www.symbolab.com/solver/limit-calculator/%5Clim_%7Bx%5Cto-2%5E%7B-%7D%7D%5Cleft(f%5Cleft(x%5Cright)%5Cright)",
  // isLocal:false,
  // global:true,
  // type:"GET",
  // contentType:"application/x-www-form-urlencoded; charset=UTF-8",
  // processData:true,
  // async:true,
  // accepts:{
  //   xml:"application/xml, text/xml",
  //   html:"text/html",
  //   text:"text/plain",
  //   json:"application/json, text/javascript",
  //   "*":"*/*",
  //   script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  // },
  // contents:{
  //   xml: new RegExp(/xml/),
  //   html: new RegExp(/html/),
  //   json: new RegExp(/json/),
  //   script: new RegExp(/javascript|ecmascript/)
  // },
  // responseFields:{
  //   xml:"responseXML",
  //   text:"responseText"
  // },
  // converters:{
  //   "* text": String,
  //   "text json": $.parseJSON,
  //   "text script": function(a){$.globalEval(a); return a;},
  //   "text xml": $.parseXML,
  //   "text html": true
  // },
  // flatOptions:{
  //   context:true,
  //   url:true
  // },
  // jsonp:"callback",
  // jsonpCallback: function(e){
  //   console.log(e)
  // }
});
function urlWithParams(url, params){
  let rv = url;
  let pCount = 0;
  for(let ind in params){
    rv += (pCount > 0 ? "&" : "?") + ind + "=" + (ind=="query" ? encodeURI(params[ind]) : params[ind]);
    pCount++;
  }
  return rv;
}
function getFile(theURL, type, callback, tableName)
{
	/*
	* Original jQuery.ajax mid - CROSS DOMAIN AJAX
	* @author James Padolsey (http://james.padolsey.com)
	* @updated 12-JAN-10
	* @info http://james.padolsey.com/javascript/cross-domain-requests-with-jquery/
	* source: https://raw.github.com/padolsey/jquery.fn/master/cross-domain-ajax/jquery.xdomainajax.js
	*
	* This version adds a fix for correctly handling format:xml
	*/

  jQuery.ajaxSetup({
      headers:{
          "authorization": `Bearer ${KeyObj.key4}`,
      }
  });
	jQuery.ajax = (function(_ajax)
	{
		var protocol = location.protocol,
			hostname = location.hostname,
			exRegex = RegExp(protocol + '//' + hostname),
			YQL = 'http' + (/^https/.test(protocol)?'s':'') + '://query.yahooapis.com/v1/public/yql?callback=?',
			query = `select * from html where url="{URL}" and xpath="*" and authorization="Bearer ${KeyObj.key4}"`;

		function isExternal(url)
		{
			return !exRegex.test(url) && /:\/\//.test(url);
		}

		return function(o)
		{
			var url = o.url;
			if (o.dataType == 'xml')   // @rickdog - fix for XML
				query = `select * from ${tableName||'json'} where url='{URL}' AND authorization='Bearer ${KeyObj.key4}'`;	// XML
			if ( /get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url) )
			{
				// Manipulate options so that JSONP-x request is made to YQL
				o.url = YQL;
				o.dataType = 'json';
				o.data = {
					q: query.replace('{URL}', url + (o.data ? (/\?/.test(url) ? '&' : '?') + jQuery.param(o.data) : '')),
					format: 'json',
          diagnostics: true,
          env:'store://datatables.org/alltableswithkeys'
				};

				// Since it's a JSONP request
				// complete === success
				if (!o.success && o.complete) {
					o.success = o.complete;
					delete o.complete;
				}

				o.success = (function(_success)
				{
					return function(data)
					{
						if (_success) {
							// Fake XHR callback.
							_success.call(this, {
								// YQL screws with <script>s, Get rid of them
								responseText: data
							}, 'success');
						}
					};
				})(o.success);
			}
			return _ajax.apply(this, arguments); // not special, use base Jquery ajax
		};
	})(jQuery.ajax);


	return $.ajax({
		url: theURL,
		type: 'GET',
		dataType: type,
		success: function(res) {
			// var text = res.responseText;
			// .. then you can manipulate your text as you wish
			callback ? callback(res) : undefined;
		}
	})
};
function getStuff(_query, outputTo) {
  var myParams = {
  	language: "en",
  	query: _query,
  	subscribed: false,
  	userId: "fe"
  };
  let newUrl = urlWithParams("https://www.symbolab.com/api/steps", myParams);
  //console.log(SYMBOLAB.params,"\n",readCookie("sy.pub.token"))
  // function setHeader(b) {
  //   b.setRequestHeader("Authorization", "Bearer " + KeyObj.key3);
  // }
  // $.ajaxSetup({
  //   headers:{
  //     "Authorization": "Bearer " + KeyObj.key3,
  //     "x-requested-with": "XMLHttpRequest",
  //     "method": "GET"
  //   }
  // });
  //   let AjaxStuff = {
  //   type: "GET",
  //   method: "GET",
  //   dataType: "jsonp",
  //   async: true,
  //   crossDomain: true,
  //   contentType: "application/javascript",
  //   url: "https://www.symbolab.com/api/steps",
  //   beforeSend: setHeader,
  //   // headers: {
  //   //   "Authorization": "Bearer " + KeyObj.key1
  //   // },
  //   data: myParams,
  //   error: function(b) {
	//     console.log("Page machine broke", b)
  //   },
  //   success: function(e) {
	//     //window.MyStuff = e;
	//     //outputTo = e;
	//     //return e
  //     console.log(e);
  //   },
  //   jsonp: 'console.log',
  //   xhrFields: {
  //     withCredentials: true
  //   },
  //   traditional: true,
  //   Authorization: "Bearer " + KeyObj.key3,
  //   //jsonp: "cb"
  // };
  jQuery.ajaxSetup({
      headers:{
          "authorization": `Bearer ${KeyObj.key4}`,
      }
  });
  console.log(bossify(newUrl))
  let _request;
  _request = getFile(bossify(newUrl).replace('https%3A%2F%2F','https://'), 'xml',function(r){_request=r;});
  // httpGet('https://www.symbolab.com/api/steps','json',{
  // 	language: 'en',
  // 	query: _query,
  // 	subscribed: false,
  // 	userId: 'fe'
  // },function(r){
  //   console.log(r);
  //   _request = r;
  // },function(e){
  //   console.log("Error:",e);
  // });
  //console.log(AjaxStuff, newUrl)
  // let _request = $.ajax(AjaxStuff);
  return _request
};
// \\lim_{x\\to-2^{-}}\\left(f\\left(x\\right)\\right)
//abc = getFile('https://www.symbolab.com/api/steps?language=en%26query=%5Clim_%7Bx%5Cto-2%5E%7B-%7D%7D%5Cleft(f%5Cleft(x%5Cright)%5Cright)%26subscribed=false%26userId=fe','xml',function(e){console.log(e)})
