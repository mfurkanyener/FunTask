# FunTask Tutorial

## How to install?

### Step 1: Set up Git

• On GitHub, navigate to the bsonmez/FunTask repository.

• In the top-right corner of the page, click Fork.

![Fork](https://help.github.com/assets/images/help/repository/fork_button.jpg
)

### Step 2: Create a local clone of your fork

 • On GitHub, navigate to your fork of the FunTask repository.

 • Under the repository name, click Clone or download.

 • In the Clone with HTTPs section, click  to copy the clone URL for the repository.

![Fork](https://help.github.com/assets/images/help/repository/clone-repo-clone-url-button.png
)

![Fork](https://help.github.com/assets/images/help/repository/https-url-clone.png
)


```sh
$ git clone https://github.com/YOUR-USERNAME/FunTask/
```

```sh
$ git clone https://github.com/YOUR-USERNAME/FunTask
Cloning into `FunTask`...
remote: Counting objects: 10, done.
remote: Compressing objects: 100% (8/8), done.
remove: Total 10 (delta 1), reused 10 (delta 1)
Unpacking objects: 100% (10/10), done.
```

### Step 3: Make Changes then pull request 

You can check the following descriptions If you need help.

[How to fork a repo](https://help.github.com/articles/fork-a-repo/)

[How to make pull request](https://help.github.com/articles/about-pull-requests/)

## Tasks

### Task 1: Hello React-Native

- Run the application
- Enter your name on the following screen

### Task 2: I Find Bugs and Fix Them

FunTask team just updated their back-end. They gave a __client-key__ to you. It will help us to approve the GET requests come from our application and so we can send the data you are requesting for.

Our all developers are busy currently, we are kindly asking you to add client-key in the header.

###### PS: The key in the app.

### Task 3: Data handling

After the first task, you will see a screen shows __ID__ and __welcome__ message on the screen. The problem in here a user logins and sees its user ID instead of seeing the full name. It does not UI friendly and does not make sense to the user. So that we should __show the user's full name__ and then when the __user clicks 'Get My Informations' should see its name and ID__ on alert box. 

- Change the welcome message within the user's name.

```
Welcome
5c2b865c33ada70baac995a2
```

- Example;

```
Welcome
John Wick
```

### Task 4: (VERY HUGE BONUS)

- FunTask team thinks to add a new feature. The new feature is a picker that allows users to select a store or a place near. For example, If the user in Taksim, the picker will bring the store names around Taksim and the user will be able to select it then an alert will pop-up to show the selected place.

###### PS: You are allowed to install new packages and use google places api.

## Documentation

### API's

There are two API's you can use.

- FetchData for GET method.
- PostData for POST method.

### Routes

For routes we use redux. If you need to add new scene, you can add on App.js