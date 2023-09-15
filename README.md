# cms-qa-automation

## Prerequisite

- Node (LTS) [link](https://nodejs.org)
- VS Code (v1.81.1) or Greater version [link](https://code.visualstudio.com/docs/?dv=win)

## Technology Stack

- Typescript/JavaScript
- Microsoft Playwright

## Setup Windows or Mac OS

### Install the node and visual studio code

- Download node.js (v16.17.0) or Greater version [link](https://www.npackd.org/p/org.nodejs.NodeJS64/16.17.0)
- Install node.msi file
- Set environment variable for node
- To check the node version by running following command
  `node --version`
- Download and install Visual Studio Code(v1.81.1) or Greater version [link](https://code.visualstudio.com/docs/?dv=win)

## Installation

How to setup and run the `Playwright` test automation framework for cms on multiple Web browsers: Chrome, Firefox, WebKit (Safari).

```
git clone  [repoLink]
```

### Installing Dependencies of the CMS Project

```
npx playwright install
```

```
npm install
```

### Add environment variables

- create .env file in root and add variables according to .env.test file.

### To Run Complete Features

```
npm run test
```

### To Run Single Feature (eg login)

```
npx playwright test -- tests/Features/Login
```
