import helpers from '@/src/utils/helpers'

describe('Helpers.js', () => {
  it('creates the labels conf', () => {

    const labelsKeys = ["name", "surname"]

    let expected = {
      name: {
        title: 'name'
      },
      surname: {
        title: 'surname'
      }
    }

    expect(helpers.methods.$_createCsvLabelsConf(labelsKeys)).toEqual(expected)
  })

  it('renders the total labels', () => {

    const labels = {
      name: {
        title: 'name'
      },
      surname: {
        title: 'surname'
      }
    }

    const separator = ','

    let expected = '"name","surname"' + '\r\n'

    expect(helpers.methods.$_createCsvLabels(labels, separator)).toEqual(expected)
  })

  it('renders the total custom labels', () => {

    const labels = {
      name: {
        title: 'My first name'
      },
      surname: {
        title: 'My last name'
      }
    }

    const separator = ','

    let expected = '"My first name","My last name"' + '\r\n'

    expect(helpers.methods.$_createCsvLabels(labels, separator)).toEqual(expected)
  })

  it('renders the total rows of the content with custom labels', () => {

    const jsonData = [
      { name: 'John', surname: 'Doe' },
      { name: 'John', surname: 'Roe' },
      { name: 'Jane', surname: 'Woe' }
    ]

    const labels = {
      name: {
        title: 'My first name'
      },
      surname: {
        title: 'My last name'
      }
    }

    const separator = ','

    let expected = '"John","Doe"' + '\r\n' + '"John","Roe"' + '\r\n' + '"Jane","Woe"' + '\r\n'

    expect(helpers.methods.$_createCsvContent(jsonData, labels, separator)).toEqual(expected)
  })

  it('renders the link', (done) => {

    let content = '"Doe"' + '\r\n' + '"Roe"' + '\r\n' + '"Woe"' + '\r\n'

    helpers.methods.$_downloadCsv(100, content, '_mytest')
    expect(document.getElementById('csv-100')).not.toBeNull()

    setTimeout(function () {
      expect(document.getElementById('csv-100')).toBeNull()
      done();
    })
  })

  it('renders the right format at numbers and floats', () => {

    const jsonData = [
      { name: 'John', surname: 'Doe', age: 20, hours: 10.1 },
      { name: 'John', surname: 'Roe', age: 30, hours: 20.1 },
      { name: 'Jane', surname: 'Woe', age: 40, hours: 30.1 }
    ]

    const labels = {
      name: {
        title: 'First name'
      },
      age: {
        title: 'Age'
      },
      hours: {
        title: 'Total hours'
      }
    }

    const separator = ','

    let expected = '"John"' + ',' + 20 + ',' + 10.1 + '\r\n' +
      '"John"' + ',' + 30 + ',' + 20.1 + '\r\n' +
      '"Jane"' + ',' + 40 + ',' + 30.1 + '\r\n'

    expect(helpers.methods.$_createCsvContent(jsonData, labels, separator)).toEqual(expected)
  })
})
