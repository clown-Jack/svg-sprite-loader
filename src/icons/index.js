/**
 * 获取所有图标在body中展示symbol
 */
const req = require.context("./svg", false, /\.svg$/);
const requiredAll= requireContext => requireContext.keys()
requiredAll(req).map(req)


/**
 * 获取所有图标名称
 */
const re = /\.\/(.*)\.svg/;
const svgIcon = requiredAll(req).map(item=>{
//    console.log(item);
//    console.log(item.match(re));
   return item.match(re)[1]
})

export default svgIcon