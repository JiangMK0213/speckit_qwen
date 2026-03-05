let appInstance: any = null
let appPromise: Promise<any> | null = null
let resolveApp: ((app: any) => void) | null = null

/**
 * 获取 ThingJS App 实例
 */
export async function getApp(): Promise<any> {
  if (appInstance) {
    return Promise.resolve(appInstance)
  }

  if (!appPromise) {
    appPromise = new Promise(resolve => {
      resolveApp = resolve
    })
  }

  return appPromise
}

/**
 * 设置 ThingJS App 实例
 */
export function setApp(app: any): void {
  appInstance = app
  if (resolveApp) {
    resolveApp(app)
    resolveApp = null
    appPromise = null
  }
}
