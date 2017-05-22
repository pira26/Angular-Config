import msg from "./contents.ts";
import * as $ from "jquery";
import "./style.scss";

// const div = document.createElement("div");
// div.id="message";
// const txtNode = document.createTextNode(msg);
// div.appendChild(txtNode);
// document.body.appendChild(div);

$(() => {
    $("<div id='message'>")
        .text(msg + "!")
        .appendTo("body");
});
