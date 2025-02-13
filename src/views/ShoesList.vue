<script setup></script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="n in 24" :key="n" cols="4">
                <v-card class="mx-auto" max-width="400">
                    <v-img
                        src="https://m.media-amazon.com/images/I/61FC50d47gL._SY625_.jpg"
                        height="200px"
                        cover
                    ></v-img>

                    <v-card-title>RedTape shoes</v-card-title>

                    <v-card-text>
                        This is a sample description for the image card.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
