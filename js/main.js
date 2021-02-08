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
		//soluzione senza push
		self.diskList = queryReturn.data.response;
	 });
	},
	methods : {
		genreFilter : function(){
			const self = this;
			this.genreList = this.diskList.filter((element) => {
				
				return	self.genreList = element.genre
				
			})
		}
		
	}
	

});
Vue.config.devtools = true
  