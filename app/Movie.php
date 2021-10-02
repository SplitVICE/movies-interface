<?php
class Movie
{
    public $Name;

    function set_name($name)
    {
        $this->Name = $name;
    }

    function get_name()
    {
        return $this->Name;
    }
}
