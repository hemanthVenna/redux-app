

export function movieslist(){
	return {
		type:'MOVIES_LIST',
		payload : [
		  {id:1,name :"POKIRI"},
		  {id:2,name : "ATHADU"},
		  {id:3,name: "MURARI"}
		]
	}
}


export function dirlist(){
	return {
		type:'DIR_LIST',
		payload : [
		  {id:1,name :"PURI"},
		  {id:2,name : "Trivkram"},
		  {id:3,name: "Krishan vamsi"}
		]
	}
}