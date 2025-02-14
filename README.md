<p align="center">
  <a href="https://tbdc.com.br/" target="_blank">
    <img width="150" src="docs/assets/logo.svg" alt="TBDC logo">
  </a>
</p>

---

<p align="center">
  <em>A wrapper to standardize logs</em>
</p>

## Install

```bash
npm install @tbdc-agro-softwares/logger
## or
yarn add @tbdc-agro-softwares/logger
## or
pnpm add @tbdc-agro-softwares/logger
```

## Setup

You can configure the log level you to show in the console. By default, it's setup to show all levels of log, but you have the following options:
- `debug`: Shows all levels
- `warning`: Shows only **warning** and **error** level
- `error`: Shows only **error** level

```ts
import { configureTbdcLogger } from '@tbdc-agro-softwares/logger';

configureTbdcLogger({
  logLevel: 'debug',  // 'debug' | 'warning' | 'error'
});
```

## Usage

🚧 Documentation in progress... (Help is needed)


## Contributors

<a href="mailto:mauro.olveira@tbdc.com.br" target="_blank">
  <img src="https://img.shields.io/badge/Mauro%20Oliveira-Contribuindo-3c6518.svg">
</a><br/>
