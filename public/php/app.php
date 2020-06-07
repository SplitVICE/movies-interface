<?php

// Movies class.
include 'Movie.php';

// Folder where the movies are stored.
$INI_VARIABLES_ARRAY = parse_ini_file("config.ini");
$movies_folder_path = $INI_VARIABLES_ARRAY['MOVIES_FOLDER'];
$button_to_reload_movies_list_text = $INI_VARIABLES_ARRAY['BUTTON_TO_RELOAD_MOVIES_LIST_TEXT'];

// Gets all the movies names and stores it on an array. Then passes the information to the client side.
// Then frontend renders the list on movies.
$movies_only_names_arr = scandir($movies_folder_path);
$movies_names_array = array();
for ($x = 0; $x < count($movies_only_names_arr); $x++) {
    if ($x != 0 && $x != 1) {
        $movie_name = $movies_only_names_arr[$x];
        $temporal_movie = new Movie();
        $temporal_movie->set_name($movie_name);
        array_push($movies_names_array, $temporal_movie);
    }
}
