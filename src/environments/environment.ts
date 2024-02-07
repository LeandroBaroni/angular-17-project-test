import packageInfo from '../../package.json';

export const environment = {
  production: false,
  urlApi: '',
  storage: {
    url: '$URL_STORAGE',
    bucket: '$BUCKET_STORAGE',
    endpoint: '$ENDPOINT_STORAGE'
  },
  firebase: {
    apiKey: 'AIzaSyBl7h2otabXVsk5EqsTrSzquS3xJ76k_Q0',
    authDomain: 'projeto-angular-testes.firebaseapp.com',
    projectId: 'projeto-angular-testes',
    storageBucket: 'projeto-angular-testes.appspot.com',
    messagingSenderId: '482109013666',
    appId: '1:482109013666:web:5ed04632342dc3b60021fb',
    measurementId: 'G-G0SQXSZ9XK'
  },
  appName: `${packageInfo.name}`,
  appVersion: `${packageInfo.version}-dev`
};
