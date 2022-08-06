let form = document.getElementById('form-product');

form.addEventListener('submit',function(e){

    e.preventDefault();

    let descripcion = document.getElementById('descripcion');
    let cantidad = document.getElementById('cantidad');
    let precio =document.getElementById('precio');
    let list = document.getElementById('list-product');
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="card text-center row">
    <div class="card-body col-10">
        <b>Descripcion:</b>${descripcion.value}
        <b>Cantidad:</b>${cantidad.value}
        <b>Precio:</b>${precio.value}
        <a href="#" 
        class="btn btn-danger col-2"
        name="delete">
        borrar
    </div>
    </a>
</div>
</div>
</div>
</div>
  `;
  list.appendChild(div);



})