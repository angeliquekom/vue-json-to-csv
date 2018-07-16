module.exports = {
  methods: {
    $_createCsvLabelsConf (arr) {
      let conf = {}

      arr.map(function (m, i) {
        conf[m] = { title: m }
      })

      return conf
    },
    $_createCsvLabels (labels) {
      let row = ''
      var c = ''

      try {
        Object.keys(labels).map(function (m, i) {
          row += '"' + labels[m].title + '",'
        })

        row = row.slice(0, -1)

        c += row + '\r\n'
      } catch (err) {
        c = 'error'
      } finally {
        return c
      }
    },
    $_createCsvContent (arr, labels) {
      let row = ''
      var c = ''
      let type = ''

      try {
        arr.map(function (m, i) {
          row = ''

          Object.keys(labels).map(function (k, s) {
            type = typeof m[k]
            if (type === 'number' || type === 'float') {
              row += m[k] + ','
            } else {
              row += '"' + m[k] + '",'
            }
          })

          row = row.slice(0, -1)

          c += row + '\r\n'
        })
      } catch (err) {
        c = 'error'
      } finally {
        return c
      }
    },
    $_downloadCsv (uid, csv, title) {
      try {
        let uri = 'data:text/csv;charset=utf-8,' + escape(csv)

        let link = document.createElement('a')

        link.id = 'csv-' + uid
        link.href = uri

        document.body.appendChild(link)

        document.getElementById(link.id).style.visibility = 'hidden'
        document.getElementById(link.id).download = title + '.csv'

        document.body.appendChild(link)
        document.getElementById(link.id).click()

        setTimeout(function () {
          document.body.removeChild(link)
        })
        return true
      } catch (err) {
        return false
      }
    }
  }
}
