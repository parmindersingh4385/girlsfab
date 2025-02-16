<script setup>
import { useBagsStore } from "@/stores/BagsStore";
import { onMounted } from "vue";

const bagsStore = useBagsStore();

onMounted(() => {
    bagsStore.fetchBagsData();
});
</script>

<template>
    <v-container>
        <v-row>
            <v-col
                v-for="(item, index) in bagsStore.data"
                :key="index"
                cols="3"
            >
                <v-card
                    class="mx-auto"
                    max-width="400"
                    @click="goToProduct(item.affilate_url)"
                >
                    <v-img :src="item.image_url" height="200px" cover></v-img>

                    <v-card-title>{{ item.title }}</v-card-title>

                    <v-card-text>
                        This is a sample description for the image card.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
