<template>
    <!-- bootstrp form -->
    <form @submit.prevent="login" class="bg-dark text-white my-4 py-4 px-4">
        <h4 class="text-center text-warning container">User Login</h4>
        <!-- userName -->
        <div class="container mb-3">
            <!-- userName -->
            <label for="userName" class="form-label">userName</label>
            <!-- userName input -->
            <input
                type="text"
                class="form-control"
                id="userName"
                placeholder="User Name"
                name="userName"
                v-model="userName"
                required
            />
        </div>
        <!-- password -->
        <div class="container mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    v-model="password"
                    required
                />
                <button
                    class="btn btn-outline-primary"
                    type="button"
                    id="passwordToggle"
                    @click="togglePasswordVisibility"
                >
                    {{ showPassword ? "Hide" : "Show" }}
                </button>
            </div>
            <!-- submit button -->
            <button type="submit" class="container btn btn-success mt-4">
                Login
            </button>
        </div>
    </form>
</template>

<!-- script -->
<script>
export default {
    name: "UserLoginForm",
    // data
    data() {
        return {
            userName: "",
            password: "",
            showPassword: false, // Initially, password is hidden
        };
    },
    // methods
    methods: {
        // toggle password visibility
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword; // Toggle the visibility state
        },
        // login
        login() {
            // Store form values
            const userLoginData = {
                userName: this.userName,
                password: this.password,
            };
            // destructing userName and password
            const { userName, password } = userLoginData;
            // Check if the provided username and password match
            if (this.userName === "kminchelle" && this.password === "0lelplR") {
                // If the match is successful, save the predefined token in local storage
                const token =
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs";
                localStorage.setItem("token", token);

                // Redirect to the home page
                this.$router.push("/");
            } else {
                alert("Login failed. Invalid username or password.");
            }
        },
    },
    // protected routing, after user sign up, user can't visit sign up page
    // mounted() {
    //     let user = localStorage.getItem("token");

    //     // if user exists, redirected to home page
    //     if (user) {
    //         this.$router.push("/");
    //     }
    // },
};
// make a login route in routes.js
</script>
