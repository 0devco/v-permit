import axios from 'axios'
import crabs from '@0devco/crabs'
import v_permi_data from './data'
export default {
  data() {
    return {

    }
  },
  mixins: [v_permi_data],
  methods: {
    /* hasAllPermission start */
    hasAllPermission: function(...perm) {
      let checkPermissions
      let requestAll = []
      let triggerItem
      perm.forEach(t => {
        requestAll.push(t)
      })
      triggerItem = crabs(requestAll).first()
      checkPermissions = crabs(requestAll).slice(1).all()


      // console.log(`trigger is =  ${triggerItem}`)
      // console.log(`checking is = ${checkPermissions} `)

      let authUserPermissions = []
      let afterCheck = []

      if (this.v_permit[`${triggerItem}`] === false && this.v_permit_loop_off[`${triggerItem}`] === 'none') {
        axios.get(this.authPermissionURI)
          .then(response => {
            authUserPermissions = response.data
            // console.log(authUserPermissions)
            checkPermissions.forEach(check => {
              let a = crabs(authUserPermissions).contains(check)
              afterCheck.push(a)
            })
            // console.log(afterCheck)
            if (crabs(afterCheck).contains(false) === false) {
              if (this.v_permit[`${triggerItem}`] === false) {
                this.v_permit[`${triggerItem}`] = true
                this.v_permit_loop_off[`${triggerItem}`] = true
              }
            } else {
              // console.log('not permit')
              if (this.v_permit[`${triggerItem}`] === false) {
                this.v_permit[`${triggerItem}`] = false
                this.v_permit_loop_off[`${triggerItem}`] = true
              }
            }
          })
      }
    },
    /* hasAllPermission END */
    /* hasAllPermission start */
    hasAnyPermission: function(...perm) {
      let checkPermissions
      let requestAll = []
      let triggerItem
      perm.forEach(t => {
        requestAll.push(t)
      })
      triggerItem = crabs(requestAll).first()
      checkPermissions = crabs(requestAll).slice(1).all()


      // console.log(`trigger is =  ${triggerItem}`)
      // console.log(`checking is = ${checkPermissions} `)

      let authUserPermissions = []
      let afterCheck = []

      if (this.v_permit[`${triggerItem}`] === false && this.v_permit_loop_off[`${triggerItem}`] === 'none') {
        axios.get(this.authPermissionURI)
          .then(response => {
            authUserPermissions = response.data
            // console.log(authUserPermissions)
            checkPermissions.forEach(check => {
              let a = crabs(authUserPermissions).contains(check)
              afterCheck.push(a)
            })
            // console.log(afterCheck)
            if (crabs(afterCheck).contains(true) === true) {
              if (this.v_permit[`${triggerItem}`] === false) {
                this.v_permit[`${triggerItem}`] = true
                this.v_permit_loop_off[`${triggerItem}`] = true
              }
            } else {
              // console.log('not permit')
              if (this.v_permit[`${triggerItem}`] === false) {
                this.v_permit[`${triggerItem}`] = false
                this.v_permit_loop_off[`${triggerItem}`] = true
              }
            }
          })
      }
    }

  }
}
