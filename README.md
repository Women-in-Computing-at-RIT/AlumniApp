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

    git clone link

## Installing Ionic
If you haven't installed nodejs then follow [the instructions to install it](https://nodejs.org/en/download/).
Then install ionic using the following command:

    npm install -g cordova ionic

## Running the app
Use this command to run the app in your browser.

    ionic serve --lab
