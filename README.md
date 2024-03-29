# Readme

<!-- ![Release](https://img.shields.io/github/v/release/jagoe/fvtt-module-inactive-tokens?sort=semver)
![Supported Foundry Version](https://img.shields.io/badge/Foundry-v9+-informational)
![Latest Release Download Count](https://img.shields.io/github/downloads/jagoe/fvtt-module-inactive-tokens/latest/module.zip)
![Forge Installs](https://img.shields.io/badge/dynamic/json?url=https:%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Finactive-tokens&query=package.installs&colorB=4aa94a&label=Forge%20Installs&suffix=%25)

![Pipeline Status](https://github.com/jagoe/fvtt-module-inactive-tokens/workflows/Module%20CI/CD/badge.svg)
[![codecov](https://codecov.io/gh/jagoe/fvtt-module-inactive-tokens/branch/main/graph/badge.svg?token=SCJTRYKL84)](https://codecov.io/gh/jagoe/fvtt-module-inactive-tokens)

![License](https://img.shields.io/github/license/jagoe/fvtt-module-inactive-tokens) -->

## Changelog

A changelog can bout found [here](./CHANGELOG.md).

## Description

A Foundry VTT module that allows GMs to activate and deactivate tokens for their players. It produces the same behavior as setting `interactive` to `false`, but without disabling the token for the GM.

The main reason I developed this is in order to turn tokens into statues (or statues into sudden enemies!). So I'll also provide the macro that does that here (though you need to install the module [Token Magic FX](https://foundryvtt.com/packages/tokenmagic) for it to work):

```js
let filterId = 'stone'
let params =
[{
    filterType: "adjustment",
    filterId: filterId,
    saturation: 0,
    // feel free to adjust for a greytone you like (or any color, really)
    red: 0.8,
    green: 0.8,
    blue: 0.8,
}];

let tokens = game.canvas.tokens.controlled
let shouldEnable = !tokens.some(token => TokenMagic.hasFilterId(token, filterId))

if (shouldEnable) {
  tokens.forEach(turnToStone)
} else {
  tokens.forEach(turnToFlesh)
}

function turnToStone(token) {
  TokenMagic.addFilters(token, params)
  InactiveTokensModule.singleton.deactivateTokenForPlayers(token)
}

function turnToFlesh(token) {
  TokenMagic.deleteFilters(token, filterId)
  InactiveTokensModule.singleton.activateTokenForPlayers(token)
}
```

## Installation

Select "Inactive Tokens" in the module installation tool of your choice.\
You can also install manually by using the following [manifest URL](https://github.com/jagoe/fvtt-module-inactive-tokens/releases/latest/download/module.json).

Then, as GM, enable the `Inactive Tokens` module in the `Manage Modules` settings in the Game Settings tab.

## Configuration

The module does not have any configuration.

## API

The module provides the following methods than can be called from macros or other modules:

```ts
InactiveTokensModule.singleton.activateTokenForPlayers(token: Token | TokenDocument): Promise<void>
InactiveTokensModule.singleton.deactivateTokenForPlayers(token: Token | TokenDocument): Promise<void>
InactiveTokensModule.singleton.isTokenActiveForPlayers(token: Token | TokenDocument): boolean
```

You'd probably usually want to retrieve a token

* that has been selected, e.g.: `game.canvas.tokens.controlled[0]`
* by id, e.g.: `game.canvas.tokens.get(id)`
* from the canvas, e.g.: `game.canvas.tokens.documentCollection[id]` or `game.canvas.tokens.documentCollection.contents[0]`

## Dependencies

### `socketlib`

This modul requires [`socketlib](https://foundryvtt.com/packages/socketlib) to be installed in order to function.

### `libWrapper`

This module uses the [`libWrapper`](https://foundryvtt.com/packages/lib-wrapper) library for wrapping core methods. While this is not a hard dependency, it is recommended to install it for the best experience and compatibility with other modules.\
You will get another reminder if you load the module without `libWrapper` being present.

## License

This Foundry VTT module is licensed under a [GNU General Public License v3.0 License](./LICENSE).
