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
let getProblem = document.getElementById('inputArea').querySelector("#getProblemBtn");
getProblem.addEventListener('click', async function(){
  let answer = document.getElementById('displayArea').querySelector('#answer');
  let chap = document.getElementById('inputArea').querySelector('#chapter');
  let sect = document.getElementById('inputArea').querySelector('#section');
  let prob = document.getElementById('inputArea').querySelector('#problem');
  answer.innerHTML = await getAnswer(chap.value, sect.value, prob.value);
});
