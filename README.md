# HUAWEI EasyGo Schema

[中文](README.zh.md) |
**English** |
<small>Your translation contribution is welcome!</small>

EasyGo is a feature that displays two Activities from the same app side by side.

For more information about EasyGo, please refer to HUAWEI’s [official introduction][huawei-easygo-introduction].

This JSON Schema is an unofficial data structure definition for `easygo.json`, based on HUAWEI’s [configuration guide][huawei-easygo-config-introduction].

## Usage Guide

### Plain JSON

Add the `$schema` property to your `easygo.json` file with the value `https://hellotool.github.io/easygo-schema/easygo.1.0.schema.json`.

Example:

```json
{
    "$schema": "https://hellotool.github.io/easygo-schema/easygo.1.0.schema.json",
    "easyGoVersion": "1.0",
    "client": "io.gitee.jesse205.example",
    "logicEntities": [
        {
            "head": {
                "function": "magicwindow",
                "required": "true"
            },
            "body": {
                "mode": "1",
                "activityPairs": [
                    {
                        "from": "io.gitee.jesse205.example.MainActivity",
                        "to": "*"
                    }
                ]
            }
        }
    ]
}
```

### Integration with JetBrains IDEs

If you are using a JetBrains IDE such as Android Studio, add a new schema in *Settings -> Languages & Frameworks -> Schemas and DTDs -> JSON Schema Mappings*, and fill in the following information:

- Schema file or URL: `https://hellotool.github.io/easygo-schema/easygo.1.0.schema.json`
- Schema version: JSON Schema version 7

### Integration with Visual Studio Code

If you are using Visual Studio Code (not Visual Studio), make sure the setting [*JSON > Schema Download: Enable*](vscode://settings/json.schemaDownload.enable) is checked (checked by default).

## Related Documentation

- HUAWEI
  - [Business Introduction][huawei-easygo-introduction]  
  - [Configuration Guide][huawei-easygo-config-introduction]  
- ~~Xiaomi~~ (Original documentation has been removed; Wayback Machine unavailable—contributions welcome!)  
- OPPO
  - [OPPO EasyGo Implementation Guide][oppo-easygo-guide]

## License

This project is open-sourced under the [MIT License](LICENSE).

[huawei-easygo-introduction]: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/introduction-0000001051507626
[huawei-easygo-config-introduction]: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/config-introduction-0000001054270212
[oppo-easygo-guide]: https://open.oppomobile.com/documentation/page/info?id=11127
