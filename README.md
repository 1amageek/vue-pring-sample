# vue-pring-sample

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

# To make the same environment

## Install Vue3
```
sudo npm install -g @vue/cli
```

https://cli.vuejs.org/guide/installation.html

## Create project file

```
vue create sample-project
```

__ vue config __
```JSON
{
  "useTaobaoRegistry": true,
  "presets": {
    "preset_for_pring.ts": {
      "useConfigFiles": false,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-typescript": {
          "classComponent": true,
          "tsLint": true,
          "lintOn": [
            "save"
          ],
          "useTsWithBabel": true
        },
        "@vue/cli-plugin-pwa": {},
        "@vue/cli-plugin-unit-jest": {}
      },
      "router": true,
      "routerHistoryMode": true,
      "vuex": true,
      "cssPreprocessor": "stylus"
    }
  }
}
```

## Install pring & firebase
```
npm add firebase 
```

```
npm add pring 
```

## Set Config.ts
```TypeScript
export const config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
};
```

## pring init
```TypeScript
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import * as Pring from 'pring';
import { config } from './config';
import firebase from 'firebase';
import 'firebase/firestore';

const app = firebase.initializeApp(config);
Pring.initialize(app.firestore(), firebase.firestore.FieldValue.serverTimestamp());

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
```
