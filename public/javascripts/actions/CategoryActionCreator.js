/**
 * Created by wonwoo on 16. 1. 11..
 */

import Dispatcher from '../core/Dispatcher';
import ActionConstants from '../constants/ActionConstants';
import { Promise } from'es6-promise'; // jshint ignore:line
import Api from '../services/Api';

var CategoryActionCreator = {
    getCategories : function() {
        Api
            .get('category/')
            .then(function (categories) {
                Dispatcher.handleViewAction({
                    actionType: ActionConstants.RECEIVE_CATEGORY,
                    categories: categories
                });
            })
            .catch(function () {
                Dispatcher.handleViewAction({
                    actionType: ActionConstants.RECEIVE_ERROR,
                    error: 'There was a problem getting the Categoris'
                });
            });
    }
}

export default CategoryActionCreator;