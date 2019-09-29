"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (nickname, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (nickname == $("#userInput").val()) {
        var messageElement = `<div class="d-flex justify-content-end">
                <div class="alert alert-info" role="alert">
                    `+ msg + ` <b>@` + nickname + `</b>
                      </div>
                 </div>`;
        $("#messageList").append(messageElement);
    } else {
        messageElement = `<div class="d-flex">
                <div class="alert alert-dark" role="alert">
                    <b>@`+ nickname + ` </b>` + msg + `
                      </div>
                 </div>`;
        $("#messageList").append(messageElement);
    }
    $(".card-body").scrollTop($('.card-body')[0].scrollHeight - $('.card-body')[0].clientHeight);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    $("#messageInput").val('');
    event.preventDefault();
});

document.getElementById("loginButton").addEventListener("click", function (event) {

    var nickName = $("#userInput").val();
    if (nickName != "") {
        $("#login").hide();
        $("#chat").show();
        $(".card-body").scrollTop($('.card-body')[0].scrollHeight - $('.card-body')[0].clientHeight);
    } else {
        alert("Please enter a nickname!");
    }
    event.preventDefault();
});