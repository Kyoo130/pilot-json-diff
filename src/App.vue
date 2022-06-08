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
    <button @click="queryPage">버튼</button>
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
      for (let i in o1) {
        // eslint-disable-next-line no-prototype-builtins
        if (!o2.hasOwnProperty(i) || o1[i] !== o2[i]) {
          if (
            !Array.isArray(o1[i]) ||
            !(JSON.stringify(o1[i]) === JSON.stringify(o2[i]))
          ) {
            jsonObj[i] = o1[i];
          }
        }
      }
      return jsonObj;
    },
    addJsonFB(o1, o2) {
      if (o1 === o2) {
        return alert(`"JSON1"과 "JSON2"에 입력된 데이터가 같습니다.`);
      } else if (typeof o1 || typeof o2 === "object") {
        return alert(`JSON 형태의 데이터만 "비교하기"가 가능합니다.`);
      }

      let json1 = { ...JSON.parse(o1) };
      let json2 = { ...JSON.parse(o2) };
      let docData = {
        resultJson: [json1, json2],
      };
      firestore
        .collection("compare")
        .add(docData)
        .then((doc) => {
          let obj1 = this.compareJson(json1, json2);
          let obj2 = this.compareJson(json2, json1);
          this.resultJson = [obj1, obj2];
          this.$router.push(`/diff/${doc.id}`);
          console.log(doc);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
    getJsonFB() {
      const jsonDB = firestore.collection("compare");
      jsonDB
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
    queryPage() {
      // const jsonDB = firestore.collection("compare");
      console.log("시작");
      const citiesRef = firestore.collection("compare");

      return citiesRef
        .doc(this.$route.params.id)
        .get()
        .then((doc) => {
          console.log("doc", doc);
          const biggerThanSf = citiesRef.orderBy("name").startAt(doc);

          console.log(biggerThanSf);
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
