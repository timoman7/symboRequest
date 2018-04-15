async function getAnswer(chapter, section, question){
	function parseAnswer(response){
		return response.text();
    }
	let answered = false;
	let answer = await parseAnswer(await fetch(`https://raw.githubusercontent.com/APEXCalculus/APEXCalculus_Source/master/exercises/${chapter}_${section}_ex_${question}.tex`));
	while(!answered){
		console.log('unanswered')
		if(answer != undefined){
			answered = true;
			let parsedAnswer = answer;
			console.log(parsedAnswer)
			return parsedAnswer;
        }
    }
}
async function _submit_(){
	let answer = document.getElementById('displayArea').querySelector('#answer');
	let chap = document.getElementById('inputArea').querySelector('#chapter');
	let sect = document.getElementById('inputArea').querySelector('#section');
	let prob = document.getElementById('inputArea').querySelector('#problem');
	answer.innerHTML = await getAnswer(chap.value, sect.value, prob.value);
	MathJax.Hub.Queue(["Typeset", MathJax.Hub, answer]);
}
window.addEventListener('load',function(){
  let getProblem = document.getElementById('inputArea').querySelector("#getProblemBtn");
  let chap = document.getElementById('inputArea').querySelector('#chapter');
  let sect = document.getElementById('inputArea').querySelector('#section');
	let prob = document.getElementById('inputArea').querySelector('#problem');
	chap.addEventListener('submit', _submit_);
	sect.addEventListener('submit', _submit_);
	prob.addEventListener('submit', _submit_);
  getProblem.addEventListener('click', _submit_);
});
