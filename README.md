# zpl-preview

Convert ZPL (Zebra Programming Language) strings into PNG previews in any JavaScript environment.

## Features

- Parse ZPL and render PNG previews
- Node.js and browser compatible
- Lightweight and framework-agnostic

## Install

```bash
npm install zpl-preview
```

## Usage

```bash
  import { zplToPng } from 'zpl-preview';

  const pngBuffer = await zplToPng('^XA^FO50,50^ADN,36,20^FDHello ZPL^FS^XZ');
  // Save buffer, display in browser, etc.
```

## License

### MIT License

Copyright (c) 2025 Matt Beard

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
SOFTWARE.
