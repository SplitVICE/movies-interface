<?php

// Movies object class.
class Movie {
    
    public $Name;
    public $Folder;

    function set_name($name){
        $this->Name = $name;
    }

    function get_name(){
        return $this->Name;
    }
}