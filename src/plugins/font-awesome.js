import { Library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

Library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt)

export { FontAwesomeIcon }
