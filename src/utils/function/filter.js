import moment from 'moment'

function GenerateFilterTerm(filter, arrcolumn) {
  let filterTerm = ''

  if (filter !== null && filter.filters !== undefined) {
    filter.filters
      .filter((f) => f.value !== '')
      .map((item, index) => {
        const koma = index > 0 ? ',' : ''
        if (arrcolumn.find((e) => e.field === item.field).filterType === 'date') {
          const startOfDay = moment(item.value).format('YYYY-MM-DD')

          if (startOfDay.toLowerCase() !== 'invalid date') {
            filterTerm = `${filterTerm}${koma}{"field":"${item.field}","type":"date","value":"${startOfDay}"}`
          }
        } else {
          filterTerm = `${filterTerm}${koma}{"field":"${item.field}","type":"${
            arrcolumn.find((e) => e.field === item.field).filterType
          }","value":"${item.value}"}`
        }

        return item
      })
    filterTerm = `[${filterTerm}]`
  } else {
    filterTerm = '[]'
  }
  return filterTerm
}

const GenerateFilter = (filter, filters) => {
  let filterTerm = ''
  if (filter.length != 0 && filter.map((item) => {
    return item.field
  }) != filters.field) {
    filter.push(filters)
  } else if (filter.length == 0) {
    filter = [filters]
  } else {
    filter
  }

  if (filter !== null && filter !== undefined || filter.length != 0) {
    filter.map((item, index) => {
      const koma = index > 0 ? ',' : ''
      filterTerm = `${filterTerm}${koma}{"field":"${item.field}","type":"${item.type}","value":"${item.value}"}`
    })
    filterTerm = `[${filterTerm}]`
  } else {
    filterTerm = '[]'
  }

  return filterTerm
}

export { GenerateFilter, GenerateFilterTerm }