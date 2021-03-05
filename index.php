<?php include './app/index.php'; ?>
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Movies Interface</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="public/styles/style.css">
    <script src="public/scripts/app.js"></script>
</head>

<body class="center">
    <header>
        <h1><?php echo $INI_VARIABLES_ARRAY['INDEX_TITLE'] ?></h1>
    </header>

    <div id="main_content"></div>

    <footer>
        <a target="_blank" href="https://github.com/justvice/movies-interface">Source code</a> - <a href="http://just-vice.com/technology/web-software/movies-interface/" target="_blank">Movies Interface website</a><br><br>Made by JUST VICE - MIT License - v1.1.0
    </footer>

    <script>
        try {
            movies_names_array = <?php echo json_encode($movies_names_array); ?>;
            movies_folder_path = <?php echo json_encode($movies_folder_path); ?>;
            button_to_reload_movies_list_text = <?php echo json_encode($button_to_reload_movies_list_text) ?>;
            download_movie_text = <?php echo json_encode($download_movie_text) ?>;
            main();
        } catch (error) {
            document.getElementsByTagName('header')[0].innerHTML = '<h1>A JavaScript error has occurred. ' + error + '</h1>';
        }
    </script>
</body>

</html>
