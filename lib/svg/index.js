// import './github.svg'
// import './game.svg'

// 自动导入 svg
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./', true, /\.svg$/))
} catch (error) {
}