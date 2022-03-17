<template>
    <div class="container">
        <div class="box">
            <dl>
                <dt>Name:</dt>
                <dd>Lea Verou</dd>
                <dt>Email:</dt>
                <dd>lea@verou.com</dd>
                <dd>leaverou@verou.com</dd>
                <dt>Location</dt>
                <dd>Earth</dd>
            </dl>
        </div>
    </div>
</template> 

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    padding: 20px;
    border: 1px solid #29a;

    dt,
    dd {
        display: inline;
    }

    dd {
        margin: 0;
        font-weight: bold;

        & + dt::before {
            content: "\A";
            white-space: pre;
        }

        & + dd::before {
            content: "，";
            white-space: normal;
        }
    }
}
</style>