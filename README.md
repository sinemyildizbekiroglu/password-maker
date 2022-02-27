# password-maker

An npm library for creating passwords by extracting the first letter of each word in a memorable phrase. It also replaces some of those letters with numbers. 

The letter i or I is replaced with the number 1 in the password,
The letter s or S is replaced with the number 9 in the password,
The letter e or E replaced with the number 8 in the password,
The letter a or A replaced with the number 5 in the password.

# Installation

```sh
npm i password-maker
```

# Usage

```js
const makePassword = require('password-maker')
const password = makePassword("The only impossible journey is the one you never begin") // creates To1j1toynb

```
# LICENSE

MIT License

Copyright (c) 2022 Sinem Yildiz Bekiroglu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE