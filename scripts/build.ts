import { existsSync } from "fs"
import path from "path"
import { readFile, writeFile, readdir, stat, mkdir } from "node:fs/promises"
import YAML from "yaml"

function trimStrings(obj: any): any {
  if (typeof obj === "string") {
    return obj.trim()
  }
  if (Array.isArray(obj)) {
    return obj.map(trimStrings)
  }
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, trimStrings(value)]))
}

/**
 * 构建脚本：将 src 目录下的 YAML 格式的 schema 文件转换为 JSON 格式并输出到 dist 目录
 */
async function build() {
  const srcDir = path.join(process.cwd(), "src")
  const distDir = path.join(process.cwd(), "dist")

  // 创建 dist 目录（如果不存在）
  if (!existsSync(distDir)) {
    await mkdir(distDir, { recursive: true })
  }

  // 遍历 src 目录中的所有版本目录
  const versionDirs = await readdir(srcDir)
  for (const version of versionDirs) {
    const versionDir = path.join(srcDir, version)
    if ((await stat(versionDir)).isDirectory()) {
      // 遍历版本目录中的所有文件
      const files = await readdir(versionDir)
      for (const file of files) {
        if (file.endsWith(".yml") || file.endsWith(".yaml")) {
          const ymlFilePath = path.join(versionDir, file)
          const baseName = path.parse(file).name

          // 读取 YAML 文件内容
          const yamlContent = await readFile(ymlFilePath, "utf8")

          // 解析 YAML 内容
          const schemaObject = trimStrings(YAML.parse(yamlContent))

          // 生成输出文件路径
          const outputFileName = `${baseName}.${version}.schema.json`
          const outputFilePath = path.join(distDir, outputFileName)

          // 写入 JSON 文件
          await writeFile(outputFilePath, JSON.stringify(schemaObject, null, 2))

          console.log(`✅ 已生成: ${outputFileName}`)
        }
      }
    }
  }

  console.log("🎉 构建完成!")
}

await build()
