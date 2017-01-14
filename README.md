# AlumniApp
This is a repository for the development of the WiC Networking Alumni App.
A couple of notes here before setup. We're starting development focusing on the
Android app version first before any other platforms.

I'd also like to note that most of the setup info on this readme is mostly based
on my experience setting up on linux so if there are particular problems that
you come across while setting up on other systems please do update this readme.
Thanks!
Regina Locicero (Project Lead)

# Setup

## Cloning the repository
First you need to [install git if you haven't already.](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Then you need to clone the repository. You probably want to enter your Documents folder (or wherever you wish the folder for the project to be) using the terminal. So on Mac/Linux you would run something like "cd " followed by the directory.

If you look in the upper right hand corner there is
a green box; click on it and copy the link to your clipboard then run, while inside the place you want your folder:

> git clone link

## Setting up the emulator
For this project we need an some form of Android emulator, you can get this from
other IDEs but if you don't know where to get this you can use
[Android Studio which you can download and follow the installation instructions for your Operating System.](https://developer.android.com/studio/index.html)
Make sure you click custom install when it comes up and click "Android Virtual device" as
that's what we're installing android studio for. When the start menu shows up go to configure->sdk,
then click the link at the bottom to go to an external sdk manager. React requires both Android Marshmellow 6.0
or API 23 and also requires Build Tools 23.0.1 [as indicated in the react native getting started guide](https://facebook.github.io/react-native/docs/getting-started.html#3-install-the-android-6-0-marshmallow-sdk).
If at any point you see a popup in android studio to upgrade gradle
click 'update'.

After install lets open up our project, specifically the AlumniApp/AlumniApp/android folder.
If at this point you don't get a prompt to update gradle then close out the studio and open it back up again.

> NOTE: If you are on linux you want to run the studio.sh file with sudo permission
otherwise you will not be able to update gradle and you will be unable to build the app.
Also you may see in the gradle terminal that says "Fix..." click that to update gradle.

Then we want to
[create and run your virtual device.](https://developer.android.com/studio/run/managing-avds.html#createavd)

## Installing React Native
React native is based off of Node.js so we need to [install that first.](https://nodejs.org/en/download/)

> NOTE At the bottom of most linux distro sections in the install instructions there is a way to install via repos
so for Fedora: "sudo yum install nodejs npm" etc.

To install react native we want to cd back to our project folder.
First I want you to check the package.json and make sure that it reads under dependencies:

> "react": "^15.3.2",
> "react-native": "^0.40",

If not then change the numbers to reflect the proper versions.

Now run the following command:

> sudo npm install
> sudo npm install -g react-native-cli

If this does not work when tryig to run later then try the following commands:
    sudo npm install react-native
    sudo npm install react

In the [react native docs](https://facebook.github.io/react-native/docs/getting-started.html ) they say watchman is optional,
THEY LIE! YOU NEED IT! So install it using:
> sudo npm watchman

## Run it!
Run the android device emulator if you don't already have it open.
To open emulator from command line without opening Android Studio:

Change directory to "tools" in sdk location folder and enter:

    emulator -avd [name of device]

To get the name of the device enter:

    emulator -list-avds

Then open one terminal and run the command:
> react-native start

This terminal will prevent an error on run.

Then open another terminal and run:
> react-native run-android

This may take a while especially the first time.
If the app doesn't open automatically go to apps on the device and click AlumniApp.
You should see a welcome message.

## Common errors

### No tools.jar
Linux distros often use open java sdk which react does not like and it will complain
about not having a "tools.jar". I have heard of people getting around this by making sure
there is the dev or devel tools involved for opensdk but I suggest installing [oracle's jdk.](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
Then make sure the JAVA_HOME variable points to oracle's jdk using:
> export JAVA_HOME=path

### UNMET PEER DEPENDANCY
Check to make sure the package.json is correct as done above. Otherwise install the
dependencies using "sudo npm install" + dependency_name.
