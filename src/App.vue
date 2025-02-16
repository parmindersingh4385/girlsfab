<!-- <template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
  //
</script> -->

<!-- <template>
    <v-app id="inspire">
        <v-app-bar>
            <v-app-bar-title>My store</v-app-bar-title>
        </v-app-bar>

        <v-main class="bg-grey-lighten-2">
            <v-container>
                <v-row>
                    <template v-for="n in 4" :key="n">
                        <v-col class="mt-2" cols="12">
                            <strong>Category {{ n }}</strong>
                        </v-col>

                        <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
                            <v-sheet height="150"></v-sheet>
                        </v-col>
                    </template>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from "vue";
const drawer = ref(null);
</script> -->

<script setup>
/* const items = [
    { icon: "mdi-home", label: "Home" },
    { icon: "mdi-account", label: "Profile" },
    { icon: "mdi-email", label: "Settings" },
    { icon: "mdi-email", label: "Messages" },
    { icon: "mdi-home", label: "Home" },
    { icon: "mdi-account", label: "Profile" },
    { icon: "mdi-email", label: "Settings" },
    { icon: "mdi-email", label: "Messages" },
    { icon: "mdi-home", label: "Home" },
    { icon: "mdi-account", label: "Profile" },
    { icon: "mdi-email", label: "Settings" },
    { icon: "mdi-email", label: "Messages" },
]; */
</script>

<template>
    <v-app>
        <v-app-bar>
            <!-- Logo or Title -->
            <v-app-bar-title>My store</v-app-bar-title>
            <!-- Spacer to push items to the right -->
            <v-spacer />
            <!-- Navigation Links -->
            <v-btn to="/apparels">Apparels</v-btn>
            <v-btn to="/bags">Bags</v-btn>
            <v-btn to="/shoes">Shoes</v-btn>

            <!-- Dropdown Menu -->
            <!-- <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">More</v-btn>
                </template>
                <v-list>
                    <v-list-item to="/services">
                        <v-list-item-title>Services</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/pricing">
                        <v-list-item-title>Pricing</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->

            <!-- Notifications Icon -->
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>

            <!-- Profile Avatar -->
            <v-menu>
                <template #activator="{ props }">
                    <v-avatar v-bind="props" size="36">
                        <img
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            alt="User"
                        />
                    </v-avatar>
                </template>
                <v-list>
                    <v-list-item to="/profile">
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/settings">
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view />
                <!-- <v-slide-group show-arrows>
                    <v-slide-group-item v-for="n in 15" :key="n">
                        <v-sheet
                            class="circle-layout d-flex flex-column justify-center align-center"
                        >
                            <v-icon size="100">
                                <v-img
                                    src="https://asset20.ckassets.com/resources/image/category/fashion-offers-4199-1674024044.png"
                                    alt="Profile"
                                    width="100"
                                    height="100"
                                    rounded="circle"
                                />
                            </v-icon>
                        </v-sheet>
                    </v-slide-group-item>
                </v-slide-group> -->
                <!-- <v-row justify="center">
                    <v-col v-for="(item, i) in items" :key="i" cols="auto">
                        <v-sheet
                            class="circle-layout d-flex flex-column justify-center align-center"
                        >
                            <v-icon size="100">
                                <v-img
                                    src="https://randomuser.me/api/portraits/men/45.jpg"
                                    alt="Profile"
                                    width="100"
                                    height="100"
                                    rounded="circle"
                                />
                            </v-icon>
                        </v-sheet>
                    </v-col>
                </v-row> -->
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>
.circle-layout {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #eee;
    text-align: center;
    padding: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}
</style>
