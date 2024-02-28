<template>
    <div class="card">
        <div id="card-header">
            <slot name="header"></slot>
        </div>
        <div id="card-content">
            <slot>Default Card</slot>
        </div>
        <div id="card-footer">
            <slot name="footer"></slot>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['cardContent']

}
</script>

<style scoped>
/* Basic Card Styling */
.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* overflow: hidden; */
    transition: transform 0.3s ease-in-out;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
}

.card:hover {
    transform: scale(1.05);
    cursor: pointer;
}

/* Card Header */
.card-header {
    padding: 16px;
    background-color: #3498db;
    color: #fff;
    border-bottom: 1px solid #eee;
}

/* Card Body */
.card-body {
    padding: 16px;
}

/* Card Image */
.card-img {
    width: 100%;
    height: auto;
}

/* Card Title */
.card-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 8px;
}

/* Card Text */
.card-text {
    font-size: 1em;
    color: #555;
}

/* Card Link */
.card-link {
    display: block;
    margin-top: 16px;
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
}

.card-link:hover {
    text-decoration: underline;
}
</style>