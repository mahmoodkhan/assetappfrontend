import Ember from 'ember';

export default Ember.Route.extend({

    /* Here, we're telling ember to "watch" the query parameter "page".
     * In this case, if the parameter changes, the model will be fetched again.
     * We could map the parameter to a different property name if we wanted. */
    queryParams: {
        page: {
            refreshModel: true
        }
    },
    model(params) {
        let query = {};

        // If the query parameter "page" is present, we're relaying it to ember data.
        // Note: we could also include other parameters, eg. "perPage", if the API handles it.
        if(Ember.isPresent(params.page)) {
            query.page = params.page;
        }
        return this.store.query('asset', query);
    },

    // Here, we're passing metadata to the controller - namely, the total number of pages.
    // This method will be executed each time the model is reloaded.
    setupController: function(controller, model) {
        this._super.apply(this, arguments); // Do not forget this call

        controller.set('pages', model.get('meta.pagination.pages'));
    }

});
