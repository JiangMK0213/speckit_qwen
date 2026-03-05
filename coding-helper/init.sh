#!/bin/bash
# 获取当前脚本的绝对路径
SCRIPT_PATH=$(cd "$(dirname "$0")"; pwd)

# 获取脚本所在目录的上级路径（项目根路径）
PARENT_PATH=$(dirname "$SCRIPT_PATH")

# 定义要处理的文件列表
FILES=(".cursorrules")
echo "当前脚本路径: $SCRIPT_PATH"
echo "项目根路径: $PARENT_PATH"
echo "----------------------------------------"
# 遍历处理每个文件
for FILE in "${FILES[@]}"; do
    # 脚本路径下的文件路径
    SCRIPT_FILE="$SCRIPT_PATH/$FILE"
    # 根路径下的文件路径
    ROOT_FILE="$PARENT_PATH/$FILE"
    
    echo "正在处理文件: $FILE"
    
    # 如果根路径文件不存在则创建
    if [ ! -f "$ROOT_FILE" ]; then
        echo "根路径文件不存在，正在创建: $ROOT_FILE"
        touch "$ROOT_FILE"
    else
        echo "根路径文件已存在: $ROOT_FILE"
    fi
    
    # 如果脚本路径下的文件存在
    if [ -f "$SCRIPT_FILE" ]; then
        echo "找到脚本文件: $SCRIPT_FILE"
        # 读取脚本文件内容
        SCRIPT_CONTENT=$(cat "$SCRIPT_FILE")
        
        # 检查根路径文件中是否已存在相同内容
        if ! grep -Fxq "$SCRIPT_CONTENT" "$ROOT_FILE"; then
            echo "检测到新内容，正在追加到根路径文件"
            # 如果根路径文件有内容才添加换行符
            if [ -s "$ROOT_FILE" ]; then
                echo "根路径文件非空，添加换行符"
                echo "" >> "$ROOT_FILE"
            fi
            # 追加文件内容
            echo "$SCRIPT_CONTENT" >> "$ROOT_FILE"
            echo "内容追加完成"
        else
            echo "内容已存在，无需追加"
        fi
    else
        echo "未找到脚本文件: $SCRIPT_FILE"
    fi
    
    echo "文件 $FILE 处理完成"
    echo "----------------------------------------"
done
echo "已处理文件: ${FILES[*]}"
