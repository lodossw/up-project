
'use strict';
serviceModule.factory('SwitchActionService', function ($resource, webServerUrl, $httpParamSerializer) {
    return $resource(webServerUrl + '/api/order/get/checkReceipt?debug=:debug&loginId=:loginId',
        {
            debug: '@debug',
            loginId : '@loginId'
        },
        {
            getCheckReceipt: {
                method: 'POST',  isArray: false, headers: { 'Content-Type': 'application/json; charset=UTF-8' } }
        }
    );
});