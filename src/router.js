/*
 * Copyright (c) 2018-2019 Reposilite Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('./pages/Index.vue')
        },
        {
            path: '/news',
            name: 'News',
            component: () => import('./pages/News.vue')
        },
        {
            path: '/docs',
            name: 'Docs',
            component: () => import('./pages/Docs.vue')
        },
        {
            path: '/guide',
            name: 'Guide',
            component: () => import('./pages/Guide.vue')
        },
        {
            path: '/support',
            name: 'Support',
            component: () => import('./pages/Support.vue')
        },
        {
            path: "*",
            name: 'Page Not Found',
            component: () => import('./pages/PageNotFound.vue')
        }
    ]
})