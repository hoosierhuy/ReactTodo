The obligatory todo app.

Mine uses Google's Firebase No-Sql database. Users log into the app using their own GitHub account and will have access to their own Todos list, which only they can access.  

If you're interested in using and seeing the app, send me an email.

Sensitive database creds are kept out of this repo for obvious reasons.

Eventhough I've enabled ES6 transpilation for this project, I'm still using the React.createClass static method instead of classes because I have an aversion to the "this.myMethod = this.myMethod.bind(this)" in the class constructor.  I also dislike binding inline at invocation time because of performance penalty.  I can't wait till ES7 when this is resolve, then I'll jump on the classes syntatic sugar bandwagon.
