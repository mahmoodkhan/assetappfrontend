export function initialize(appInstance) {
    // appInstance.inject('route', 'foo', 'service:foo');
    var container = appInstance.lookup ? appInstance : appInstance.container;
    var store = container.lookup('service:store');
    store.findAll('country');
    store.findAll('category');
    store.findAll('office');
    store.findAll('assettype');
    store.findAll('category');
    store.findAll('subcategory');
    store.findAll('status');
    store.findAll('donor');
}

export default {
    name: 'application',
    initialize
};
