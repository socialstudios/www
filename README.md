www
===

The web site: [www.socialstudios.tv](http://www.socialstudios.tv)

# setup:
To setup simply run:

    ./setup.sh
    
This will install yeoman for you, if it's not yet installed, capistrano, and other dependeicies. 

You will also need to set up some AWS keys, namely `AWS_ACCESS_KEY` and `AWS_SECRET_KEY`. 
If you don't have them, then you can get one [here](https://console.aws.amazon.com/iam/home?region=us-east-1#s=Users)


# Deploy
To deploy run: 

    ./deploy.sh
    
Where "deploy message" is - what's new on the website - what did you deploy just now?
