import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'frontendapp/config/environment';


export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    host: ENV.host,
    namespace: 'api',
    authorizer: 'authorizer:drf-token-authorizer',
});
