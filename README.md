# sib-protractor
**Sib** Test using Protractor

## How to install [protractor](http://www.protractortest.org/#/)

## How to run this project
```
 protractor conf.js --verbose
```

### Output
```
************ URI::http://sl008079.dcm.allianz:12000/cibox-testclients/#!/sib                       
λ protractor conf-sib-localhost.js                                              
[16:42:00] I/launcher - Running 1 instances of WebDriver                        
[16:42:00] I/hosted - Using the selenium server at http://localhost:4444/wd/hub 
                                                                                
************ URI::http://localhost:8081/cibox-testclients/#!/sib                
Started                                                                         
should have a title                                                             
.should get a result of the Searching using the following Criteria              
.should get a result of the Searching using a concatenation of AgentId's        
.should validate the incorrect use of AgentId's concatenation                   
.should validate the incorrect number of AgentId's concatenation                
.should get a result of the Searching using the following Criteria              
.should get a result of the Searching using the following Criteria              
.                                                                               
                                                                                
                                                                                
7 specs, 0 failures                                                             
Finished in 13.861 seconds                                                      
                                                                                
[16:42:15] I/launcher - 0 instance(s) of WebDriver still running                
[16:42:15] I/launcher - chrome #01 passed                                       
```
