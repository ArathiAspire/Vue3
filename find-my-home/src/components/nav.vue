<template>
    <header>
        <nav class="navbar">
            <div class="logo">FindMyHome</div>
            <div class="nav-buttons">
                <button class="nav-button" @click="signInShow = !signInShow">Sign In</button>
                <button class="nav-button">Add Home</button>
            </div>
        </nav>
    </header>
    <SignIn v-show="signInShow"/>

</template>

<script>
import SignIn from './SignIn.vue';
export default {
    name: 'navBar',
    components:{
        SignIn
    },
    data() {
        return {
            signInShow: false

        }
    }

}
</script>

<style scoped>
header {
    background-color: #fafafc;
    color: #333;
    padding: 10px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5em;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
}

.nav-links li {
    margin-right: 20px;
}

.nav-links a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

.nav-links a:hover {
    color: #446670;
    /* Change to your desired hover color */
}



.nav-button {
    padding: 10px 20px;
    margin-left: 10px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    background-color: #143ba8;
    color: #f1eeee;
}

.nav-button:hover {
    background-color: #979ce6;
    /* Your button hover color */
    color: #000000;
    /* Your button hover text color */
}

/* Adjust button styles for Sign In and Add Home separately if needed */
.nav-button:nth-child(2) {
    background-color: #143ba8;
    /* Green for Add Home */
}

.nav-button:nth-child(2):hover {
    background-color: #979ce6;
    /* Darker green on hover for Add Home */
    color: #000000;
}

.nav-buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
}
</style>