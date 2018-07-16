# vue-json-to-csv

A Vue.js 2 component to transform and download a json in csv format

## Installation

`npm install --save vue-json-to-csv` or use `dist/vue-json-to-csv.min.js`

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

## Sample 1

Simple usage: will generate a default button. The csv will include all the labels (name, surname) and the data

```html
<vue-json-to-csv :json-data="[
    { name: 'Joe', surname: 'Roe' },
    { name: 'John', surname: 'Doe' }
  ]">
</vue-json-to-csv>
```
#### Result csv

| name   |  surname |
|----------|------|
| Joe | Roe |
| John | Doe |

## Sample 2

Selected labels with custom csv title: will generate a custom button as defined at the slot. The csv will include only the "name" label with the "First name" title and the relevant data.

```html
<vue-json-to-csv :json-data="[
    { name: 'Joe', surname: 'Roe' },
    { name: 'John', surname: 'Doe' }
  ]"
  :labels="{ name:{ title: 'First name' } }"
  :csv-title="My_CSV"
  >
</vue-json-to-csv>
```

#### Result csv

| First name |
|----------|
| Joe |
| John |

## Sample 3

Handle success/error: use of custom methods on success or error.

```html
<vue-json-to-csv :json-data="[
    { name: 'Joe', surname: 'Roe' },
    { name: 'Joe', surname: 'Doe' }
  ]"
  @success="val => handleSuccess(val)"
  @error="val => handleError(val)">
</vue-json-to-csv>
```
## Configuration

| Prop   |  Details |
|----------|------|
| json-data | Array of the objects which contain the data to display (required). Each key will be a different column at the csv. All the objects should contain the same keys. If empty array an error will be returned. |
| show-labels | Boolean. If false the first row of the csv will not contain the labels names. |
| labels | An object of the keys of the labels will be displayed. Used only when we don't want to display all the keys. For each key we provide the title of the key to displayed. In case of show-labels=false the title is mandatory. If not defined all the keys will be parsed. |
| :csv-title | String. The title of the generated csv. Default: 'csv' |
| @update:error | Will be triggered in case of an empty json array or if the labels object has not children |
| @update:success| Will be triggered in case of successful csv creation |
