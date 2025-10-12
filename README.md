# Huawei EasyGo Schema

[中文](README.zh.md) |
**English** |
<small>Your translation contribution is welcome!</small>

EasyGo is a feature that displays two Activities from the same app side by side.

For more information about EasyGo, please refer to Huawei’s [official introduction][huawei easygo introduction].

This JSON Schema is an unofficial data structure definition for `easygo.json`, based on Huawei’s [configuration guide][huawei easygo config introduction].

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

## Related Documentation

- Huawei  
  - [Business Introduction][huawei easygo introduction]  
  - [Configuration Guide][huawei easygo config introduction]  
- ~~Xiaomi~~ (Original documentation has been removed; Wayback Machine unavailable—contributions welcome!)  
- OPPO  
  - [OPPO EasyGo Implementation Guide][oppo easygo guide]

## License

This project is open-sourced under the [MIT License](LICENSE).

[huawei easygo introduction]: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/introduction-0000001051507626
[huawei easygo config introduction]: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/config-introduction-0000001054270212
[oppo easygo guide]: https://open.oppomobile.com/documentation/page/info?id=11127
