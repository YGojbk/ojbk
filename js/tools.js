// 工具对象
const Tools = {
	// 为 element 元素设置CSS样式
	css : function(element, options){
		for (let attr in options) {
			element.style[attr] = options[attr];
		}
	},
	// 生成RGB随机颜色
	randomColor : function() {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);

		return `rgb(${r},${g},${b})`;
	}
}