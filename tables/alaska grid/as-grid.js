<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>
$(function(){
    $('#fare_grid').load('/cms/test02 #as_fares');
});
</script>
<div id="fare_grid"></div>
<style>
.text-body.red .routes-expanded .btn
.text-body.purple .routes-expanded .btn {
    cursor: pointer;
    display: block;
    font-family: 'Gotham SSm 7r', 'Gotham SSm A', 'Gotham SSm B', Arial, sans-serif;
    font-weight: 700;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
}
.text-body.red .routes-expanded .btn-secondary,
.text-body.purple .routes-expanded .btn-secondary {
    background: transparent;
    border: 1px solid #D6D5D4;
    color: #000;
    padding: 10px 0;
}
.text-body.red .routes-expanded .routes-book__btn,
.text-body.purple .routes-expanded .routes-book__btn {
    background: transparent;
    border: 1px solid #D6D5D4;
    color: #000;
    cursor: pointer;
    display: block;
    font-family: 'Gotham SSm 7r', 'Gotham SSm A', 'Gotham SSm B', Arial, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 10px;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    line-height: 14px;
    padding: 10px 0;
    position: absolute;
    right: 0;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    top: 18px;
    width: 80px;
}

.text-body li a:hover {
    display: inline;
    font: inherit;
    border: inherit;
    text-transform: inherit;
    all: initial;
    font-family: 'Gotham SSm 3r', 'Gotham SSm A', 'Gotham SSm B', Arial, sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 15px;
    font-size: 1.5rem;
    line-height: 22px;
    text-align: left;
}

.text-body.red .routes-book__btn:hover,
.text-body.red .routes-book__btn:focus,
.text-body.purple .routes-book__btn:hover,
.text-body.purple .routes-book__btn:focus {
    border: 1px solid #7B4397;
    color: #7B4397;
}

.routes-expanded__routes-book>li {
    float: left;
    width: 100% !important;
}
</style>