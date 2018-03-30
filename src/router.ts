// controller.[文件名].[方法名]

module.exports = (controller: any) => ({
    'get /': controller.user.user,
    'get /userinfo': controller.user.userInfo,
});
