remotecontrol
=============

Project for the Remote Control team to learn the MEAN stack. 

###Setup
    brew install mongodb

When finished, start mongo: 

    mongod
 
If mongo fails to start with the error "dbpath (/data/db/) does not exist": 

    mkdir -p /data/db/

Once mongo is running:

    cd [project root]
    npm install
    grunt

Default page should be available at [http://localhost:3000/#!/](http://localhost:3000/#!/)
