var vueForm = new Vue({

	el: "#formBuilder",

	data: {
		preForm: {type: null, label: null, answers: []},
		form:[],
	},

	methods: {
		addToForm: function(){
			this.form.push(this.preForm);
			this.preForm = {type: null, label: null, answers: []};
		}
	},

});