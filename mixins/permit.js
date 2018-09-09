import axios from 'axios'
import crabs from'@0devco/crabs'
export default {
  data () {
    return {
      v_permit: false,
    }
  },
  methods: {
    /* hasAllPermission start */
    hasAllPermission: function(...perm) {
      var checkPermissions = []
      perm.forEach(t => {
        checkPermissions.push(t)
      })
      console.log(checkPermissions)
      var authUserPermissions = []
      var afterCheck = []
      axios.get('https://raw.githubusercontent.com/0devco/JSpermit/master/authUserPermissions.json')
        .then(response => {
          authUserPermissions = response.data
          // console.log(authUserPermissions)
          checkPermissions.forEach(check => {
            let a = crabs(authUserPermissions).contains(check)
            afterCheck.push(a)
          })

          if (crabs(afterCheck).contains(false) === false) {
            // console.log('you have permit all full fill')
            this.v_permit = true
          } else {
            // console.log('not permit')
            this.v_permit = false
          }
        })
    },
    /* hasAllPermission mixins end */

    /* hasAllPermission start */
    hasAnyPermission: function(...perm) {
      var checkPermissions = []
      perm.forEach(t => {
        checkPermissions.push(t)
      })
      // console.log(checkPermissions)
      var authUserPermissions = []
      var afterCheck = []
      axios.get(this.authPermissionURI)
        .then(response => {
          authUserPermissions = response.data
          // console.log(authUserPermissions)
          checkPermissions.forEach(check => {
            let a = crabs(authUserPermissions).contains(check)
            afterCheck.push(a)
          })

          if (crabs(afterCheck).contains(false) === true) {
            // console.log('you have permit all full fill')
            this.v_permit = true
          } else {
            // console.log('not permit')
            this.v_permit = false
          }
        })
    }
    /* hasAllPermission mixins end */

  }
}
