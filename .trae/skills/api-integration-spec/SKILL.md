---
name: 'api-integration-spec'
description: '提供项目接口对接的规范和标准，包括RESTful API设计、接口对接流程、错误处理和安全规范。当需要进行接口对接或制定接口标准时调用。'
---

# API 接口对接规范

## 1. RESTful API 规范

### 1.1 资源命名

- 使用小写字母和连字符(-)组合
- 复数形式表示资源集合
- 示例：`/users`, `/orders`, `/products`

### 1.2 HTTP 方法

- `GET`：获取资源
- `POST`：创建资源
- `PUT`：更新资源
- `PATCH`：部分更新资源
- `DELETE`：删除资源

### 1.3 路径设计

- 层次结构清晰，从左到右粒度递增
- 避免使用动词，使用名词表示资源
- 示例：`/users/{id}/orders`

### 1.4 查询参数

- 使用 snake_case 命名
- 支持分页：`page`, `page_size`
- 支持排序：`sort_by`, `sort_order`
- 支持过滤：`status`, `created_at`

### 1.5 响应格式

- 统一使用 JSON 格式
- 成功响应包含 `data` 字段
- 分页响应包含 `pagination` 字段
- 示例：
  ```json
  {
    "data": [...],
    "pagination": {
      "page": 1,
      "page_size": 10,
      "total": 100
    }
  }
  ```

## 2. 接口对接流程

### 2.1 文档准备

- 提供详细的 API 文档
- 使用 OpenAPI/Swagger 规范
- 包含接口说明、参数、响应示例

### 2.2 环境配置

- 开发环境、测试环境、生产环境
- 配置不同环境的 API 基础地址
- 管理 API 密钥和认证信息

### 2.3 接口测试

- 使用 Postman 或其他 API 测试工具
- 测试正常场景和异常场景
- 验证响应格式和状态码

### 2.4 集成实现

- 封装 API 调用方法
- 处理错误和异常情况
- 实现重试机制和超时处理

### 2.5 监控和日志

- 记录 API 调用日志
- 监控接口响应时间和成功率
- 及时发现和解决问题

## 3. 错误处理规范

### 3.1 错误码定义

- 统一错误码格式
- 按模块分类错误码
- 提供错误码映射表

### 3.2 错误响应格式

- 包含 `code`、`message`、`details` 字段
- 示例：
  ```json
  {
    "code": 4001,
    "message": "参数错误",
    "details": "缺少必要参数 user_id"
  }
  ```

### 3.3 HTTP 状态码

- 200：成功
- 400：请求错误
- 401：未授权
- 403：禁止访问
- 404：资源不存在
- 500：服务器内部错误

### 3.4 客户端错误处理

- 统一错误处理中间件
- 对不同错误码进行相应处理
- 向用户展示友好的错误信息

## 4. 安全规范

### 4.1 认证授权

- 使用 JWT 或 OAuth 2.0
- 设置合理的 token 过期时间
- 实现刷新 token 机制

### 4.2 数据加密

- HTTPS 传输
- 敏感数据加密存储
- 密码使用哈希处理

### 4.3 访问控制

- 基于角色的访问控制 (RBAC)
- API 速率限制
- IP 白名单/黑名单

### 4.4 输入验证

- 服务端和客户端双重验证
- 防止 SQL 注入、XSS 等攻击
- 验证参数类型和范围

### 4.5 安全审计

- 记录敏感操作日志
- 定期安全扫描
- 及时更新依赖库

## 5. 最佳实践

### 5.1 性能优化

- 使用缓存减少 API 调用
- 批量请求减少网络开销
- 压缩响应数据

### 5.2 可维护性

- 模块化 API 设计
- 版本控制
- 向后兼容性

### 5.3 文档更新

- 及时更新 API 文档
- 版本变更记录
- 接口废弃通知

### 5.4 接口配置规范

- **新增接口配置**：每当新增一个接口时，需要在 `public/apiurl/api.js` 中新增配置
- **key 名称规则**：按照当前实现接口的文件名采用下划线分割的方式生成 key 名称
  - 示例：如果接口实现文件名为 `user_profile.js`，则 key 名称为 `user_profile`
- **配置格式**：
  ```javascript
  key: {
    mock: true,          // 是否使用模拟数据
    mockUrl: '',         // 静态数据地址
    apiUrl: '',          // 实际 API 地址
    time: 0              // 接口超时时间（毫秒）
  }
  ```
- **配置示例**：
  ```javascript
  // public/apiurl/api.js
  export default {
    user_list: {
      mock: true,
      mockUrl: '/mock/user/list.json',
      apiUrl: '/api/v1/users',
      time: 3000
    },
    user_create: {
      mock: false,
      mockUrl: '',
      apiUrl: '/api/v1/users',
      time: 3000
    }
  }
  ```

## 6. 工具推荐

- API 文档：Swagger、Postman
- 测试工具：Postman、JMeter
- 监控工具：Prometheus、Grafana
- 安全工具：OWASP ZAP、SonarQube

## 7. 示例

### 7.1 接口设计示例

```
GET /api/v1/users - 获取用户列表
POST /api/v1/users - 创建用户
GET /api/v1/users/{id} - 获取用户详情
PUT /api/v1/users/{id} - 更新用户
DELETE /api/v1/users/{id} - 删除用户
```

### 7.2 响应示例

```json
// 成功响应
{
  "code": 200,
  "data": {
    "id": 1,
    "name": "张三",
    "email": "zhangsan@example.com"
  },
  "message": "成功"
}

// 错误响应
{
  "code": 4001,
  "message": "参数错误",
  "details": "缺少必要参数 email"
}
```
