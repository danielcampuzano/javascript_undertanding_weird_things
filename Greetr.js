//Uso una iife para que se cree un nuevo execution context y mis variables no colisionen con nada de la aplicación, le paso el objeto global para tener acceso y también la referencia a jquery.
(function(global, $){
 
    //Creo el objeto(funcion) que va a tener todo lo de mi librería
    var Greetr = function(firstName, lastName, language) {
        
        //Esto retorna un objeto usando la funcion constructor Greetr.init, esto se hace para que al invoar Greetr nunca haya que usar new, sino que esto lo haga internamente.
        return new Greetr.init(firstName, lastName, language); 
        
    }
    
    //Not exposed to the outside
    //But the object Greetr can see it because of closures
    var supportedLangs = ['en', 'es'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesion'
    }
    
    //Acá iran las funciones y propiedades de mi objeto de la librería, es por eso que lo hago apuntar a Greetr.init.prototype abajo, ya que este ultimo es realmente quien las debería tener, pero esto se hace por notación y orden
    Greetr.prototype = {
        
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalidlanguage";
            }
        },
        
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function(formal) {
            var msg;
            
            //if undefined or null it will be coerced to 'false'
            if(formal) {
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            
            if(console) {
                console.log(msg);
            }
            
            //'this' refersto the calling object at execution time
            // makes the method chainable
            
            return this;
        },
        
        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullName() );
            }
            
            return this;
            
        },
        
        setLang: function(lang) {
            this.language = lang;
            
            this.validate();
            
            return this;
        },
        
        HTMLGreeting: function(selector, formal) {
            if(!$) {
                throw 'jQuery not loaded';
            }
            
            if(!selector){
                throw 'Missing jQuery selector';
            }
            
            var msg;
            
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            
            return this;
        }
        
    };
    
    //Function constructor, recuerdo que this va a a apuntar al nuevo objeto a crear y que no es necesario retornar nada
    Greetr.init = function init(firstName, lastName, language) {
        
        var self = this;
        
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }
    
    //Por notacion quiero que las propiedades de Greetr.init.prototype (Es como una clase) me queden en Greetr.prototype para asignarlas mas facil
    Greetr.init.prototype = Greetr.prototype;
    
    //Vuelvo mi objeto global, recuerdo que mi objeto es una funcion (ver Greetr arriba), es por eso que debe invocarse de la forma G$(...)
    global.Greetr = global.G$ = Greetr;
    
})(window,jQuery);