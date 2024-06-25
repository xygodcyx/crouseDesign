// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///D:/Code/crouseDesign/node_modules/.pnpm/vite@5.3.1/node_modules/vite/dist/node/index.js";
import Vue from "file:///D:/code/crouseDesign/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_vue@3.4.29/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///D:/code/crouseDesign/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.29/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///D:/code/crouseDesign/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.11.0/node_modules/unplugin-auto-import/dist/vite.js";
import UnoCSS from "file:///D:/code/crouseDesign/node_modules/.pnpm/unocss@0.60.4_postcss@8.4.38_vite@5.3.1/node_modules/unocss/dist/vite.mjs";
import VueMacros from "file:///D:/code/crouseDesign/node_modules/.pnpm/unplugin-vue-macros@2.9.5_@vueuse+core@10.11.0_typescript@5.5.2_vite@5.3.1_vue@3.4.29/node_modules/unplugin-vue-macros/dist/vite.mjs";
import VueRouter from "file:///D:/code/crouseDesign/node_modules/.pnpm/unplugin-vue-router@0.8.8_vue-router@4.4.0_vue@3.4.29/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///D:/code/crouseDesign/node_modules/.pnpm/unplugin-vue-router@0.8.8_vue-router@4.4.0_vue@3.4.29/node_modules/unplugin-vue-router/dist/index.mjs";
import { ElementPlusResolver } from "file:///D:/code/crouseDesign/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.29/node_modules/unplugin-vue-components/dist/resolvers.js";
import vueDevTools from "file:///D:/Code/crouseDesign/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.4_vite@5.3.1_vue@3.4.29/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_dirname = "D:\\Code\\crouseDesign";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true
          }
        })
      }
    }),
    vueDevTools(),
    // https://github.com/posva/unplugin-vue-router
    VueRouter(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        "vue",
        "@vueuse/core",
        "@vueuse/math",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        }
      ],
      dts: true,
      dirs: [
        "./src/composables",
        "./src/api"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()]
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS()
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb2RlXFxcXGNyb3VzZURlc2lnblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxjcm91c2VEZXNpZ25cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvY3JvdXNlRGVzaWduL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgVnVlTWFjcm9zIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYWNyb3Mvdml0ZSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBWdWVNYWNyb3Moe1xuICAgICAgZGVmaW5lT3B0aW9uczogZmFsc2UsXG4gICAgICBkZWZpbmVNb2RlbHM6IGZhbHNlLFxuICAgICAgcGx1Z2luczoge1xuICAgICAgICB2dWU6IFZ1ZSh7XG4gICAgICAgICAgc2NyaXB0OiB7XG4gICAgICAgICAgICBwcm9wc0Rlc3RydWN0dXJlOiB0cnVlLFxuICAgICAgICAgICAgZGVmaW5lTW9kZWw6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHZ1ZURldlRvb2xzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlclxuICAgIFZ1ZVJvdXRlcigpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAgICdAdnVldXNlL21hdGgnLFxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcbiAgICAgICAge1xuICAgICAgICAgIC8vIGFkZCBhbnkgb3RoZXIgaW1wb3J0cyB5b3Ugd2VyZSByZWx5aW5nIG9uXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXIvYXV0byc6IFsndXNlTGluayddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGR0czogdHJ1ZSxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgJy4vc3JjL2NvbXBvc2FibGVzJyxcbiAgICAgICAgJy4vc3JjL2FwaScsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgZHRzOiB0cnVlLFxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAvLyBzZWUgdW5vLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgVW5vQ1NTKCksXG4gIF0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVzdC1kZXYvdml0ZXN0XG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZUFBZTtBQUN0QixTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLGlCQUFpQjtBQVp4QixJQUFNLG1DQUFtQztBQWN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUssQ0FBQztBQUFBLElBQ3pDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1AsS0FBSyxJQUFJO0FBQUEsVUFDUCxRQUFRO0FBQUEsWUFDTixrQkFBa0I7QUFBQSxZQUNsQixhQUFhO0FBQUEsVUFDZjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQTtBQUFBLElBR1osVUFBVTtBQUFBO0FBQUEsSUFHVixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNqQyxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLFVBRUUsbUJBQW1CLENBQUMsU0FBUztBQUFBLFFBQy9CO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBO0FBQUEsSUFHRCxXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUE7QUFBQTtBQUFBLElBSUQsT0FBTztBQUFBLEVBQ1Q7QUFBQTtBQUFBLEVBR0EsTUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
