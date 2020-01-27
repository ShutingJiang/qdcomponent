import qdInput from './components/input';

const components = {qdInput}

const install = function (Vue, options) {
    Object.keys(components).forEach(key => Vue.component(key, components[key]));
}

export default install;