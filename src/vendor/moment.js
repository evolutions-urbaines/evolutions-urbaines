import moment from 'moment-business-days'
import 'moment/locale/fr'

moment.locale('fr')

moment.updateLocale('fr', {
  meridiem: function(hour, minute, isLowercase) {
    if (hour > 11) {
      return isLowercase ? 'apr.-midi' : 'PM'
    } else {
      return isLowercase ? 'matin' : 'AM'
    }
  },
})

export default moment
