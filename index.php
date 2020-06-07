<?php
include './public/php/app.php';
?>
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Movies interface</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="public/styles/style.css">
    <script src="public/scripts/app.js"></script>
</head>

<body class="center">
    <header>
        <h1><?php echo $INI_VARIABLES_ARRAY['INDEX_TITLE'] ?></h1>
    </header>

    <!-- JavaScript will render the content of the page here. -->
    <div id="main_content">

    </div>

    <script>
        try {
            // These variables are created at app.js file.
            // These variables will be filled with the backend response of the movies list.
            movies_names_array = <?php echo json_encode($movies_names_array); ?>;
            movies_folder_path = <?php echo json_encode($movies_folder_path); ?>;
            button_to_reload_movies_list_text = <?php echo json_encode($button_to_reload_movies_list_text) ?>;

            // Main function to render the frontend. Function contained inside app.js .
            main();
        } catch (error) {
            // If there is a frontend error, this <h1> tag will be added at the header of the page.
            document.getElementsByTagName('header')[0].innerHTML = '<h1>A JS error has occurred.</h1>';
            console.log(error);
        }
    </script>
    <footer>
        Made by VICE
    </footer>
</body>

</html>