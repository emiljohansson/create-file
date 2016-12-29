# create-file

> Create a new file.

## Install

```sh
`cd path/to/create-file`
```

```sh
npm link
```

## Usage

```js
const createFile = require('path/to/create-file')
createFile('path/to/dest/new-file.js', 'content')
```

```sh
create-file "path/to/dest/new-file.js" "console.log('Hello')"
```

## API

### create-file(file, content, cb)

Create a file.

#### file

Type: `string`

Path and name to the new file.

#### content

Type: `string`

Content of the new file.

#### cb

Type: `function`

Optional callback function, which will be called ones the file has been created.

## License

MIT © [Emil Johansson](http://emiljohansson.se)
