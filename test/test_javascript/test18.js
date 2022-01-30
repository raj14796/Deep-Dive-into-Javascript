const me = {
    name : 'ravi',
    talk () {
        var self = this;
        setTimeout(function (){
            console.log(self.name)        
        },100)
    }
}

me.talk()