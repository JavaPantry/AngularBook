System.config({
  baseURL: "/auction/",//to start in webStorm need to include app name in base url
  //baseURL: "/",// to start with 'npm start' in live-server base url just root
  transpiler: "typescript",
  typescriptOptions: {
    "emitDecoratorMetadata": true
  },
  packages: {
    "app": {
      "defaultExtension": "ts",
      "main": "main.ts"
    }
  }
});
