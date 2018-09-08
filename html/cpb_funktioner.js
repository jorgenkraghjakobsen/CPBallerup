


function cpbSendBesked(variable) {
  alert("Du har trykket paa knap " + variable ); 
  if (variable == 1) { 
    cpbForbind();
  } else 
  { ws.send(new Uint8Array([0,"hund",2])); 
  }	
} 

var ws ; 


function cpbForbind() {
  ws = new WebSocket("ws://rpi56.local:8000");
  ws.binaryType = "arraybuffer";
  ws.onopen = function() {
    alert("Connection is open");
  };
  ws.onmessage = function (evt) {
    alert("Besked fra microbit");
	var buf = new Uint8Array(evt.data);
  }
}
