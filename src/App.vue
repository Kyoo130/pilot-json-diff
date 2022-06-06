<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view
        :prev="prev"
        :current="current"
        :resultJson="resultJson"
        @prevObj="prev = $event"
        @currentObj="current = $event"
        @addJsonFB="addJsonFB(prev, current)"
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
      prev: `{"name":"hello","age":20}`,
      current: `{"name":"world","age":20}`,
      resultJson: [],
    };
  },
  methods: {
    compareJson(o1, o2) {
      let jsonObj = {};
      for (let i in o2) {
        // eslint-disable-next-line no-prototype-builtins
        if (!o1.hasOwnProperty(i) || o2[i] !== o1[i]) {
          if (
            !Array.isArray(o2[i]) ||
            !(JSON.stringify(o2[i]) === JSON.stringify(o1[i]))
          ) {
            jsonObj[i] = o2[i];
          }
        }
      }
      return jsonObj;
    },
    async addJsonFB(o1, o2) {
      try {
        if (o1 === o2) {
          alert(`"JSON1"과 "JSON2"에 입력된 데이터가 같습니다.`);
          return;
        }

        let json1 = { ...JSON.parse(o1) };
        let json2 = { ...JSON.parse(o2) };
        let docData = {
          resultJson: [json1, json2],
        };

        await firestore
          .collection("compare")
          .add(docData)
          .then((doc) => {
            let obj1 = this.compareJson(json1, json2);
            let obj2 = this.compareJson(json2, json1);
            this.resultJson = [obj1, obj2];
            this.$router.push(`/diff/${doc.id}`);
          })
          .catch((error) => {
            console.log("Error", error);
          });
      } catch (err) {
        alert(
          `JSON 형태의 데이터만 "비교하기"가 가능합니다.\n( error: ${err.message} )`
        );
        console.log("err", err);
      }
    },
    async getJsonFB() {
      const jsonDB = firestore.collection("compare");
      await jsonDB
        .doc(this.$route.params.id)
        .get()
        .then((doc) => {
          if (doc.data() === undefined) {
            console.log("컬렉션에 데이터가 존재하지 않습니다.", doc.data());
            this.$router.replace("/404");
            return;
          }
          let obj1 = this.compareJson(
            doc.data().resultJson[0],
            doc.data().resultJson[1]
          );
          let obj2 = this.compareJson(
            doc.data().resultJson[1],
            doc.data().resultJson[0]
          );
          this.resultJson = [obj1, obj2];
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
