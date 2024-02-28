<template>
    <div class="modal-overlay">
        <div class="modal-content">
            <slot></slot>
            <hr />
            <button @click="$emit('close')">Close</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalComponent",
    emits: ["close"]

}
</script>

<style scoped>
.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
}
.modal-content{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.479);
    background: #fff;
    display: inline-block;
    justify-self: center;
    position: relative;
    margin: 1rem;
    min-height: 300px;
    min-width: 400px;

}

</style>