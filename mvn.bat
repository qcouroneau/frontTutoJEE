mvn package
wget http://admin:password@localhost:8081/manager/text/undeploy?path=/create-react-app-servlet -O - -q
wget http://admin:password@localhost:8081/manager/text/deploy?path=/create-react-app-servlet&war=file:/target -O - -q