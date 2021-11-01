<!-- ![Release](https://img.shields.io/github/v/release/jagoe/fvtt-module-inactive-tokens?sort=semver)
![Supported Foundry Version](https://img.shields.io/badge/Foundry-v0.7.9-informational)
![Latest Release Download Count](https://img.shields.io/github/downloads/jagoe/fvtt-module-inactive-tokens/latest/module.zip)
![Forge Installs](https://img.shields.io/badge/dynamic/json?url=https:%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Finactive-tokens&query=package.installs&colorB=4aa94a&label=Forge%20Installs&suffix=%25)

![Pipeline Status](https://github.com/jagoe/fvtt-module-inactive-tokens/workflows/Module%20CI/CD/badge.svg)
[![codecov](https://codecov.io/gh/jagoe/fvtt-module-inactive-tokens/branch/main/graph/badge.svg?token=SCJTRYKL84)](https://codecov.io/gh/jagoe/fvtt-module-inactive-tokens)

![License](https://img.shields.io/github/license/jagoe/fvtt-module-inactive-tokens) -->

## Changelog

A changelog can bout found [here](./CHANGELOG.md).

# Description

<!-- A Foundry VTT module that automatically opens and focuses the current combatant's actor/token sheet.\
It works well with [PopOut!](https://github.com/League-of-Foundry-Developers/fvtt-module-popout) to declutter the screen, while still enabling a GM to quickly view and access each combatant's sheet.

Currently, there is no public API for the module. If there is a need for one, feel free to open an issue or create a PR. -->

## Installation

Install using the following [manifest URL](https://github.com/jagoe/fvtt-module-inactive-tokens/releases/latest/download/module.json).

Then, as GM, enable the `Inactive Tokens` module in the `Manage Modules` settings in the Game Settings tab.

## Configuration

The module does not have any configuration.

## API

The module provides the following methods than can be called from macros or other modules:

<!-- TODO: API -->

## `libWrapper`

This module uses the [`libWrapper`](https://github.com/ruipin/fvtt-lib-wrapper) library for wrapping core methods. While this is not a hard dependency, it is recommended to install it for the best experience and compatibility with other modules.\
You will get another reminder if you load the module without `libWrapper` being present.

## License

This Foundry VTT module is licensed under a [GNU General Public License v3.0 License](./LICENSE).
