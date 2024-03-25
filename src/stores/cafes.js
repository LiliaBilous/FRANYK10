import { defineStore } from "pinia";

export const useCafeStore = defineStore({
  id: "cafe",
  state: () => ({
    cafes: null,
  }),
  getters: {
    getCafes(state) {
      return state.cafes;
    },
  },
  actions: {
    // simulate a server error
    async fetchCafes() {
      return new Promise((resolve, reject) => {
        console.log("fetchCafesStartRuning");
        setTimeout(async () => {
          if (Math.random() > 0.9) {
            reject(
              new Error(
                "Simulated Server Error: Sorry, the server is not responding right now. Please try refreshing the page or come back later"
              )
            );
          } else {
            const response = await import("../content/cafes.json");
            this.cafes = response.default;
            resolve("foo");
          }
        }, 3000);
      });
    },
  },
});
