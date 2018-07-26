import moment from 'moment-business-days'
import 'moment/locale/fr'

moment.locale('fr')

// moment.locale('fr', {
//   calendar: {
//     sameDay: "[Aujourd'hui]",
//     nextDay: '[Demain]',
//     nextWeek: 'dddd D',
//     lastDay: '[Hier]',
//     lastWeek: 'dddd [dernier]',
//     sameElse: 'L',
//   },
// })
// moment.locale('fr', {
//   calendar: {
//     sameDay: '[Cet] a',
//     nextDay: '[Demain] a',
//     nextWeek: 'dddd D a',
//     lastDay: '[Hier] a',
//     lastWeek: 'dddd [dernier] a',
//     sameElse: 'L',
//   },
// })

moment.updateLocale('fr', {
  meridiem: function(hour, minute, isLowercase) {
    if (hour > 11) {
      return isLowercase ? 'après-midi' : 'PM'
    } else {
      return isLowercase ? 'matin' : 'AM'
    }
  },
})

export default moment
