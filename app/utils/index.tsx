
const getDateNow = () => {
  var date = new Date();

  var year = date.toLocaleString('default', { year: 'numeric' });
  var month = date.toLocaleString('default', { month: '2-digit' });
  var day = date.toLocaleString('default', { day: '2-digit' });

  return `${day} - ${month} - ${year}`;
}

export {getDateNow}