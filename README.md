<p align="center" ><img src="https://raw.githubusercontent.com/0devco/v-permit/master/v-permit.png"></p>

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
    <div class="" v-permit="hasAllPermission('a1','edit-post','delete-post') || v_permit.a1">
      <h1>done! all permission exist </h1>
    </div>
    <div v-permit="hasAllPermission('b43','edit-post','delete-post','create-user') || v_permit.b43">
      <h1>don't have create user permissions </h1>
    </div>
    <div v-permit="hasAnyPermission('c21','edit-post','delete-post','create-user') || v_permit.c21">
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
      authPermissionURI: "https://raw.githubusercontent.com/0devco/v-permit/master/authUserPermissions.json"

    }
  },
  mixins: [permitMixins]
}
</script>

<style lang="css" scoped >

</style>

```

# Tips & stricly follow

~ v-permit="hasAnyPermission(`'c21'`,'edit-post','delete-post','create-user') || `v_permit.c21`"

* first element is check id (ex `c21`)
* check id will be `unique`
* you can use check id ( `a1 → a50` ,` b1 → b50`, `c1 → c50`, `d1 → d50` , `e1 → e50` )


<a href="https://twitter.com/0devco" target="_blank" ><p align="center" ><img src="https://raw.githubusercontent.com/0devco/docs/master/.devco-images/logo-transparent.png"></p></a>
