/*
Esercizio di oggi Vue Dischi
repo/cartella vue-dischi
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
Stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus (per oggi pomeriggio): Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
*/

new Vue({
	el : '#app',
	data : {
	 diskList : [],
	 genreList : [],
	 genreSelect : 'All'
	},
	mounted(){ 
	 const self = this; 
	 axios.get('https://flynn.boolean.careers/exercises/api/array/music')
	 .then(function(queryReturn){
		self.diskList = queryReturn.data.response;
	 });
	},
	methods : {
		//filtro per avere un solo genere per categoria
		genreFilter : function(){
			const self = this;
			const arrayGenre = [];
			//creo un array contente solo il genere
			this.diskList.forEach(element => {
				arrayGenre.push(element.genre)
			});
			//popolo il dato genreList
			this.genreList = arrayGenre.filter((element, index)=>{	
				//console log di come funziona il filtro
				console.log(arrayGenre.indexOf(element),element,index, arrayGenre.indexOf(element) === index );
				//ritorna solo gli elementi con il loro primo indice uguale ad index
				return arrayGenre.indexOf(element) === index
				
			})
		}		
	}
	
});
Vue.config.devtools = true
  