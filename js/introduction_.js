const alertButton = document.getElementById("movieButton");
alertButton.addEventListener("click", getSameMovies);

function getSameMovies(){
	let movies = document.getElementsByClassName("movie");
	let name = document.getElementById("visitedName").value;
	let cnt=0;
	for (var i = movies.length - 1; i >= 0; i--) {
			if(movies[i].checked==true){
				cnt+=1;
			}
	}
	window.alert(name+"님, 저와 "+cnt+"개의 취향이 같으시네요!");
}
