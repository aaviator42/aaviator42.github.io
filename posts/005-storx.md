### StorX: A simple and robust key-value flat-file data storage library

[StorX](https://github.com/aaviator42/StorX/) is a simple PHP library I wrote that enables you to store data (objects) to flat files as "keys", which you can read and modify later.

I use it all the time in projects of mine where I need to store and retrieve data, but don't want to deal with the complexities of relational databases. 

It's essentially an abstraction layer on top of SQLite, and very intuitive to use:

```php
<?php

//include the StorX library
require 'StorX.php';	

//create Sx 'handle' object to work with the DB file
$sx = new \StorX\Sx;

//create a DB file
$sx->createFile('testDB.dat');

//open the file for writing
$sx->openFile('testDB.dat', 1);

//write stuff to the DB file
$sx->writeKey('username', 'Aavi');

//here's how we read a key
$sx->readKey('username', $username); 
echo "User: $username"; //prints 'User: Aavi'
```

It has functions for writing, modifying, reading, deleting and checking data. Keys can be objects of any class (or simply text/variables/NULL/arrays/etc). 

Take a look at the complete documentation [here](https://github.com/aaviator42/StorX/blob/main/README.md).

If you'd like to see a real-world usage example, a simple website hit counter that uses StorX can be found [here](https://github.com/aaviator42/hit-counter/). 

See also:  
 * [StorX-API](https://github.com/aaviator42/StorX-API): an HTTP API for StorX.
 * [StorX-Remote](https://github.com/aaviator42/StorX-Remote/): a PHP library for interacting with the API.



<br>

-------
`2022-04-13`
