<template>
    <div class="home-page">
        <div class="background-image"></div>
        <div class="content">
            <h1>Welcome to FindMyHome</h1>
            <p class="discription">FindMyHome is a web application that allows users to search for houses, apart
                ments or rooms in various locations around the world. The main goal of this project is
                to provide an easy and convenient way for people looking for accommodation to find their dream home.</p>

            <router-link to="/explore" class="explore-button">Explore Now</router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: 'HomePage',

}
</script>

<style scoped>
.home-page {
    position: relative;
    height: 100vh;
    overflow: hidden;
}
.discription{
    padding: 2rem;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/src/assets/home.jpg');
    background-size: cover;
    background-position: center;
    filter: brightness(0.6);
    /* Adjust the brightness as needed */
}

.content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
    text-align: center;
}

h1 {
    font-size: 3em;
}

p {
    margin-top: 20px;
    font-size: 1.2em;
}

.explore-button {
    display: inline-block;
    margin-top: 30px;
    padding: 10px 20px;
    font-size: 1.2em;
    text-decoration: none;
    color: #fff;
    background-color: #ffcc00;
    /* Your button color */
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
}

.explore-button:hover {
    background-color: #e0b300;
    /* Your button hover color */
}
</style>