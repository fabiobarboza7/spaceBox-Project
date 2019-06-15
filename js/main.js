// Getting data from fakeDb. Need user http, so that locahost server at least
const getData = async () => {
  const req = await fetch('./../db/data.json');
  const res = await req.json();  
  return res;
}

// Handle data after promise return
const data = getData();
data.then(function(user_data){
	// Using some jQuery just to make a cleanar code instead a lot of createElement("[...]")
	$(user_data).each(function() {
		$("#users").append(
		  `<div class="card card-align" id="user${this.id}">
	      <img src="${this.foto}" alt="">
	      <div>
	      <div class="circle"><span>${this.id}</span></div>
	        <p>
	          <b>${this.nome}</b><br />
	          ${this.cargo}
	        </p>
	      </div>
	    </div>`
		);
		// saving the `this` context
		let that = this;
		$(`#user${this.id}`).on('click', function(){
			$(this).toggleClass('card-checked').siblings().removeClass('card-checked');
			$("#selected-user").html(
				`<div class="card card-align">
		      <img src="${that.foto}" alt="">
		      <div>
		        <p>
		          NOME: <b>${that.nome}</b><br />
		          CARDO: <b>${that.cargo}</b><br />
		          IDADE: <b>${that.idade}</b>
		        </p>
		      </div>
		    </div>`
			).hide().fadeIn();		
		});
	});	  
});
