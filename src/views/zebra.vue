<template>
    <div class="container">
        <div class="box">
            <pre>
                <code>
while (true) {
    var d = new Date();
    if(d.getDate() == 1 &&
        d.getMonth() == 3) {
        alert("TROLOLOL ");
    }
}
                </code>
             </pre>
        </div>
    </div>
</template> 

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(95, 95, 95);
}

.box {
    padding: .5em; 
    line-height: 1.5;
    background: beige;
    background-size: auto 3em;
    background-origin: content-box;
    background-image: linear-gradient(rgba(0,0,0,.2) 50%, transparent 0);
}
</style>