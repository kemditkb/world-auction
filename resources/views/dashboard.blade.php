<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{ URL::asset('css/dashboard.css') }}"/>
        <title>天下第一拍 - 管理介面</title>

    </head>
    <body>
        <div id="app"></div>
        <script src="{{ URL::asset('js/dashboard.js') }}"></script>
    </body>
</html>
