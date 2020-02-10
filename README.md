# Deploy `json-server` to a free hosting website

> Instructions how to deploy the full fake REST API [json-server](https://github.com/typicode/json-server) to various free hosting sites. Should only be used in development purpose but can act as a simpler database for smaller applications.

- [Deploy `json-server` to a free hosting website](#deploy-json-server-to-a-free-hosting-website)
  - [Create your database](#create-your-database)
  - [Deploy to **Heroku**](#deploy-to-heroku)
          - [Pros](#pros)
          - [Cons](#cons)
    - [Install Heroku](#install-heroku)
      - [How it works](#how-it-works)
  - [Deploy to now](#deploy-to-now)
  - [Deploy to UP](#deploy-to-up)
    - [Installation](#installation)

## Create your database

1 . Clone or fork this repo to anywhere on your computer.
(Ideally, you would have a dedicated "projects" directory)

```bash
  git clone https://github.com/VicAv99/hosted-json-server.git
```

2 . Update `db.json` to **your own content** according to the [json-server example](https://github.com/typicode/json-server#example) and then `commit` your changes to git.

_this example will create `/posts` route , each resource will have `id`, `title` and `content`. The `id` will auto increment! **hint:** start from 1_

```json
  {
    "posts":[
      {
        "id"  :  0,
        "title":  "First post!",
        "content"  :  "My first content!"
      }
    ]
  }
```

---

## Deploy to **Heroku**

<img  align="right"  width="100px"  height="auto"  src="https://cdn.worldvectorlogo.com/logos/heroku.svg"  alt="Heroku">

Heroku is a free hosting service for hosting small projects. Easy setup and deploy from the command line via _git_.

You can also skip the steps below and just click this button: [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/VicAv99/hosted-json-server)

If you are coming from the 30x30 challenge use this: [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/VicAv99/hosted-json-server/tree/api-30x30)

###### Pros

- Easy setup
- Free

###### Cons

- App has to sleep a couple of hours every day.
- "Powers down" after 30 mins of inactivity. Starts back up when you visit the site but it takes a few extra seconds. Can maybe be solved with [**Kaffeine**](http://kaffeine.herokuapp.com/), but will still need to "sleep" for six hours on free apps

---

### Install Heroku

1 . [Create your database](#create-your-database)
2 . Create an account on [https://heroku.com](https://heroku.com)
3 . Install the Heroku CLI on your computer:

If you are using brew,

```term
  brew install heroku/brew/heroku
```

or you can see the heroku documentation here at [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

4 . Connect the Heroku CLI to your account by writing the following command in your terminal and follow the instructions on the command line:

```bash
  heroku login
```

5 . Then create a remote heroku project, kinda like creating a git repository on GitHub. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like `heroku create project-name`:

```bash
  heroku create my-cool-project
```

6 . Push your app to __Heroku__ (you will see a wall of code)

```bash
  git push heroku master
```

7 . Visit your newly create app by opening it via heroku:

```bash
heroku open
```

8 . For debugging if something went wrong:

```bash
  heroku logs --tail
```

---

#### How it works

Heroku will look for a startup-script, this is by default `npm start` so make sure you have that in your `package.json` (assuming your script is called `server.js`):

```json
  "scripts": {
    "start"  :  "node server.js"
  }
```

You also have to make changes to the port, you can't hardcode a dev-port. But you can reference herokus port. So the code will have the following:

```js
const  port  = process.env.PORT  ||  3000;
```

---

## Deploy to now

1 . Create your database
2 . Install now cli-tool globally

```bash
  npm install -g now
```

3 . Run the now command in this folder/repo where your project is. If you run it for the first time, you will be prompted to login, after login, run the command again:

```bash
now --public
```

> --public is used to skip the prompt telling you that you will open source your project if you deploy it to now

4 . The URL will be copied automatically and you can just paste it into your browser.
5 . **Optional**: Rename the deployment:

```bash
  now alias https://your-deployed-name.now.sh new-name
```

_first argument is the deployed site, second argument is the new name to give it_

---

## Deploy to UP

You can also use Apex UP to deploy a smaller app for free.

The pros are that on UP the app will be deployed as a Lambda function. That way if you need a secure api for a private project you can do so.

### Installation

2 . Install the up-cli:

[https://up.docs.apex.sh/](https://up.docs.apex.sh/)

```bash
  curl -sf https://up.apex.sh/install | sh
```

3 . Verify the installation:

```bash
  up version
```

? Readme and app added from json-server and jesperorb.
