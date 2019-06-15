const getData = async () => {
  const req = await fetch('./../db/data.json');
  const res = await req.json();  
  return res;
}

const data = getData();
data.then(function(user_data){
	let id = 0;
	$(user_data).each(function() {
		id++;
		this.id = id;
		$("#users").append(
		  `<div class="card card-align bg-white">
	      <img src="${this.foto}" alt="">
	      <div>
	        <p>
	          <b>${this.nome}</b><br />
	          ${this.cargo}
	        </p>
	      </div>
	    </div>`
		);
	});	  

	$("#selected-user").prepend(
		`<div class="card card-align bg-white">
      <img src="${this.foto}" alt="">
      <div>
        <p>
          <b>${this.nome}</b><br />
          ${this.cargo}
        </p>
      </div>
    </div>`
	);
});


