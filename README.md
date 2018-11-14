# vue-json-to-csv

A Vue.js 2 component to transform and download a json in csv format [https://angeliquekom.github.io/vue-json-to-csv.github.io/](https://angeliquekom.github.io/vue-json-to-csv.github.io/)

## Installation

`npm install --save vue-json-to-csv` or use `dist/vue-json-to-csv.min.js`

## Demo

[Demo](https://angeliquekom.github.io/vue-json-to-csv.github.io/)

## Usage

For vue-cli user:

```javascript
import VueJsonToCsv from 'vue-json-to-csv'
```

For standalone usage:

```html
<script src="vue.min.js"></script>
<!-- must place this line after vue.js -->
<script src="dist/vue-json-to-csv.min.js"></script>
<script type="text/javascript">
  Vue.use(VueJsonToCsv);
</script>
```

## Sample 1 (simple use)

Simple usage: will generate a default button. The csv will include all the labels (name, surname) and the data

```html
<vue-json-to-csv :json-data="[
    { name: 'Joe', surname: 'Roe' },
    { name: 'John', surname: 'Doe' }
  ]">
</vue-json-to-csv>
```
#### Result csv

csv.csv

| name   |  surname |
|----------|------|
| Joe | Roe |
| John | Doe |

## Sample 2 (filter labels)

Selected labels with custom csv title: will generate a custom button as defined at the slot. The csv will include only the "name" label with the "First name" title and the relevant data.

```html
<vue-json-to-csv :json-data="[
    { name: 'Joe', surname: 'Roe' },
    { name: 'John', surname: 'Doe' }
  ]"
  :labels="{ name: { title: 'First name' } }"
  :csv-title="My_CSV"
  >
  <button>
    <b>My custom button</b>
  </button>
</vue-json-to-csv>
```

#### Result csv

My_CSV.csv

| First name |
|----------|
| Joe |
| John |

## Sample 3 (handle success/error, custom button, configure labels)

Handle success/error with custom button, returns specific labels with custom title: use of custom methods on success or error.

```html
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
  @success="val => handleSuccess(val)"
  @error="val => handleError(val)">
  <button>
    <b>My custom button</b>
  </button>
</vue-json-to-csv>
```
## Configuration

| Prop   |  Details |
|----------|------|
| json-data | Array of the objects which contain the data to display (required). Each key will be a different column at the csv. All the objects should contain the same keys. If empty array an error will be returned. Example: <code>[ { name: 'Joe', surname: 'Roe' }, { name: 'Joe', surname: 'Doe' }]</code>|
| show-labels | Boolean. If false the first row of the csv will not contain the labels names. |
| labels | An object of the keys of the labels will be displayed. Use to filter the keys to display and modify their label title. For each key we provide the title of the key to displayed. If not defined all the keys will be parsed. Example: <code>{ name: { title: 'First name' } }</code>|
| csv-title | String. The title of the generated csv. Default: 'csv' |
| separator | String. The separator of the columns. Default: ',' |
| @update:error | Will be triggered in case of an empty json array, if the labels object has not children or any parsing issue |
| @update:success| Will be triggered in case of a successful csv creation |
