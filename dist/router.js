"use strict";
// controller.[文件名].[方法名]
module.exports = (controller) => ({
    'get /': controller.user.user,
    'get /userinfo': controller.user.userinfo,
});
