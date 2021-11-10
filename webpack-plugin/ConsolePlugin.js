/**
 * 为 js 增加 console
 */
class ConsolePlugin {
  apply(compiler){
    compiler.hooks.emit.tap(
      'ConsolePlugin',
      (compilation, callback) => {
        const allKeys = Object.keys(compilation.assets||{})
        const jsKeys = allKeys.filter((v) =>/.js$/.test(v))
        jsKeys.forEach((k) =>{
          const source = compilation.assets[k].source()
          const newSource =`console.log('这是一个webpack插件，为${k}增加一个console');` +  source
          compilation.assets[k] = {
            source:() => newSource,
            size:() => newSource.length
          } 
        })
      }
    )

  }
}
module.exports = ConsolePlugin