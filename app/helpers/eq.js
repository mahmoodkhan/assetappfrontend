import Ember from 'ember';

export function eq(params/*, hash*/) {
    if (params[1] === 'true') {
        params[1] = true;
    }
    return params[0] === params[1];
}

export default Ember.Helper.helper(eq);
