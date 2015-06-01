# iotivity-node
## Description
This project provides [iotivity](http://iotivity.org/) node.js bindings.

## Installation

iotivity-node depends on [iotivity](http://iotivity.org/) proper. It has been tested against [6a49412](https://gerrit.iotivity.org/gerrit/gitweb?p=iotivity.git;a=tree;h=40514d0b79627ff4372d36fea1d12b346e284c86;hb=6a49412877aed68effcaee9e5d2210f1a173e570) on Linux. During compilation, it uses pkgconfig to retrieve the iotivity compiler and linker flags. This means that you have to first build and install iotivity. The following procedure is known to work on Linux:

0. Grab a [snapshot](https://gerrit.iotivity.org/gerrit/gitweb?p=iotivity.git;a=snapshot;h=40514d0b79627ff4372d36fea1d12b346e284c86;sf=tgz) of iotivity from its git repository and unpack it locally.
0. Make sure a compiler, make, and [scons](http://www.scons.org/) (a build tool) are installed. Your distribution should provide all these tools.
0. ```cd iotivity```
0. scons has the concept of targets just like make. You can get a list of targets contained in the iotivity repository, as well as a listing of recognized build flags via ```scons --help```. The only target you need for the node.js bindings is ```liboctbstack```. Thus, run ```scons liboctbstack``` to build this target.
0. Grab [install.sh](https://raw.githubusercontent.com/gabrielschulhof/iotivity/install/install.sh) and [octbstack.pc.in](https://raw.githubusercontent.com/gabrielschulhof/iotivity/install/octbstack.pc.in) and place them in the root of the iotivity repository.
0. As root, change directory to the iotivity repository and run ```./install.sh```. The script recognizes to environment variables: ```PREFIX``` is set to ```/usr``` by default, and ```DESTDIR``` is unset. Use ```PREFIX``` to install to a location other than ```/usr``` and use ```DESTDIR``` to set an additional prefix where to put the files. This latter option is especially useful for packaging. Examples:

    ```PREFIX=/usr/local ./install.sh``` will install the files into ```/usr/local``` instead.
    ```PREFIX=/usr/local DESTDIR=/home/username/iotivity-installation ./install.sh``` will install the files into ```/home/usr/iotivity-installation/usr/local```, but it will configure liboctbstack to work when loaded from ```/usr/local```.
    Now clone this repository and change directory into it.
0. ```npm install```

## Examples

The JavaScript examples are located in ```js/``` and come in pairs of one client and one server, each illustrating a basic aspect of iotivity. To run them, open two terminals and change directory to the root of the iotivity-node repository in both. Always launch the server before the client. For example, in one terminal you can run ```node js/server.observe.js``` and in the other terminal you can run ```node js/client.observe.js```.

## Tests

To run the tests, simply run ```npm test```. A script called ```dist.sh``` is also provided. It runs ```npm install```, runs the tests, then runs ```npm prune --production``` to remove all sources, headers, and build dependencies. After that, it copies relevant files to ```dist/``` and creates a tarball from them. After that, it runs ```npm install``` again to restore the development environment.

## Coding Style

Please follow the [jQuery](http://contribute.jquery.org/style-guide/js/) coding style, even for C++!
