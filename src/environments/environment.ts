// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  headers: {
    'Ocp-Apim-Subscription-Key': '244998e7214a4457873b498475d80570',
    'Ocp-Apim-Trace': 'true',
    userID: 'mahesh.beeravelli@mphasis.com',
  },
  clientID: 'e9a45c1b-57f2-494f-9bfe-491f05d203c5', //vmtsweb ad app
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
