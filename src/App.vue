<template>
    <div id="app">
        <div id="editor"><Editor /></div>
        <div id="preview"><Preview /></div>
    </div>
</template>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    /* disable scroling */
    overflow: hidden;
}
#app {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
}
#editor {
    width: 50%;
    height: 100%;
}
#preview {
    width: 50%;
    height: 100%;
}
</style>
