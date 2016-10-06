# AlumniApp
This is a repository to create the WiC Networking Alumni App

#Setting repository for the first time
Run git clone with the url of the repository.

Open terminal and change to the project root directory (second AlumniApp folder)

Run the following commands:

    npm install react-native

    npm install -g react-native-cli

    npm install react
  
You should now be able to run the project.
        
   Open emulator from Android studio or from the command line.
   
   To open emulator from command line without opening Android Studio:
   
   Change directory to "tools" in sdk location folder and enter:
            
            emulator -avd [name of device]
            
   To get the name of the device enter:
            
            emulator -list-avds

   Run project:
    
        react-native run-android
  
If red error screen appears on emulator, then run following command in separate terminal before previous command:

    react-native start
  
