function loadImage(i){
    document.getElementById('certificate-area-card').innerHTML=`
                                        <div class="card">
                                        <div class="card-body">
                                        <img data-src="media/${i}"/>
                                        </div>
                                        </div>`
}