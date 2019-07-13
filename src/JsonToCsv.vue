<template>
  <span v-on:click="handleClick" :id="'json-to-csv-' + _uid">
    <slot>
      <button>
        Download
      </button>
    </slot>
  </span>
</template>

<script>
import helpers from './utils/helpers'

export default {
  mixins: [helpers],
  props: {
    jsonData: {
      type: Array,
      required: true
    },
    csvTitle: {
      type: [String, Number],
      default: 'csv',
      required: false
    },
    showLabels: {
      type: Boolean,
      default: true,
      required: false
    },
    labels: {
      type: Object,
      required: false
    },
    separator: {
      type: String,
      default: ',',
      required: false
    }
  },
  data: () => ({
    csvLabels: null,
    csvData: null
  }),
  destroyed () {
    this.csvLabels = null
    this.csvData = null
  },
  methods: {
    handleClick () {
      let hasErrorEvent = (Object.keys(this._events).indexOf('error') > -1)
      let hasSuccessEvent = (Object.keys(this._events).indexOf('success') > -1)
      if (!this.jsonData.length) {
        this.handleError(`Error: Data are empty`, hasErrorEvent)
        return
      }

      if (this.labels && !Object.keys(this.labels).length) {
        this.handleError(`Error: Labels are empty`, hasErrorEvent)
        return
      }

      let labels = Object.getOwnPropertyNames({ ...this.jsonData[0] })

      let labelsConf = this.labels || this.$_createCsvLabelsConf(labels)

      this.csvLabels = this.showLabels ? this.$_createCsvLabels(labelsConf, this.separator) : ''
      this.csvData = this.$_createCsvContent(this.jsonData, labelsConf, this.separator)

      if (this.csvLabels === 'error' || this.csvData === 'error') {
        this.handleError(`Error: An error occured while parsing the data.`, hasErrorEvent)
        return
      }

      let content = this.csvLabels + this.csvData

      let f = this.$_downloadCsv(`csv-${this._uid}`, content, this.csvTitle)

      if (!f) this.handleError(`An error has occured`, hasErrorEvent)
      if (f && hasSuccessEvent) this.$emit('success', true)

    },
    handleError (msg, hasErrorEvent) {
      throw msg
      if (hasErrorEvent) this.$emit('error', msg)
    }
  }
}
</script>
