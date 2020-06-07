// Variables that hold the server's movies location to be sent to
// the client.
var movies_folder_path;
var movies_names_array;
var button_to_reload_movies_list_text;

// Function that makes the frontend run.
function main() {
    render_index_html();
}

//Renders all the index page.
function render_index_html() {
    render_movie_list_holder();
    render_movies_list();
}

//Renders movies box container on the HTML.
function render_movie_list_holder() {
    let html_content = 
    `<div class="list_controller_container">
        <div class="list_container" id="list_container_id">
        </div>
    </div>`;
    document.getElementById("main_content").innerHTML = html_content;
}

//Renders the list of movies on the HTML.
function render_movies_list() {
    var html_content = "";
    for (var i = 0; i < movies_names_array.length; i++) {
        html_content += `
            <div class="movie_line">
                <div class="movie_ahref">
                    <a id="${movies_names_array[i].Name}" 
                    onclick="render_movie_to_see('${movies_names_array[i].Name}')" 
                    href="#">
                    ${movies_names_array[i].Name}
                    </a>
                </div>
            </div>`
    }
    document.getElementById("list_container_id").innerHTML = html_content;
}

//Renders on the HTML the selected movie from the user.
function render_movie_to_see(movie_name) {
    let bar = "/";
    let html_content = 
    `<video controls>
        <source src="${movies_folder_path + bar + movie_name}">
    </video>
    <br>
    <a href="#" onclick="render_index_html()">
        ${button_to_reload_movies_list_text}
    </a>`;
    document.getElementById("main_content").innerHTML = html_content;
}

