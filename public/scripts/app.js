// Holds information from server.
let movies_folder_path, movies_names_array, button_to_reload_movies_list_text, download_movie_text;

// Main function that triggers engine.
function main() {
    render_index_html();
}

//Renders index page.
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
    let html_content = "";
    for (let i = 0; i < movies_names_array.length; i++) {
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

//Renders on the HTML the selected.
function render_movie_to_see(movie_name) {
    let bar = "/";
    let html_content = `
    <h1>${movie_name}</h1>
    ${movieCompatible(movie_name) ? renderMovieCompatible(movie_name, bar) : renderMovieNotCompatible()}
    <hr>
    <a href="${movies_folder_path + bar + movie_name}" download>${download_movie_text}</a>
    <hr>
    <a href="#" onclick="render_index_html()">
        ${button_to_reload_movies_list_text}
    </a>`;
    document.getElementById("main_content").innerHTML = html_content;
}

function renderMovieCompatible(movie_name, bar) {
    return `
    <video controls>
        <source src="${movies_folder_path + bar + movie_name}">
    </video>
    `;
}

function renderMovieNotCompatible(movie_name) {
    return `
    <h2>Sorry! Video format is not compatible.</h2>
    <p>
        Video download is available below.
    </p>
    `;
}

/**
 * Checks if the video selected is compatible to be played.
 * @param { String } movie_name contains .<format> inside of the name
 * this will be checked with regex expression.
 * Returns true if video format is compatible.
 */
function movieCompatible(movie_name) {
    const regex = /.(avi|wmv|flv|vob|m4v|3gp)/gm; // Non compatible video formats.
    let m, status = true;
    while ((m = regex.exec(movie_name)) !== null) {
        if (m.index === regex.lastIndex)
            regex.lastIndex++;
        m.forEach((match, groupIndex) => { // Video format not compatible.
            status = false;
        });
    }
    return status;
}
