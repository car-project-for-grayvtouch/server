/**
 * ***********************
 * api 设置
 * ***********************
 */
import adminApi from '../../api/admin.js';
import articleTypeApi from '../../api/articleType.js';
import articleApi from '../../api/article.js';
import announcementApi from '../../api/announcement.js';
import appApi from '../../api/app.js';
import imageApi from '../../api/image.js';
import miscApi from '../../api/misc.js';
import routeApi from '../../api/route.js';
import roleApi from '../../api/role.js';

Object.assign(window , {
    adminApi ,
    articleTypeApi ,
    articleApi ,
    announcementApi ,
    appApi ,
    imageApi ,
    miscApi ,
    routeApi ,
    roleApi ,
});