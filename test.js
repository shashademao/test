// 回文
function foo(num) {
	return parseInt((''+num).split('').reverse().join(''))===num
}

//删除重复
function uniq1(arr){
	let ret=[]
	ret=[...new Set(arr)]
	return ret.length
}
function uniq2(arr){
	let obj={}
	let ret=[]
	for(let i=0;i<arr.length;i++){
		if(!obj[arr[i]]){
			obj[arr[i]]=1
			ret.push(arr[i])
		}
	}
	return Object.keys(obj).length
}
function uniq3(arr){
	return arr.filter((item,index,arr)=>{
		return arr.indexOf(item)===index
	}).length	
}
function uniq4(arr){
	let reg=/(\d)(\1*)/g
	return arr.sort().join('').replace(reg,'$1').length
}
