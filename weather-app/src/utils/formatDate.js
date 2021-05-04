import moment from 'moment';

export default function formatDate(date) {
  return moment(date).format('ddd, D MMM');
}
