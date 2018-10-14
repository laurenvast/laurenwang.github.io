var leye = ["￣", "> ", "^","・", "╯", "☆", " ′  ", "T", "͡°", "ʘ", "≧", " ゜", "ˇ", "•͈", " ❛ ", "◉", "´◡", "ఠ", "¬", "ಥ", "눈", "•̀", "⊙", "꒪", "◕", "≖"],
		reye = ["￣", " <", "^","・", "╰", "☆", "｀" , "T", "͡°", "ʘ", "≦", " ゜", "ˇ", "•͈", " ❛ ", "◉", "◡`", "ఠ", "¬", "ಥ", "눈", "•́", "⊙", "꒪", "◕", "≖"],
		mouth = [" _ ", "  。", "□", " ε ", " ͜ʖ", "﹏", "▽", "ω", "=", "∇", "∀", "⌄", "ゝ", "(エ)", " ｪ ", " ‸ ", "︿", "д", "⌓", "⌂", "◞౪◟", "﹃", "ᴗ"],
		lface = ["( ", "( ","( ", "( ", "(＃", "( || ", "(〃", "(* ", "(；", "(❁", "(✧", "(๑", "(｡", "(ﾒ", "ꉂ", "✱"],
		rface = [")", ")", ")", ")", ")", ")", "✿)", "❋)", "｡)"],
		lhand = [" ", "╮", "<", "< ", "o ", "っ", "∩", "ﾍ", "Ψ", "ლ", "┗", "୧", "⸜"],
		rhand = [" ", "╭", "／", " >", " o", "っ", "∩", "ﾉ", "Ψ", "ლ", "┛", "୨", "⸝"];

var parts = ["mouth", "lface", "rface"],
		eyes = ["leye", "reye"],
		hands = ["rhand", "lhand"],
		final = [];

var	started = false,
		copying = false,
		msg = document.querySelector(`span`),
		out = document.querySelector(`div.emoticon`);

document.onkeypress=function(e){
	run();
}

document.getElementById('bg').onclick=function(e){
	if (copying == false){
		run();
	}	
}

function setupSynth() {
    window.polySynth = new Tone.MembraneSynth().toMaster();
}
function boop() {
  if (!window.polySynth) {
    setupSynth();
  }
  window.polySynth.triggerAttackRelease('Gb5', '16n');
}
function setupMsgSynth() {
	window.msgTone = new Tone.MembraneSynth().toMaster();
			msgTone.set({
				"envelope" : {
					"attack" : .1,
					"decay"  : .2,
					"sustain"  : 0,
					"release": 0,
					"attackCurve"  : "sine",
	}
  });
}
function msgboop() {
  if (!window.msgTone) {
    setupMsgSynth();
  }
  window.msgTone.triggerAttackRelease('A5','8n');
  
}

function run(){
			// started = true;
			document.getElementById('prompt').innerHTML = ' ';
			generateEmoticon();
				  boop();

				// started = false;
}

function generateEmoticon() {
	var	eyeIndex = getRndInteger(leye.length-1);
	var	handIndex = getRndInteger(lhand.length-1);

	document.getElementById('final').innerHTML = ' ';
	final.splice(0, 7, lhand[handIndex], lface[getRndInteger(lface.length-1)], leye[eyeIndex], mouth[getRndInteger(mouth.length-1)], reye[eyeIndex], rface[getRndInteger(rface.length-1)], rhand[handIndex]);
	
	document.getElementById('final').innerHTML = final.join('');
	generateColor();
}

function generateColor() {
	var hue = getRndInteger(360);
	var hue2;
	if (hue < 180){
			hue2 = hue + 210;
			} else {
				hue2 = hue - 150;
			}
	var bright = getRndInteger(95, 85);
	var bright2 = getRndInteger(25, 35);
	
	document.body.style.background = 'hsl(' + hue + ', 80%, '+ bright +'%)';
	document.body.style.color = 'hsl(' + hue2 + ', 95%, '+ bright2 +'%)';
}

function getRndInteger(max, min) {
	if (min == null) {
			min = 1;
			}
    return Math.floor(Math.random() * (max - min)) + min;
}

out.addEventListener("click", () => {
	// if (started) {
		copying = true;
				  msgboop();

		const selection = window.getSelection();
		const range = document.createRange();
		range.selectNodeContents(out);
		selection.removeAllRanges();
		selection.addRange(range);

		document.execCommand("copy");
		selection.removeAllRanges();

		msg.classList.toggle("show");

		setTimeout(() => {
			msg.classList.toggle("show");
		}, 800);
		copying = false;
	// }
});