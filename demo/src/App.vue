<template>
  <v-app id="app">
    <v-toolbar app class="teal white--text">
      <v-toolbar-title>
        <span class="white--text">{<i class="fas fa-table white--text" style="font-size:16px;">
          </i>}
        </span>
        vue-json-to-csv
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <i class="fab fa-github white--text" style="font-size:25px;"></i>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout class="text-xs-left pa-3" row wrap>
      <v-flex xs12 class="pb-2">
        <div>
          <span style="font-size:24px;border-bottom:1px solid #2c3e50;">
            vue-json-to-csv
          </span>
        </div>
        <div style="font-size:22px" class="font-weight--300">
          A Vue.js 2 component for transform and download a json in csv format
        </div>
      </v-flex>
      <v-flex xs12 class="pb-2">
        <div class="title">Getting started</div>
      </v-flex>
      <v-flex xs12 class="pb-2">
        <pre><code>npm install --save vue-json-to-csv</code></pre>
        or use <pre><code>dist/vue-json-to-csv.min.js</code></pre>
      </v-flex>
      <v-flex xs12 class="pb-2 pt-2">
        <div class="title">Usage</div>
      </v-flex>
      <v-flex xs12 class="pb-2">
        <span>For vue-cli user:</span><br/>
        <pre><code>import VueJsonToCsv from 'vue-json-to-csv'</code></pre>
      </v-flex>
      <v-flex xs12 class="pb-2">
        <span>For standalone use:</span><br/>
        <pre><code>&lt;script src="vue.min.js">&lt;/script>
   &lt;script src="dist/vue-json-to-csv.min.js">&lt;/script>
   &lt;script type="text/javascript">
     Vue.use(VueJsonToCsv);
   &lt;/script></code></pre>
      </v-flex>
      <v-flex xs12 class="pb-2 pt-2">
        <div class="title">Examples</div>
      </v-flex>
      <v-flex xs12>
        <div class="headline blue-grey darken-3 font-weight--300">Simple example</div>
        <div v-html="example1" class="example__code mb-2"></div>
        <span class="subheading">Result</span>
        <div>
          <vue-json-to-csv :json-data="[
              { name: 'Joe', surname: 'Roe' },
              { name: 'John', surname: 'Doe' }
            ]">
          </vue-json-to-csv>
        </div>
      </v-flex>
      <v-flex xs12 class="pt-4">
        <div class="headline blue-grey darken-3 font-weight--300">
          Selected labels example
        </div>
        <div class="caption">
          Returns a csv including only the name key values with the configured title
        </div>
        <div v-html="example2" class="example__code mb-2"></div>
        <span class="subheading">Result</span>
        <div>
          <vue-json-to-csv :json-data="[
              { name: 'Joe', surname: 'Roe' },
              { name: 'John', surname: 'Doe' }
            ]" :labels=" {
              name: { title: 'First name' }
            }">
            <button class="teal button__custom">
              <b>Download with only selected labels</b>
            </button>
          </vue-json-to-csv>
        </div>
      </v-flex>
      <v-flex xs12 class="pt-4">
        <div class="headline blue-grey darken-3 font-weight--300">
          Selected csv title example
        </div>
        <div class="caption">
          Returns a csv with title according to the csv-title prop
        </div>
        <div v-html="example3" class="example__code mb-2"></div>
        <span class="subheading">Result</span>
        <div>
          <vue-json-to-csv :json-data="[
              { name: 'Joe', surname: 'Roe' },
              { name: 'John', surname: 'Doe' }
            ]" :csv-title="'My csv title'">
            <button class="teal button__custom">
              <b>Download with custom title</b>
            </button>
          </vue-json-to-csv>
        </div>
      </v-flex>
      <v-flex xs12 class="pt-4">
        <div class="headline blue-grey darken-3 font-weight--300">
          Selected csv without labels example
        </div>
        <div class="caption">Returns a csv without displaying the labels</div>
        <div v-html="example4" class="example__code mb-2"></div>
        <span class="subheading">Result</span>
        <div>
          <vue-json-to-csv :json-data="[
              { name: 'Joe', surname: 'Roe' },
              { name: 'John', surname: 'Doe' }
            ]" :show-labels="false">
            <button class="teal button__custom">
              <b>Download without labels</b>
            </button>
          </vue-json-to-csv>
        </div>
      </v-flex>
      <v-flex xs12 class="pt-4">
        <div class="headline blue-grey darken-3 font-weight--300">Advanced example</div>
        <div v-html="example5" class="example__code mb-2"></div>
        <span class="subheading">Result</span>
        <div>
          <vue-json-to-csv :json-data="[
              { name: 'John', surname: 'Doe', age: 20, salary: 20.000, hours: 37.4 },
              { name: 'John', surname: 'Roe', age: 40, salary: 40.000, hours: 35.2 },
              { name: 'Jane', surname: 'Woe', age: 50, salary: 52.000, hours: 30.4 }
            ]"
            :labels="{
              name: { title: 'First name' },
              salary: { title: 'Annual salary' },
              hours: { title: 'Hours/week' }
            }"
            :csv-title="'My_Custom_CSV'"
            @success="val => handleSuccess(val)"
            @error="val => handleError(val)">
            <button class="teal button__custom">
              <b>Download my advanced example</b>
            </button>
          </vue-json-to-csv>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import VueJsonToCsv from 'vue-json-to-csv'

