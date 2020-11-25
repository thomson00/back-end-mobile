import Vue from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
const dayFormat = {};
function isBrowser() {
    return typeof window !== 'undefined';
}
dayFormat.install = function(Vue) {
    const _dayjs = isBrowser()
        ? dayjs
        : function() {
              return Promise.resolve();
          };
    Vue.dayjs = _dayjs;
    Object.defineProperty(Vue.prototype, '$dayjs', {
        get() {
            return _dayjs;
        }
    });
};
Vue.use(dayFormat);
export default dayjs;
