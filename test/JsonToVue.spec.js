import Vue from 'vue'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import JsonToCsv from '@/src/JsonToCsv.vue'
import helpers from '@/src/utils/helpers'

var mocked_createCsvLabelsConf, mocked_createCsvLabels, mocked_createCsvContent, mocked_downloadCsv

describe('JsonToCsv.vue', () => {
  it('renders the default button', () => {

    const jsonData = [
      { name: 'John', surname: 'Doe' },
      { name: 'John', surname: 'Roe' }
    ]

    const wrapper = shallowMount(JsonToCsv, {
      propsData: { jsonData }
    })

    let button = wrapper.find('button')

    expect(button.text()).toBe('Download')
  })

  it('renders the custom button', () => {

    const jsonData = [
      { name: 'John', surname: 'Doe' },
      { name: 'John', surname: 'Roe' }
    ]

    const wrapper = shallowMount(JsonToCsv, {
      propsData: { jsonData },
      slots: {
        default: '<button>Custom button</button>'
      }
    })

    let button = wrapper.find('button')

    expect(wrapper.findAll('button').length).toBe(1)
    expect(button.text()).toBe('Custom button')
  })

  it('renders does not trigger csv creation when data are empty', () => {

    const jsonData = []

    const wrapper = shallowMount(JsonToCsv, {
      propsData: { jsonData }
    })

    const mocked_createCsvContent  = jest.spyOn(wrapper.vm, '$_createCsvContent');
    const mocked_handleError  = jest.spyOn(wrapper.vm, 'handleError');

    wrapper.find('button').trigger('click')
    expect(mocked_handleError).toHaveBeenCalled()
    expect(mocked_createCsvContent).not.toHaveBeenCalled()
  })

  it('renders does not trigger csv creation when data is function', () => {

    const jsonData = [{func: hi()}]

    function hi () {
      return 'hi'
    }

    const wrapper = shallowMount(JsonToCsv, {
      propsData: { jsonData }
    })

    const mocked_createCsvContent  = jest.spyOn(wrapper.vm, '$_createCsvContent');

    wrapper.find('button').trigger('click')
    expect(mocked_createCsvContent).toHaveBeenCalled()
  })

  it('renders does not trigger csv creation when labels are empty', () => {

    const labels = {}
    const jsonData = [{name: 'Joe', surname: 'Doe'}]

    const wrapper = shallowMount(JsonToCsv, {
      propsData: { jsonData, labels }
    })

    const mocked_createCsvContent  = jest.spyOn(wrapper.vm, '$_createCsvContent')
    const mocked_handleError  = jest.spyOn(wrapper.vm, 'handleError');

    wrapper.find('button').trigger('click')

    expect(mocked_handleError).toHaveBeenCalled()
    expect(mocked_createCsvContent).not.toHaveBeenCalled()
  })

  it('renders does not trigger csv creation when data are empty', () => {

    const jsonData = [
      { name: 'John', surname: 'Doe' },
      { name: 'John', surname: 'Roe' }
    ]

    const wrapper = shallowMount(JsonToCsv, {
      propsData: { jsonData }
    })

    const mocked_createCsvContent  = jest.spyOn(wrapper.vm, '$_createCsvContent');

    wrapper.find('button').trigger('click')
    expect(mocked_createCsvContent).toHaveBeenCalled()
  })

  it('renders does triggers csv creation when data are not empty but showLabels not defined', () => {

    const jsonData = [
      { name: 'John', surname: 'Doe' },
      { name: 'John', surname: 'Roe' }
    ]

    const wrapper = shallowMount(JsonToCsv, {
      propsData: { jsonData }
    })

    const mocked_downloadCsv  = jest.spyOn(wrapper.vm, '$_downloadCsv');
    // wrapper.vm.$emit('error', 'sdsdsdsd')
    // console.log(wrapper.emitted('error'))
    wrapper.find('button').trigger('click')
    expect(mocked_downloadCsv).toHaveBeenCalled()
  })
})
