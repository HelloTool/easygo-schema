# 华为平行视界（EasyGo） Schema

**中文** |
[English](README.md) |
<small>期待您的翻译！</small>

平行视界是一个将应用内两个 Activity 并排显示的功能。

有关 EasyGo 的更多信息，请见华为的[业务介绍][huawei-easygo-introduction]。

本 JSON Schema 是 `easygo.json` 的非官方数据结构定义，规范来自华为的[配置指南][huawei-easygo-config-introduction]。

## 使用指南

### 纯 JSON

在您的 `easygo.json` 文件中添加 `$schema`，值为 `https://hellotool.github.io/easygo-schema/easygo.1.0.schema.json`。

例如：

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

### 与 JetBrains IDE 集成

如果您使用的是 JetBrains IDE，例如 Android Studio，请在 *设置 (Settings) -> 语言和框架 (Languages & Frameworks) -> 架构和 DTD (Schemas and DTDs) -> JSON 架构映射 (JSON Schema Mapping)* 中添加新的架构，并填入以下信息：

- 架构文件或 URL(Schema file or URL)：`https://hellotool.github.io/easygo-schema/easygo.1.0.schema.json`。
- 架构版本 (Schema version)：JSON 架构版本 v7

### 与 Visual Studio Code 集成

如果您使用 Visual Studio Code（不包括 Visual Studio），请确保设置项 [*JSON > Schema Download: Enable*](vscode://settings/json.schemaDownload.enable) 已勾选（默认已勾选）。

## 相关文档

- 华为
  - [业务介绍][huawei-easygo-introduction]
  - [配置指南][huawei-easygo-config-introduction]
- ~~小米~~（原文档已被删除，时光机打不开文档，欢迎贡献）
- Oppo
  - [OPPO自研平行视窗适配说明][oppo-easygo-guide]

## 许可证

本项目以 [MIT 许可证](LICENSE) 开源。

[huawei-easygo-introduction]: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/introduction-0000001051507626
[huawei-easygo-config-introduction]: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/config-introduction-0000001054270212
[oppo-easygo-guide]: https://open.oppomobile.com/documentation/page/info?id=11127
