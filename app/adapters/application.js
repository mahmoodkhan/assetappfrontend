import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'frontendapp/config/environment';


export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    host: ENV.host,
    namespace: 'api',

    /* By default the JSONAPIAdapter will send each find request coming from a
     * store.find or from accessing a relationship separately to the server.
     * If your server supports passing ids as a query string, you can set
     * coalesceFindRequests to true to coalesce all find requests within a
     * single runloop. */
    coalesceFindRequests: true,

    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    authorizer: 'authorizer:drf-token-authorizer',

    shouldBackgroundReloadAll: function(store, snapshotArray) {
        //var snapshots = snapshotArray.snapshots();
        const myarr = Array('country', 'category', 'assettype', 'subcategory', 'status', 'donor');
        const cnt = store.peekAll('category').get('length');
        console.log(cnt);
        if (Ember.$.inArray(snapshotArray.type.modelName, myarr) === 1 &&
                cnt === 0 ) {
            console.log("fetching from cache: " + snapshotArray.type.modelName);
            return false;
        }
        console.log(snapshotArray.type.modelName);
        return true;
    },


    /*
    shouldReloadAll: function(store, snapshotArray) {
        var snapshots = snapshotArray.snapshots();
        return snapshots.any(function(assetSnapshot) {
            //var timeDiff = moment().diff(ticketSnapshot.attr('lastAccessedAt'), 'minutes');
            var timeDiff = 2;
            if (timeDiff > 20) {
                return true;
            } else {
                return false;
            }
        });
    },
    */

});
