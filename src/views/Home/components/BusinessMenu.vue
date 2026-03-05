<template>
  <div class="business-menu" :class="direction">
    <template v-for="item in items" :key="item.type">
      <!-- 有子菜单的项使用下拉菜单 -->
      <el-tooltip
        v-if="item.children && item.children.length > 0"
        :placement="direction === 'vertical' ? 'right-start' : 'bottom'"
        trigger="click"
        :teleported="false"
        :hide-after="0"
        :effect="'dark'"
        :popper-class="'business-submenu-dropdown'"
      >
        <template #content>
          <div class="business-submenu">
            <div
              v-for="child in item.children"
              :key="child.type"
              class="business-menu-sub-item"
              :class="{ active: isSubActive(child.type) }"
              @click.stop="toggleBusiness(child)"
            >
              <el-icon class="icon icon-left"><check /></el-icon>
              <span class="business-menu-sub-item-name">{{ child.name }}</span>
            </div>
          </div>
        </template>

        <div class="business-menu-item" :class="{ active: isActive(item.type) }" @click="toggleBusiness(item)">
          {{ item.name }}
          <el-icon class="icon icon-right">
            <arrow-right v-if="direction === 'vertical'" />
            <arrow-down v-else />
          </el-icon>
        </div>
      </el-tooltip>

      <!-- 没有子菜单的项直接显示按钮 -->
      <div v-else class="business-menu-item" :class="{ active: isActive(item.type) }" @click="toggleBusiness(item)">
        {{ item.name }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ArrowDown, ArrowRight, Check } from '@element-plus/icons-vue'

interface BusinessMenuItem {
  name: string
  type: string
  children?: BusinessMenuItem[]
  parentType?: string
  businessMutex?: boolean
}

const props = withDefaults(
  defineProps<{
    items: BusinessMenuItem[]
    direction?: 'horizontal' | 'vertical' // 菜单排列方向
    mutex?: boolean // 是否互斥模式
  }>(),
  {
    direction: 'horizontal',
    mutex: true
  }
)

const emit = defineEmits(['business-change', 'sub-business-change'])

const activeBusinesses = ref<string[]>([])
const activeSubBusinesses = ref<Record<string, string[]>>({})

// 初始化激活状态
watch(
  () => props.items,
  items => {
    if (items.length > 0) {
      const firstItem = items.find(item => !item.children?.length) || items[0]

      activeBusinesses.value = [firstItem.type]

      if (firstItem.children?.length) {
        // 有子菜单的项，只激活父菜单
        activeSubBusinesses.value[firstItem.type] = []

        emit('business-change', activeBusinesses.value)
        emit('sub-business-change', { parent: firstItem.type, children: [] })
      } else {
        // 没有子菜单的项
        emit('business-change', activeBusinesses.value)
      }
    }
  },
  { immediate: true }
)

// 判断菜单激活状态
const isActive = (type: string) => activeBusinesses.value.includes(type)
const isSubActive = (type: string) => {
  const parentItem = props.items.find(item => item.children?.some(child => child.type === type))
  return parentItem ? activeSubBusinesses.value[parentItem.type]?.includes(type) || false : false
}

// 业务切换处理
function toggleBusiness(item: BusinessMenuItem) {
  // 处理父菜单点击
  if (item.children?.length) {
    // 有子菜单的父菜单始终互斥
    activeBusinesses.value = [item.type]

    // 初始化子菜单状态
    if (!activeSubBusinesses.value[item.type]) {
      activeSubBusinesses.value[item.type] = []
    }

    emit('business-change', activeBusinesses.value)
    emit('sub-business-change', {
      parent: item.type,
      children: activeSubBusinesses.value[item.type]
    })
    return
  }

  // 处理子菜单项
  if (item.parentType) {
    const parentItem = props.items.find(business => business.type === item.parentType)
    const isItemMutex = parentItem?.businessMutex ?? true

    // 确保子菜单数组已初始化
    if (!activeSubBusinesses.value[item.parentType]) {
      activeSubBusinesses.value[item.parentType] = []
    }

    const subItems = activeSubBusinesses.value[item.parentType]
    const index = subItems.indexOf(item.type)

    if (isItemMutex) {
      // 互斥模式：只能选一个
      activeSubBusinesses.value[item.parentType] = [item.type]
    } else if (index > -1) {
      // 非互斥模式：已选中则取消
      subItems.splice(index, 1)
    } else {
      // 非互斥模式：未选中则添加
      subItems.push(item.type)
    }

    emit('sub-business-change', {
      parent: item.parentType,
      children: activeSubBusinesses.value[item.parentType]
    })
    return
  }

  // 处理顶级菜单项（没有子菜单的父菜单）
  const index = activeBusinesses.value.indexOf(item.type)

  if (props.mutex) {
    // 互斥模式：只能选一个
    activeBusinesses.value = [item.type]
  } else if (index > -1) {
    // 非互斥模式：已选中则取消
    activeBusinesses.value.splice(index, 1)
  } else {
    // 非互斥模式：未选中则添加
    activeBusinesses.value.push(item.type)
  }

  emit('business-change', activeBusinesses.value)
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins' as *;

.business-menu {
  @include flex;
  gap: 12px;

  &.horizontal {
    flex-direction: row;
  }

  &.vertical {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
  }
}

.business-menu-item {
  padding: 3px 10px;
  @include glass-effect;
  background-color: $btn-bg;
  border-radius: $border-radius;
  font-size: 14px;
  line-height: 1.5;
  color: $text-color;
  cursor: pointer;
  transition: all 0.3s;
  @include flex-y-center;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &.active {
    background: $btn-active-bg;
    color: $text-color-active;
  }
}

:deep(.business-submenu-dropdown) {
  padding: 0;
  min-width: 0px;
  border: none;
  @include glass-effect(50px, $btn-bg);
}

.business-submenu {
  padding: 5px 0;
}

.business-menu-sub-item {
  padding: 3px 12px;
  @include flex-y-center;
  @include ellipsis;
  font-size: 14px;
  color: $text-color-regular;
  cursor: pointer;
  transition: all 0.2s;

  &.active {
    color: $primary-color;

    .icon-left {
      opacity: 1;
    }
  }
}

.business-menu-sub-item-name {
  padding: 2px;
}

.icon {
  font-size: 16px;

  &.icon-right {
    margin-left: 4px;
  }

  &.icon-left {
    margin-right: 4px;
    opacity: 0.5;
  }
}
</style>
