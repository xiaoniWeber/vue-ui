
 // 记录中间遇到的问题
// node 版本要在 16以上
//不然 vue-tsc会报错
// 在ui总体库 vite.config.ts中 build 里面添加
 rollupOptions: {
        external: [
          'vue'
        ],
      },

      原因： 渲染<slot></slot>会报错，两个实例

       Unknown word  CssSyntaxError 

       // vue3不兼容 stylelint 14
       //  解决 在stylelint中添加  customSyntax: 'postcss-html',