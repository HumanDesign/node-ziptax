# Node.js Library for Zip Tax
### http://zip-tax.com

<a href="https://nodei.co/npm/ziptax/"><img src="https://nodei.co/npm/ziptax.png?downloads=true"></a>

## Download
The source is available for download from GitHub. Alternatively, you can install using Node Package Manager (npm):

`npm install ziptax`

## Example
```coffeescript
ZipTax = require 'ziptax'

zt = new ZipTax('APIKEY')

zt.lookup 80304, (taxInfo) ->
  console.log taxInfo
```

## Development
### Dependencies

This command needs to be ran first if CoffeeScript is not installed on your system

* run `sudo npm install -g coffee-script`

### Setup

Install all of the dependencies

* run `npm install`

The following command will watch and compile Coffeescript
* run `gulp`

