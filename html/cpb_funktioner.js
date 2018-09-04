


function cpbSendBesked(variable) {
  alert("Du har trykket paa knap " + variable ); 
  if (variable == 1) { 
    cpbForbind();
  } else 
  { ws.send(new Uint8Array([1,2,3])); 
  }	
} 

var ws ; 


function cpbForbind() {
  ws = new WebSocket("ws://localhost:8000");
  ws.binaryType = "arraybuffer";
  ws.onopen = function() {
    alert("Connection is open");
  };
  ws.onmessage = function (evt) {
    alert("Besked fra microbit");
	var buf = new Uint8Array(evt.data);
  }
}
