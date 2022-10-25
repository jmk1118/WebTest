function onClickInfo() {
    if(this.infoPopup){
        this.infoPopup.close();
        this.infoPopup = null;
    }
    else{
        this.infoPopup = window.open("Info/info.html", "Info", "width=400, height=300");
    }
}