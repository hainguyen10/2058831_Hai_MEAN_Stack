function addBlog() {
    const container = document.getElementById('containerID');

    var title = document.getElementById("titleInput").value;
    var articles = document.getElementById("articlesInput").value;
    var imageAdress = document.getElementById("imageInput").value;

    const content = "<div class='card'><img width='200px' height='200px' src="+imageAdress+"><div class='card-body'> <h4 class='card-title'>"+title+"</h4> <p class='card-text'>"+articles+"</p> </div></div>"
    container.innerHTML+= content;
}
