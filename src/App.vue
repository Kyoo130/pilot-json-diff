<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view
        :json1="json1"
        :json2="json2"
        :resultJson="resultJson"
        @prevObj="json1 = $event"
        @currentObj="json2 = $event"
        @addJsonFB="addJsonFB(json1, json2)"
        :getJsonFB="getJsonFB"
      />
    </main>
  </div>
</template>

<script>
import "@/static/css/reset.css";
import { Header } from "@/components";
import { firestore } from "@/firebase";

export default {
  name: "App",
  data() {
    return {
      json1: { name: "hello", age: 20 },
      json2: { name: "world", age: 20 },
      resultJson: [],
    };
  },
  methods: {
    compareJson(o1, o2) {
      Object.keys(o2).reduce((diff, key) => {
        if (o1[key] === o2[key]) {
          return diff;
        }
        return (this.resultJson = [
          {
            ...diff,
            [key]: o1[key],
          },
          {
            ...diff,
            [key]: o2[key],
          },
        ]);
      }, {});
    },
    async addJsonFB(o1, o2) {
      let docData = {
        resultJson: [{ ...o1 }, { ...o2 }],
      };
      await firestore
        .collection("data")
        .add(docData)
        .then((doc) => {
          this.compareJson(o1, o2);
          this.$router.push(`/diff/${doc.id}`)
        });
    },
    async getJsonFB() {
      const jsonDB = firestore.collection("data");
      await jsonDB
        .doc(this.$route.params.id)
        .get()
        .then((doc) => {
          if (doc.data() === undefined) {
            console.log("컬렉션에 데이터가 존재하지 않습니다.", doc.data());
            this.$router.replace("/404");
            return;
          }
          let obj1 = doc.data().resultJson[0];
          let obj2 = doc.data().resultJson[1];
          this.compareJson(obj1, obj2);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
  },
  components: { Header },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181818;
}

.submit-btn {
  display: block;
  width: 25%;
  border: none;
  border-radius: 5px;
  background: #bdbdbd;
  padding: 0.5rem 0;
  margin: 0 auto;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  transition: 400ms;
  cursor: pointer;
}

.submit-btn:hover {
  background: #ff6372;
  color: #fff;
}
</style>
