const FormatRupiah = (noFormatNumber) => {
  if (noFormatNumber) {
    let number_string = noFormatNumber.toString(),
      sisa = number_string.length % 3,
      toformatrupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g)

    if (ribuan) {
      let separator = sisa ? '.' : ''
      toformatrupiah += separator + ribuan.join('.')
    }
    return toformatrupiah
  } else {
    return noFormatNumber
  }
}

export default FormatRupiah
