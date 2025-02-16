import { defineStore } from "pinia";
import axios from "axios";

export const useBagsStore = defineStore("BagsStore", {
    state: () => ({
        data: [],
    }),
    actions: {
        async fetchBagsData() {
            try {
                const response = await axios.get(
                    `https://mocki.io/v1/ac206f57-d567-4319-b680-75e22ce81228`
                );
                this.data = response.data;
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        },
    },
});
