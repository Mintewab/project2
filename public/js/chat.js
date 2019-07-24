
$(document).ready(function(){ 
    $("#message").keyup(function(event){
        if(event.keyCode == 32){
            $("input").val($("input").val()+' ');
        }; 
        if(event.keyCode == 65){
            $("input").val($("input").val()+'a');
        }; 
        if(event.keyCode == 87){
            $("input").val($("input").val()+'w');
        }; 
        if(event.keyCode == 68){
            $("input").val($("input").val()+'d');
        }; 
        if(event.keyCode == 83){
            $("input").val($("input").val()+'s');
        }; 
});
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});

function clientConnect(){
  var socket = io();

  var message = $("#message1");
  var send_message = $("#send_message1");
  var displayChat = $("#displayChat1");



   send_message.click(function(event){
       event.preventDefault();
     //socket.emit("add_username", {username: "paul" });
     
        socket.emit("send_message", {message: message.val().trim(), username: localStorage.getItem("username")});
      });
      socket.on("receive_message", (data) =>{
        console.log(data)
        displayChat.append("<p class='message'>" +data.username + ":" + data.message +"</p>");
    }); 
  };
  
  clientConnect();
  

 