import HelloWorld from "./HelloWorld.html";

const app = new HelloWorld({
  target: document.getElementById("root"),
  data: {
    name: "Svelte"
  }
});
