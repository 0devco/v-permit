# v-permit
🔑 Vue Roles & Permissions (ACL) ⇆ [ Laravel+ Rails] ⇆ 0devco

# install

```bash
npm i @0devco/v-permit
# yarn
yarn add @0devco/v-permit
```

# import > App.js

```js
import Vpermit from '@0devco/v-permit';
Vue.use(Vpermit);
```

# use `v-permit` for ACL

```html
<template lang="html">
  <div class="">
    <div class="" v-permit="hasAllPermission('edit-post','delete-post') || v_permit">
      <h1>done! all permission exist </h1>
    </div>
    <div v-permit="hasAllPermission('edit-post','delete-post','create-user') || v_permit">
      <h1>don't have create user permissions </h1>
    </div>
    <div v-permit="hasAnyPermission('edit-post','delete-post','create-user') || v_permit">
      <h1>don't have create user permissions but hasAnyPermission exists  </h1>
    </div>
  </div>
</template>

<script>
import permitMixins from '@0devco/v-permit/mixins/permit'
export default {
  data () {
    return {
      msg: 'v-permit',
      // json format
      authPermissionURI: "https://raw.githubusercontent.com/0devco/JSpermit/master/authUserPermissions.json"

    }
  },
  mixins: [permitMixins]
}
</script>

<style lang="css" scoped >

</style>

```
