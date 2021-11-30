// Holds information from server
let movies_folder_path, movies_names_array, button_to_reload_movies_list_text, download_movie_text;

// Main function that triggers engine
function main() {
    render_index_html();
}

//Renders index page
function render_index_html() {
    render_movies_list_box();
    render_movies_list();
    search();
}

//Renders movies box container on the HTML
function render_movies_list_box() {
    let html_content = /* html */
        `<div class="movie_list_box" id="movie_list_box_id">
            <div id="movie_column_1"></div>
            <div id="movie_column_2"></div>
            <div id="movie_column_3"></div>
        </div>`;
    document.getElementById("main_content").innerHTML = html_content;
}

//Renders the list of movies on the HTML
function render_movies_list(filter) {
    let movie_column_1_content = "", movie_column_2_content = "", movie_column_3_content = "";
    let movies_names_array_temp = [];
    let counter = 0;
    filter == null ? movies_names_array_temp = movies_names_array : movies_names_array_temp = filter;
    for (let i = 0; i < movies_names_array_temp.length; i++) {

        if (counter == 0) {
            movie_column_1_content += `
                <div class="movie_link">
                    <a id="${movies_names_array_temp[i].Name}"
                    onclick="render_movie_to_see('${movies_names_array_temp[i].Name}')"
                    href="javascript:void(0)">
                        ${movies_names_array_temp[i].Name}
                    </a>
                </div>`
        }

        if (counter == 1) {
            movie_column_2_content += `
                <div class="movie_link">
                    <a id="${movies_names_array_temp[i].Name}"
                    onclick="render_movie_to_see('${movies_names_array_temp[i].Name}')"
                    href="javascript:void(0)">
                        ${movies_names_array_temp[i].Name}
                    </a>
                </div>`
        }

        if (counter == 2) {
            movie_column_3_content += `
                <div class="movie_link">
                    <a id="${movies_names_array_temp[i].Name}"
                    onclick="render_movie_to_see('${movies_names_array_temp[i].Name}')"
                    href="javascript:void(0)">
                        ${movies_names_array_temp[i].Name}
                    </a>
                </div>`
        }

        counter++;
        if (counter == 3) counter = 0;
    }
    document.getElementById("movie_column_1").innerHTML = movie_column_1_content;
    document.getElementById("movie_column_2").innerHTML = movie_column_2_content;
    document.getElementById("movie_column_3").innerHTML = movie_column_3_content;
}

//Renders on the HTML the selected
function render_movie_to_see(movie_name) {
    let bar = "/";
    let html_content = /* html */`
    <div class="watching-movie-box">
        <div class="movie-name">${movie_name}</div>
        ${movieCompatible(movie_name) ? renderMovieCompatible(movie_name, bar) : renderMovieNotCompatible()}
        <div class="watching-movie-buttons-container">
            <a class="watching-movie-button" href="${movies_folder_path + bar + movie_name}" download>${download_movie_text}</a>
            <a class="watching-movie-button" href="javascript:void(0)" onclick="render_index_html()">${button_to_reload_movies_list_text}</a>
        </div>
    </div>`;
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

// Search system
window.onload = () => { document.getElementById('search').addEventListener("keyup", e => { search(); }); }

function search() {
    if (movies_names_array.length == 0) { return; }
    const input = document.getElementById('search').value.trim().toLowerCase();
    if (input == '') { render_movies_list(null); return; }
    const filtered_movies = [];
    for (let i = 0; i < movies_names_array.length; i++) {
        if (movies_names_array[i].Name.toLowerCase().includes(input)) {
            filtered_movies.push(movies_names_array[i]);
        }
    }
    render_movies_list(filtered_movies);
}