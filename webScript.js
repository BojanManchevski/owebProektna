<script>
    var drp = document.getElementsByClassName("droptext");
    var i;

    for (i = 0; i < drp.length; i++){
        drp[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block"){
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }


        });

    }



</script>