
const DateFormat = (date: string) => {

    const formatDate = new Date(date)

    const dateFormated = formatDate.getDate() + "-" + "0" + (formatDate.getMonth() + 1) + "-" + formatDate.getFullYear()
  return (
    <span>{dateFormated}</span>
  )
}

export default DateFormat