var accessToken = "53c7b9eae9c74ce1bd397e49b3e19087";
var baseUrl = "https://api.api.ai/v1/";

$(document).ready(function() {
	$("img.microMessage").click(function(event) {
		switchRecognition();
	});
});
var recognition;
function startRecognition() {
	recognition = new webkitSpeechRecognition();
	recognition.onstart = function(event) {
		updateRec();
	};
	recognition.onresult = function(event) {
		var text = "";
	    for (var i = event.resultIndex; i < event.results.length; ++i) {
	    	text += event.results[i][0].transcript;
	    }
	    setInput(text);
		stopRecognition();
	};
	recognition.onend = function() {
		stopRecognition();
	};
	recognition.lang = "fr-FR";
	recognition.start();
}

function stopRecognition() {
	if (recognition) {
		recognition.stop();
		recognition = null;
	}
	updateRec();
}
function switchRecognition() {
	if (recognition) {
		stopRecognition();
	} else {
		startRecognition();
	}
}
function setInput(text) {
	$("input.input__field#message").val(text);
	send();
}
function updateRec() {
	$("img.microMessage").text(recognition ? "Stop" : "Speak");
}
function send() {
	var text = $("input.input__field#message").val();
	getResponseVoice(text);
}

function getResponseVoice(val){
	$('.input__field.input__field--isao').val(val);
	$('.input__field.input__field--isao').attr('value', val);
	$.ajax({
		url: "http://api.tutosweb.dev/message/" + val,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(data) {
			console.log(JSON.stringify(data.message));
			// responsiveVoice.speak(JSON.stringify(data.message), "French Female");
		}
	});
}