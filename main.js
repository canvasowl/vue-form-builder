var vueForm = new Vue({

	el: "#formBuilder",

	data: {
		option: null,
		preForm: {type: null, label: null, answers: []},
		form:[],
	},

	methods: {
		addToForm: function(){
			this.form.push(this.preForm);
			this.preForm = {type: null, label: null, answers: []};
		},
		addOption: function(){
			this.preForm.answers.push(this.option);
			this.option = null;
		},
	},
});