export default {
  name: 'App',
  components: {
    VueJsonToCsv
  },
  data () {
    return {
      standalone: `&lt;script src="vue.min.js">&lt;/script>
  &lt;script src="dist/vue-json-to-csv.min.js">&lt;/script>
  &lt;script type="text/javascript">
    Vue.use(VueJsonToCsv);
 &lt;/script>`,
      example1: `<span>&lt;vue-json-to-csv <br>
        &nbsp;&nbsp;&nbsp;&nbsp;:json-data="[
          { name: 'Joe', surname: 'Roe' },
          { name: 'John', surname: 'Doe' }
        ]"<br>
      &lt;/vue-json-to-csv></span>`,
      example2: `<span>&lt;vue-json-to-csv <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;:json-data="[
          { name: 'Joe', surname: 'Roe' },
          { name: 'John', surname: 'Doe' } <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;:labels="{
            name:{ title: 'First name' }
          }" <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="teal button__custom"> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b>Download with only selected labels&lt;/b> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button> <br/>
      &lt;/vue-json-to-csv></span>`,
      example3: `<span>&lt;vue-json-to-csv <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;:json-data="[
          { name: 'Joe', surname: 'Roe' },
          { name: 'John', surname: 'Doe' } <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;:csv-title="'My csv title'" <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="teal button__custom"> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b>Download with custom title&lt;/b> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button> <br/>
      &lt;/vue-json-to-csv></span>`,
      example4: `<span>&lt;vue-json-to-csv <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;:json-data="[
          { name: 'Joe', surname: 'Roe' },
          { name: 'John', surname: 'Doe' } <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;:show-labels="false" <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="teal button__custom"> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b>Download without labels&lt;/b> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button> <br/>
      &lt;/vue-json-to-csv></span>`,
      example5: `<span>&lt;vue-json-to-csv <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;:json-data="[
          { name: 'Joe', surname: 'Roe' },
          { name: 'John', surname: 'Doe' }
        ]"<br>
        &nbsp;&nbsp;&nbsp;&nbsp;:labels="{
          name: { title: 'First name' },
          salary: { title: 'Annual salary' },
          hours: { title: 'Hours/week' }
        }" <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;:csv-title="'My_Custom_CSV'" <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;@success="val => handleSuccess(val)" <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;@error="val => handleError(val)"> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="teal button__custom"> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;b>My custom button&lt;/b> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button> <br/>
      &lt;/vue-json-to-csv></span>`
    }
  },
  methods: {
    handleSuccess (msg) {
      console.log(msg)
    },
    handleError (err) {
      console.log(err)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 55px;
}
.example__code {
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 3px;
  padding: 4px;
}
.button__custom{
  color: white;
  padding: 8px;
  border-radius: 5px;
}
.headline {
  color: white;
  border-radius: 5px;
  padding: 4px;
  margin-bottom: 4px;
}
.font-weight--300 {
  font-weight: 300;
}
</style>
