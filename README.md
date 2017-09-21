# loot-ml-loader

The simplest possible WebPack loader for [LootML](https://github.com/grind086/LootML). It accepts no options.

## Usage

Simply add something like the following to your WebPack module rules

```js
{
    test: /\.loot$/,
    loader: 'loot-ml-loader'
}
```
