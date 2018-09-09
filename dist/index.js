const vPermit = {
  install(Vue) {
    Vue.directive('permit', (el, binding) => {
      var value = binding.value;

      if (!!value) {
        el.style.visibility = 'visible';
      } else {
        el.style.visibility = 'hidden';
      }
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vPermit);
}

export default vPermit;
