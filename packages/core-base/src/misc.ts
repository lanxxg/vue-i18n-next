import { getGlobalThis } from '@intlify/shared'

/**
 * This is only called in esm-bundler builds.
 * istanbul-ignore-next
 */
export function initFeatureFlags(): void {
  if (typeof __FEATURE_PROD_INTLIFY_DEVTOOLS__ !== 'boolean') {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false
  }

  if (typeof __FEATURE_JIT_COMPILATION__ !== 'boolean') {
    getGlobalThis().__INTLIFY_JIT_COMPILATION__ = false
  }
}
